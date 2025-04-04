import React, { useEffect, useRef } from 'react'
import { getTextDimensions, calculateShapeDimensions, applyShapeAttributes, renderNodeLabel, getLinkX, getLinkY } from './utils/utils'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import styles from './MindMap.module.css'

const MindMap = ({ nodes, links }) => {
  const svgRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    if (svgRef.current) {
      // --- Pre-calculate dimensions for each node --- START
      nodes.forEach(d => {
        const { textWidth, textHeight } = getTextDimensions(d.label || '');
        const { shapeWidth, shapeHeight } = calculateShapeDimensions(d.shape, textWidth, textHeight);
        console.log(`Node ${d.id} ('${d.label}'): text=(${textWidth}, ${textHeight}), shape=(${shapeWidth}, ${shapeHeight})`);
        d.shapeWidth = shapeWidth; // Store on the node data
        d.shapeHeight = shapeHeight; // Store on the node data
        d.textWidth = textWidth; // Also store text width if needed later
        d.textHeight = textHeight; // Also store text height if needed later
      });
      // --- Pre-calculate dimensions for each node --- END

      const svg = d3
        .select(svgRef.current)
        .attr('width', width)
        .attr('height', height)

      const g = svg.append('g')

      const simulation = d3
        .forceSimulation(nodes)
        .force(
          'link',
          d3
            .forceLink(links)
            .id((d) => d.id)
            .distance(200)
        )
        .force('charge', d3.forceManyBody().strength(-500))
        .force('center', d3.forceCenter(width / 2, height / 2))

      const link = g
        .append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke', '#66BB6A')
        .attr('stroke-width', 3)

      const node = g
        .append('g')
        .attr('class', 'nodes')
        .selectAll('g')
        .data(nodes)
        .enter()
        .append('g')
        .call(
          d3
            .drag()
            .on('start', (event, d) => {
              if (!event.active) simulation.alphaTarget(0.3).restart()
              d.fx = d.x
              d.fy = d.y
            })
            .on('drag', (event, d) => {
              d.fx = event.x
              d.fy = event.y
            })
            .on('end', (event, d) => {
              if (!event.active) simulation.alphaTarget(0)
              d.fx = null
              d.fy = null
            })
        )

      // --- Modify node shape rendering to use calculated dimensions --- START
      node.each(function(d) {
        const nodeEl = d3.select(this);
        let shapeSelection;
        // Append correct SVG element based on shape
        if (d.shape === 'hexagon' || d.shape === 'diamond') {
          shapeSelection = nodeEl.append('polygon');
        } else if (d.shape === 'roundRect') {
          shapeSelection = nodeEl.append('path');
        } else if (d.shape === 'rect') {
          shapeSelection = nodeEl.append('rect');
        } else if (d.shape === 'ellipse') {
          shapeSelection = nodeEl.append('ellipse');
        }

        if (shapeSelection) {
            // Apply attributes using the helper and stored dimensions
            applyShapeAttributes(shapeSelection, d, d.shapeWidth, d.shapeHeight);
        }
      });
      // --- Modify node shape rendering to use calculated dimensions --- END

      // Add text labels using the helper function
      node.each(function(d) {
        renderNodeLabel(d3.select(this), d);
      });

      // Create a tooltip using absolute positioning so it scrolls with the page
      const tooltip = d3
        .select('body')
        .append('div')
        .style('position', 'absolute')
        .style('padding', '6px')
        .style('background', 'white')
        .style('border', '1px solid #ccc')
        .style('border-radius', '4px')
        .style('pointer-events', 'none')
        .style('opacity', 0)
        .style('max-width', '300px')
        .style('max-height', '200px')
        .style('overflow-y', 'auto')

      // Hide the tooltip when the user scrolls
      const hideTooltip = () => {
        tooltip.transition().duration(200).style('opacity', 0)
      }
      window.addEventListener('scroll', hideTooltip)

      node
        .on('mouseover', (event, d) => {
          tooltip
            .html(`<strong>${d.label}</strong><br>${d.definition}`)
            .style('display', 'block')

          const tooltipWidth = tooltip.node().offsetWidth
          const tooltipHeight = tooltip.node().offsetHeight

          let left = event.pageX + 10
          let top = event.pageY - tooltipHeight - 10

          // Prevent right overflow
          if (
            left + tooltipWidth >
            document.documentElement.clientWidth + window.scrollX
          ) {
            left =
              document.documentElement.clientWidth +
              window.scrollX -
              tooltipWidth -
              10
          }
          // Prevent left overflow
          if (left < window.scrollX) {
            left = window.scrollX + 10
          }
          // Prevent top overflow
          if (top < window.scrollY) {
            top = event.pageY + 10
          }
          // Prevent bottom overflow
          if (
            top + tooltipHeight >
            document.documentElement.clientHeight + window.scrollY
          ) {
            top =
              document.documentElement.clientHeight +
              window.scrollY -
              tooltipHeight -
              10
          }

          tooltip
            .style('left', left + 'px')
            .style('top', top + 'px')
            .transition()
            .duration(200)
            .style('opacity', 0.9)
        })
        .on('mouseout', () => {
          tooltip.transition().duration(200).style('opacity', 0)
        })

      simulation.on('tick', () => {
        link
          .attr('x1', d => getLinkX(d.source))
          .attr('y1', d => getLinkY(d.source))
          .attr('x2', d => getLinkX(d.target))
          .attr('y2', d => getLinkY(d.target));

        node.attr('transform', (d) => {
          return d ? `translate(${d.x},${d.y})` : null
        })
      })

      const zoom = d3
        .zoom()
        .scaleExtent([0.1, 10])
        .on('zoom', (event) => {
          g.attr('transform', event.transform)
        })

      svg.call(zoom)

      const resizeObserver = new ResizeObserver(() => {
        const newWidth = container.clientWidth
        const newHeight = container.clientHeight
        svg.attr('width', newWidth).attr('height', newHeight)
        simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2))
      })

      resizeObserver.observe(container)

      return () => {
        simulation.stop()
        svg.selectAll('*').remove()
        tooltip.remove()
        window.removeEventListener('scroll', hideTooltip)
        resizeObserver.disconnect()
      }
    }
  }, [nodes, links])

  return (
    <main className={styles['mind-map']} ref={containerRef}>
      <svg ref={svgRef}></svg>
    </main>
  )
}

MindMap.propTypes = {
  nodes: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
}

export default MindMap
