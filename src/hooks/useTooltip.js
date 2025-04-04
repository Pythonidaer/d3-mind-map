/**
 * useTooltip is a custom React Hook that manages the creation, display, and hiding
 * of a tooltip element within the DOM. It utilizes D3.js for direct DOM manipulation
 * to create a styled tooltip div appended to the body. The hook provides
 * `handleMouseOver` and `handleMouseOut` functions to control the tooltip's
 * visibility, content, and position based on mouse events and provided content.
 * The tooltip element is automatically removed from the DOM upon unmounting.
 */
import { useRef, useEffect } from 'react'
import * as d3 from 'd3'

const useTooltip = () => {
  const tooltipRef = useRef(null)

  useEffect(() => {
    const tooltipDiv = d3
      .select('body')
      .append('div')
      .attr('class', 'mindmap-tooltip')
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

    tooltipRef.current = tooltipDiv.node()

    return () => {
      tooltipDiv.remove()
    }
  }, [])

  const handleMouseOver = (event, content) => {
    if (!tooltipRef.current) return

    d3.select(tooltipRef.current)
      .style('opacity', 0.9)
      .html(`<strong>${content.label}</strong><br/>${content.definition}`)
      .style('left', `${event.pageX + 10}px`)
      .style('top', `${event.pageY - 28}px`)
  }

  const handleMouseOut = () => {
    d3.select(tooltipRef.current).style('opacity', 0)
  }

  return { tooltipRef, handleMouseOver, handleMouseOut }
}

export default useTooltip
