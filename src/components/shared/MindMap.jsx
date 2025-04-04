// src/components/mindmap/MindMap.jsx
import React, { useEffect, useRef } from 'react'
import { rootRect, hexagonPoints, diamondPoints } from './utils/utils'
import * as d3 from 'd3'
import styles from './MindMap.module.css'
import useTooltip from '../../hooks/useToolTip'

const MindMap = ({ nodes, links }) => {
  const svgRef = useRef(null)
  const containerRef = useRef(null)
  const { handleMouseOver, handleMouseOut } = useTooltip()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    if (svgRef.current) {
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
            .distance(250)
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
        .on('mouseover', function (event, d) {
          handleMouseOver(event, { label: d.label, definition: d.definition })
        })
        .on('mouseout', handleMouseOut)

      node
        .append((d) => {
          if (d.shape === 'hexagon') {
            return document.createElementNS(
              'http://www.w3.org/2000/svg',
              'polygon'
            )
          } else if (d.shape === 'roundRect') {
            return document.createElementNS(
              'http://www.w3.org/2000/svg',
              'path'
            )
          } else if (d.shape === 'rect') {
            return document.createElementNS(
              'http://www.w3.org/2000/svg',
              'rect'
            )
          } else if (d.shape === 'diamond') {
            return document.createElementNS(
              'http://www.w3.org/2000/svg',
              'polygon'
            )
          } else if (d.shape === 'ellipse') {
            return document.createElementNS(
              'http://www.w3.org/2000/svg',
              'ellipse'
            )
          }
          return null
        })
        .attr('d', (d) => {
          if (d.shape === 'roundRect') {
            return rootRect(200, 130, 10)
          }
          return null
        })
        .attr('points', (d) => {
          if (d.shape === 'hexagon') {
            return hexagonPoints(20)
          } else if (d.shape === 'diamond') {
            return diamondPoints(40, 40)
          }
          return null
        })
        .attr('fill', (d) => d.color)

      node.each(function (d) {
        const labelLines = d.label.split('\n')

        const div = document.createElement('div')
        div.style.position = 'absolute'
        div.style.visibility = 'hidden'
        div.style.whiteSpace = 'nowrap'
        div.innerHTML = d.label.replace('\n', '<br>')
        document.body.appendChild(div)
        const textWidth = div.offsetWidth + 20
        const textHeight = div.offsetHeight + 20
        document.body.removeChild(div)

        const shapeWidth =
          d.shape === 'rect' ? textWidth : Math.max(textWidth, textHeight)
        const shapeHeight =
          d.shape === 'rect' ? textHeight : Math.max(textWidth, textHeight)

        d.shapeWidth = shapeWidth
        d.shapeHeight = shapeHeight

        if (d.id === 'root') {
          const rootWidth = 200
          const rootHeight = 100

          d3.select(this).select('path').attr('fill', '#333')

          const text = d3
            .select(this)
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .style('fill', 'white')
            .attr('transform', `translate(${rootWidth / 2}, ${rootHeight / 2})`)

          if (labelLines.length > 1) {
            labelLines.forEach((line, index) => {
              text
                .append('tspan')
                .attr('x', 0)
                .attr('dy', index === 0 ? 0 : '1.2em')
                .text(line)
            })
          } else {
            text.text(d.label)
          }
        } else if (d.shape === 'rect') {
          d3.select(this)
            .select('rect')
            .attr('width', shapeWidth)
            .attr('height', shapeHeight)
            .attr('x', -shapeWidth / 2)
            .attr('y', -shapeHeight / 2)

          const text = d3
            .select(this)
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .style('fill', d.id === 'root' ? 'white' : 'black')

          if (labelLines.length > 1) {
            labelLines.forEach((line, index) => {
              text
                .append('tspan')
                .attr('x', 0)
                .attr('dy', index === 0 ? 0 : '1.2em')
                .text(line)
            })
          } else {
            text.text(d.label)
          }
        } else if (d.shape === 'hexagon') {
          d3.select(this)
            .select('polygon')
            .attr('points', hexagonPoints(shapeWidth / Math.sqrt(3)))

          const text = d3
            .select(this)
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .style('fill', d.id === 'root' ? 'white' : 'black')

          if (labelLines.length > 1) {
            labelLines.forEach((line, index) => {
              text
                .append('tspan')
                .attr('x', 0)
                .attr('dy', index === 0 ? 0 : '1.2em')
                .text(line)
            })
          } else {
            text.text(d.label)
          }
        } else if (d.shape === 'diamond') {
          d3.select(this)
            .select('polygon')
            .attr('points', diamondPoints(shapeWidth, shapeHeight))

          const points = diamondPoints(shapeWidth, shapeHeight).split(' ')
          const centerX =
            points.reduce((sum, p) => sum + parseFloat(p.split(',')[0]), 0) /
            points.length
          const centerY =
            points.reduce((sum, p) => sum + parseFloat(p.split(',')[1]), 0) /
            points.length

          const text = d3
            .select(this)
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('transform', `translate(${centerX}, ${centerY})`)
            .style('fill', d.id === 'root' ? 'white' : 'black')

          if (labelLines.length > 1) {
            labelLines.forEach((line, index) => {
              text
                .append('tspan')
                .attr('x', 0)
                .attr('dy', index === 0 ? 0 : '1.2em')
                .text(line)
            })
          } else {
            text.text(d.label)
          }
        } else if (d.shape === 'ellipse') {
          d3.select(this)
            .select('ellipse')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('rx', d.shapeWidth / 2)
            .attr('ry', d.shapeHeight / 2)

          const text = d3
            .select(this)
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('x', 0)
            .attr('y', 0)
            .style('fill', d.id === 'root' ? 'white' : 'black')

          if (labelLines.length > 1) {
            labelLines.forEach((line, index) => {
              text
                .append('tspan')
                .attr('x', 0)
                .attr('dy', index === 0 ? 0 : '1.2em')
                .text(line)
            })
          } else {
            text.text(d.label)
          }
        }
      })

      simulation.on('tick', () => {
        link
          .attr('x1', (d) => {
            if (d.source.id === 'root') {
              return d.source.x + 100
            } else if (d.source.shape === 'diamond') {
              const points = diamondPoints(
                d.source.shapeWidth,
                d.source.shapeHeight
              ).split(' ')
              const centerX =
                points.reduce(
                  (sum, p) => sum + parseFloat(p.split(',')[0]),
                  0
                ) / points.length
              return d.source.x + centerX
            }
            return d.source.x
          })
          .attr('y1', (d) => {
            if (d.source.id === 'root') {
              return d.source.y + 50
            } else if (d.source.shape === 'diamond') {
              const points = diamondPoints(
                d.source.shapeWidth,
                d.source.shapeHeight
              ).split(' ')
              const centerY =
                points.reduce(
                  (sum, p) => sum + parseFloat(p.split(',')[1]),
                  0
                ) / points.length
              return d.source.y + centerY
            }
            return d.source.y
          })
          .attr('x2', (d) => {
            if (d.target.id === 'root') {
              return d.target.x + 100
            } else if (d.target.shape === 'diamond') {
              const points = diamondPoints(
                d.target.shapeWidth,
                d.target.shapeHeight
              ).split(' ')
              const centerX =
                points.reduce(
                  (sum, p) => sum + parseFloat(p.split(',')[0]),
                  0
                ) / points.length
              return d.target.x + centerX
            }
            return d.target.x
          })
          .attr('y2', (d) => {
            if (d.target.id === 'root') {
              return d.target.y + 50
            } else if (d.target.shape === 'diamond') {
              const points = diamondPoints(
                d.target.shapeWidth,
                d.target.shapeHeight
              ).split(' ')
              const centerY =
                points.reduce(
                  (sum, p) => sum + parseFloat(p.split(',')[1]),
                  0
                ) / points.length
              return d.target.y + centerY
            }
            return d.target.y
          })

        node.attr('transform', (d) => {
          if (d) {
            return `translate(${d.x},${d.y})`
          }
          return null
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
        simulation.alpha(1).restart()
      })

      resizeObserver.observe(container)

      return () => {
        simulation.stop()
        svg.selectAll('*').remove()
        resizeObserver.disconnect()
      }
    }
  }, [nodes, links, handleMouseOver, handleMouseOut])

  return (
    <main className={styles['mind-map']} ref={containerRef}>
      <svg ref={svgRef}></svg>
    </main>
  )
}

export default MindMap
