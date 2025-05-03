import React, { useEffect, useRef } from 'react'
import {
  getTextDimensions,
  calculateShapeDimensions,
  applyShapeAttributes,
  renderNodeLabel,
  getLinkX,
  getLinkY,
} from './utils/utils'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import styles from './MindMap.module.css'
import { useTheme } from '../../theme/ThemeProvider'
import HelpTooltip from './HelpTooltip'

const MindMap = ({ nodes, links }) => {
  const svgRef = useRef(null)
  const containerRef = useRef(null)
  const { palette } = useTheme()

  // ---
// THEME COLOR MAPPING
// Map color keys from node data to the current theme's palette.
// This is only used for visual rendering, not for the D3 simulation itself.
// ---
  const themedNodes = nodes.map((node) => ({
    ...node,
    color: palette[node.color] || node.color,
  }))

  // ---
// MAIN D3 SIMULATION EFFECT
// This useEffect runs the entire D3 force simulation. It re-runs whenever the nodes or links change.
// Responsible for:
//   - Assigning node levels (depth in the tree)
//   - Precomputing node dimensions
//   - Initializing and configuring all D3 forces
//   - Rendering the SVG mind map
// ---
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    // ---
// NODE LEVEL ASSIGNMENT
// Assigns a 'level' property to each node, representing its depth from the root.
// Root node gets level 0, direct children get level 1, etc.
// This is used to arrange nodes in concentric rings and to apply custom forces by level.
// ---
    const nodeMap = new Map(nodes.map(n => [n.id, n]));
    if (nodes.length > 0) {
      nodes[0].level = 0;
      nodes[0].fx = width / 2;
      nodes[0].fy = height / 2;
      // Mark root-to-child links
// These links are treated specially in forceLink, as they define the first ring from the root.
      const rootId = nodes[0].id;
      links.forEach(l => {
        if ((typeof l.source === 'string' ? l.source : l.source.id) === rootId &&
            (typeof l.target === 'string' ? nodeMap.get(l.target)?.level : l.target?.level) === 1) {
          l.isRootToChild = true;
        } else {
          l.isRootToChild = false;
        }
      });
      // Breadth-First Search (BFS) to assign levels to all nodes
// Ensures that every node gets a correct level, even if the input is not strictly ordered.
      let queue = [nodes[0]];
      while (queue.length > 0) {
        const curr = queue.shift();
        const currLevel = curr.level || 0;
        nodes.forEach(n => {
          if (n.parent === curr.id && (n.level === undefined || n.level > currLevel + 1)) {
            n.level = currLevel + 1;
            queue.push(n);
          }
        });
      }
      // (Legacy) Pinning logic for direct children.
// This section used to pin direct children at equal angles, but now the simulation handles layout via forceRadial.
// Children are unpinned to allow D3 to position them naturally.
      const children = nodes.filter(n => n.level === 1);
      const rootRadius = nodes[0].shapeWidth ? nodes[0].shapeWidth / 2 : 60;
      const minGap = 60;
      const childWidths = children.map(n => n.shapeWidth ? n.shapeWidth : 80);
      const childCircumference = childWidths.reduce((a, b) => a + b, 0) + children.length * minGap;
      const childCircleRadius = Math.max(
        (childCircumference) / (2 * Math.PI),
        rootRadius + minGap + Math.max(...childWidths.map(w => w/2)) + 40 // fallback minimum
      );
      // UNPIN all children: let D3 simulation handle them (see above comment).
      children.forEach((child) => {
        child.fx = null;
        child.fy = null;
      }); // We'll use forceRadial for all levels below
    }

    if (svgRef.current) {
      // ---
// PRECOMPUTE NODE DIMENSIONS
// For each node, measure its label and calculate the required width and height for its shape.
// This ensures that forceCollide and other forces can account for real node sizes.
// ---
      nodes.forEach((d) => {
        const { textWidth, textHeight } = getTextDimensions(d.label || '')
        const { shapeWidth, shapeHeight } = calculateShapeDimensions(
          d.shape,
          textWidth,
          textHeight
        )
        d.shapeWidth = shapeWidth
        d.shapeHeight = shapeHeight
        d.textWidth = textWidth
        d.textHeight = textHeight
      })

      const svg = d3
        .select(svgRef.current)
        .attr('width', width)
        .attr('height', height)

      const g = svg.append('g')

      // ---
// D3 FORCE SIMULATION CONFIGURATION
// This is the heart of the mind map layout. Each force is explained below:
// ---
// Only apply forceLink to non-root-to-child links
// Root-to-child links are handled separately for custom spacing.
      const nonRootToChildLinks = links.filter(l => !l.isRootToChild);
      const simulation = d3
        .forceSimulation(nodes)
        .alphaDecay(0.01) // Slower cooling for smoother movement
        .velocityDecay(.5) // More fluid transitions
        .force(
          'link',
          d3
            .forceLink(nonRootToChildLinks)
            .id((d) => d.id)
            .distance((link) => {
              // For root-to-child links, use a custom distance to ensure direct children are spaced far enough from the root.
// This prevents overlap between the root and its children, especially when nodes are large.
              const rootId = nodes[0]?.id;
              if (link.source.id === rootId) {
                const child = typeof link.target === 'object' ? link.target : nodes.find(n => n.id === link.target);
                const rootRadius = nodes[0].shapeWidth ? nodes[0].shapeWidth / 2 : 60;
                const minGap = 80;
                const childRadius = child.shapeWidth ? child.shapeWidth / 2 : 40;
                // Enforce a minimum root-to-child distance of 300px
                return Math.max(rootRadius + minGap + childRadius, 300);
              }
              // For all other links, use a default or capped distance.
              let baseDist = 220;
              return Math.max(120, Math.min(baseDist, 300));
            }) // Per-link distance: root-to-child uses exact spacing, others use a default range.
        )
        .force('charge', d3.forceManyBody().strength(-2000)) // Repulsion force: pushes all nodes apart. Tune this for overall map density.
        .force('radialRings', d3.forceRadial(
          (d) => {
            if (d.level >= 1) {
              const minGap = 80;
              const rootRadius = nodes[0].shapeWidth ? nodes[0].shapeWidth / 2 : 60;
              // Gather all nodes by level
// This is used to compute ring radii for each level (concentric circles).
              const levels = {};
              nodes.forEach(n => {
                if (n.level != null && n.level >= 1) {
                  if (!levels[n.level]) levels[n.level] = [];
                  levels[n.level].push(n);
                }
              });
              // For each level, compute the maximum node radius (half width) in that level.
// This helps space out rings so that large nodes don't overlap.
              const maxRadii = {};
              Object.keys(levels).forEach(lvl => {
                maxRadii[lvl] = Math.max(...levels[lvl].map(n => n.shapeWidth ? n.shapeWidth / 2 : 40));
              });
              // ---
// DYNAMIC RING RADIUS CALCULATION
// For each level, calculate the radius of the concentric ring that nodes should be placed on.
// The radius is increased based on the size and number of nodes at each level, with extra spacing for deeper levels.
// ---
              let radii = {};
              radii[0] = rootRadius;
              let prevRadius = rootRadius;
              let prevMax = rootRadius;
              const maxLevel = Math.max(...Object.keys(levels).map(lvl => Number(lvl)));
              // Special handling for the first ring (direct children):
// If there are no grandchildren, use a fixed radius for a tight circle.
// If there are grandchildren, expand the ring but cap it to avoid excessive spacing.
              const grandchildrenExist = levels[2] && levels[2].length > 0;
              const defaultChildRing = 200;
              const maxChildRing = 240;
              if (!grandchildrenExist) {
                radii[1] = defaultChildRing;
                prevRadius = radii[1];
                prevMax = maxRadii[1] || 40;
              } else {
                // Usual dynamic calculation, but cap child ring
                const currMax = maxRadii[1] || 40;
                let calc = prevRadius + prevMax + minGap + currMax;
                radii[1] = Math.min(calc, maxChildRing);
                prevRadius = radii[1];
                prevMax = currMax;
              }
              // For deeper levels (grandchildren, etc.),
// exponentially increase the gap between rings to prevent crowding.
              for (let lvl = 2; lvl <= maxLevel; lvl++) {
                const currMax = maxRadii[lvl] || 40;
                // Exponentially scale the gap for deeper levels
                const scaledGap = minGap * Math.pow(1.8, lvl - 1);
                radii[lvl] = prevRadius + prevMax + scaledGap + currMax;
                prevRadius = radii[lvl];
                prevMax = currMax;
              }
              // Return the calculated ring radius for this node's level.
// If not found, fall back to a default formula.
              return radii[d.level] || (rootRadius + minGap + 80 * d.level);
            }
            return null;
          },
          width / 2,
          height / 2
        ).strength((d) => d.level >= 1 ? 1 : 0))
        
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collide', d3.forceCollide().radius(d => {
          let pad = 36; // try 36 or even 48 for more space
          if (d.shapeWidth && d.shapeHeight) {
            return 0.5 * Math.sqrt(d.shapeWidth ** 2 + d.shapeHeight ** 2) + pad;
          }
          return 40 + pad;
        })) // ---
// COLLISION FORCE
// Prevents nodes from overlapping by setting a collision radius.
// Currently uses (width/2 + padding), but for rectangles this may not be perfect.
// For best results, consider using the diagonal length for wide/rectangular nodes.
// ---
        // ---
// EXTRA RADIAL FORCE (for grandchildren and deeper)
// Applies an additional radial force to nodes at level 2 and beyond to help push them outward.
// ---
        .force('radial', d3.forceRadial(
          (d) => {
            // Only apply radial force to grandchildren and deeper nodes
            if (d.level === 2) return 320;
            if (d.level > 2) return 420 + (d.level - 2) * 120;
            return 0;
          },
          width / 2,
          height / 2
        ).strength((d) => d.level > 1 ? 1 : 0))
        // Extra repulsion for direct children
        .force('childCharge', d3.forceManyBody().strength((d) => {
          const rootId = nodes[0]?.id;
          return d.parent === rootId ? -1200 : 0;
        }));

      // Let the simulation run and animate nodes into place (no manual pre-ticking)

      const link = g
        .append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke', '#7aff8a')
        .attr('stroke-width', 2)
        .attr('opacity', 0.9)


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
      node.each(function (d) {
        const nodeEl = d3.select(this)
        let shapeSelection
        // Append correct SVG element based on shape
        if (d.shape === 'hexagon' || d.shape === 'diamond') {
          shapeSelection = nodeEl.append('polygon')
        } else if (d.shape === 'roundRect') {
          shapeSelection = nodeEl.append('path')
        } else if (d.shape === 'rect') {
          shapeSelection = nodeEl.append('rect')
        } else if (d.shape === 'ellipse') {
          shapeSelection = nodeEl.append('ellipse')
        }

        if (shapeSelection) {
          // Apply attributes using the helper and stored dimensions
          applyShapeAttributes(shapeSelection, d, d.shapeWidth, d.shapeHeight)
        }
      })
      // --- Modify node shape rendering to use calculated dimensions --- END

      // Add text labels using the helper function
      node.each(function (d) {
        renderNodeLabel(d3.select(this), d)
      })

      // Create a tooltip using absolute positioning so it scrolls with the page
      // Get theme-aware colors for tooltip
      const bodyStyles = window.getComputedStyle(document.body)
      const tooltipBg =
        bodyStyles.getPropertyValue('--main-bg')?.trim() || 'white'
      const tooltipFg =
        bodyStyles.getPropertyValue('--main-fg')?.trim() || '#232323'
      const tooltipBorder =
        bodyStyles.getPropertyValue('--navbar-bg')?.trim() === '#18191a'
          ? '#555'
          : '#ccc'
      const tooltip = d3
        .select('body')
        .append('div')
        .attr('id', 'mindmap-tooltip')
        .style('position', 'absolute')
        .style('padding', '6px')
        .style('background', tooltipBg)
        .style('color', tooltipFg)
        .style('border', `1px solid ${tooltipBorder}`)
        .style('border-radius', '4px')
        .style('pointer-events', 'none')
        .style('opacity', 0)
        .style('max-width', '300px')
        .style('max-height', '200px')
        .style('overflow-y', 'auto')

      // Observe theme changes and update tooltip styles
      const updateTooltipTheme = () => {
        const styles = window.getComputedStyle(document.body)
        tooltip
          .style(
            'background',
            styles.getPropertyValue('--main-bg')?.trim() || 'white'
          )
          .style(
            'color',
            styles.getPropertyValue('--main-fg')?.trim() || '#232323'
          )
          .style(
            'border',
            `1px solid ${
              styles.getPropertyValue('--navbar-bg')?.trim() === '#18191a'
                ? '#555'
                : '#ccc'
            }`
          )
      }
      const observer = new MutationObserver(updateTooltipTheme)
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['data-theme'],
      })
      // Clean up observer on effect cleanup
      if (typeof cleanupFns !== 'undefined')
        cleanupFns.push(() => observer.disconnect())

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
          .attr('x1', (d) => getLinkX(d.source))
          .attr('y1', (d) => getLinkY(d.source))
          .attr('x2', (d) => getLinkX(d.target))
          .attr('y2', (d) => getLinkY(d.target))

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

      // --- Auto-fit mind map to viewport on initial render ---
      setTimeout(() => {
        // Compute bounding box of all nodes
        const xVals = nodes.map((d) => d.x)
        const yVals = nodes.map((d) => d.y)
        const minX = Math.min(...xVals)
        const maxX = Math.max(...xVals)
        const minY = Math.min(...yVals)
        const maxY = Math.max(...yVals)
        // adds to zoom
        const nodePadding = 180 // Extra padding for outliers
        const boxWidth = maxX - minX + nodePadding * 2
        const boxHeight = maxY - minY + nodePadding * 2
        const svgWidth = container.clientWidth
        const svgHeight = container.clientHeight
        // Calculate scale to fit
        const scale = Math.min(svgWidth / boxWidth, svgHeight / boxHeight, 1)
        // Center the bounding box
        const translateX = svgWidth / 2 - scale * (minX + maxX) / 2
        const translateY = svgHeight / 2 - scale * (minY + maxY) / 2
        svg.transition().duration(500).call(
          zoom.transform,
          d3.zoomIdentity.translate(translateX, translateY).scale(scale)
        )
      }, 500) // Increased delay for more simulation ticks
      // --- End auto-fit logic ---

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

  // --- Update node colors when palette changes (no simulation reset) ---
  useEffect(() => {
    if (!svgRef.current) return
    const svg = d3.select(svgRef.current)
    svg.selectAll('.nodes g').each(function (d) {
      // d is a node datum
      const nodeEl = d3.select(this)
      // Update fill color of shape (rect, ellipse, polygon, path)
      nodeEl
        .selectAll('rect, ellipse, polygon, path')
        .attr('fill', palette[d.color] || d.color)
    })
  }, [palette, nodes])

  return (
    <main
      className={styles['mind-map']}
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }}></svg>
      <HelpTooltip />
    </main>
  )
}

MindMap.propTypes = {
  nodes: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
}

export default MindMap
