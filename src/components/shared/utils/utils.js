/**
 * Generates the path data for a rounded rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @param {number} radius - The corner radius.
 * @returns {string} SVG path data string.
 */
export const rootRect = (width, height, radius) => {
  return (
    `M${radius},0 ` +
    `H${width - radius} ` +
    `A${radius},${radius} 0 0 1 ${width},${radius} ` +
    `V${height - radius} ` +
    `A${radius},${radius} 0 0 1 ${width - radius},${height} ` +
    `H${radius} ` +
    `A${radius},${radius} 0 0 1 0,${height - radius} ` +
    `V${radius} ` +
    `A${radius},${radius} 0 0 1 ${radius},0 ` +
    `Z`
  )
}

/**
 * Generates the points string for an SVG hexagon centered at (0,0).
 * @param {number} radius - The radius (distance from center to vertex).
 * @returns {string} A string of points coordinates for the SVG polygon element.
 */
export const hexagonPoints = (radius) => {
  const points = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i
    points.push([radius * Math.cos(angle), radius * Math.sin(angle)])
  }
  return points.map((p) => p.join(',')).join(' ')
}

/**
 * Generates the points string for an SVG diamond shape centered at (0,0).
 * @param {number} width - The total width of the diamond.
 * @param {number} height - The total height of the diamond.
 * @returns {string} A string of points coordinates for the SVG polygon element.
 */
export const diamondPoints = (width, height) => {
  const points = [
    `${width / 2},0`,
    `${width},${height / 2}`,
    `${width / 2},${height}`,
    `0,${height / 2}`,
  ]
  return points.join(' ')
}

/**
 * Measures the dimensions of a text label using a temporary DOM element.
 * Includes padding and handles newline characters.
 * @param {string} label - The text content to measure.
 * @returns {{textWidth: number, textHeight: number}} An object containing the calculated width and height.
 */
export const getTextDimensions = (label) => {
  const div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.visibility = 'hidden'
  div.style.whiteSpace = 'nowrap'
  div.innerHTML = (label || '').replace(/\n/g, '<br>')
  document.body.appendChild(div)
  const textWidth = div.offsetWidth + 20
  const textHeight = div.offsetHeight + 20
  document.body.removeChild(div)
  if (div.parentNode === document.body) {
    document.body.removeChild(div)
  }
  return { textWidth, textHeight }
}

/**
 * Calculates the width and height for a node's shape based on its text dimensions.
 * Non-rectangular shapes are sized based on the maximum dimension of the text.
 * @param {string} shape - The type of shape (e.g., 'rect', 'diamond').
 * @param {number} textWidth - The width of the text label.
 * @param {number} textHeight - The height of the text label.
 * @returns {{shapeWidth: number, shapeHeight: number}} An object containing the calculated shape width and height.
 */
export const calculateShapeDimensions = (shape, textWidth, textHeight) => {
  let shapeWidth = textWidth
  let shapeHeight = textHeight
  if (shape !== 'rect') {
    const maxDim = Math.max(textWidth, textHeight)
    shapeWidth = maxDim
    shapeHeight = maxDim
  }
  return { shapeWidth, shapeHeight }
}

/**
 * Applies appropriate SVG attributes to a node's shape element based on its type and dimensions.
 * Handles different shapes like rectangles, hexagons, diamonds, etc.
 * @param {d3.Selection} shapeSelection - The D3 selection of the shape element (e.g., rect, polygon, ellipse).
 * @param {object} d - The node data object, containing id, shape, color, etc.
 * @param {number} shapeWidth - The calculated width for the shape.
 * @param {number} shapeHeight - The calculated height for the shape.
 */
export const applyShapeAttributes = (shapeSelection, d, shapeWidth, shapeHeight) => {
  shapeSelection.attr('fill', d.color)
  const halfWidth = shapeWidth / 2
  const halfHeight = shapeHeight / 2

  switch (d.shape) {
    case 'roundRect':
      if (d.id === 'root') {
        shapeSelection.attr('d', rootRect(200, 100, 10)).attr('fill', '#333')
      } else {
        shapeSelection.attr('d', rootRect(shapeWidth, shapeHeight, 10))
      }
      break
    case 'rect':
      shapeSelection
        .attr('width', shapeWidth)
        .attr('height', shapeHeight)
        .attr('x', -halfWidth)
        .attr('y', -halfHeight)
      break
    case 'hexagon':
      shapeSelection.attr('points', hexagonPoints(shapeWidth / Math.sqrt(3)))
      break
    case 'diamond':
      shapeSelection.attr('points', diamondPoints(shapeWidth, shapeHeight))
      break
    case 'ellipse':
      shapeSelection.attr('rx', halfWidth).attr('ry', halfHeight)
      break
  }
}

/**
 * Renders the text label for a node, handling multi-line text based on newline characters.
 * Positions the text appropriately based on the node type (root vs. other) and shape.
 * @param {d3.Selection} nodeGroupSelection - The D3 selection of the node's group element (<g>).
 * @param {object} d - The node data object, containing label, id, shape, dimensions, etc.
 */
export const renderNodeLabel = (nodeGroupSelection, d) => {
  nodeGroupSelection.selectAll('text').remove()

  const labelLines = (d.label || '').split('\n')
  const isRoot = d.id === 'root'
  const nodeShapeWidth = d.shapeWidth || (isRoot ? 200 : 0)
  const nodeShapeHeight = d.shapeHeight || (isRoot ? 100 : 0)

  let textTransform = ''
  if (isRoot) {
    textTransform = 'translate(100, 50)'
  } else if (d.shape === 'diamond') {
    const points = diamondPoints(nodeShapeWidth, nodeShapeHeight).split(' ')
    if (points.length > 0 && points[0].includes(',')) {
      const centerX = points.reduce((sum, p) => sum + parseFloat(p.split(',')[0] || 0), 0) / points.length
      const centerY = points.reduce((sum, p) => sum + parseFloat(p.split(',')[1] || 0), 0) / points.length
      textTransform = `translate(${centerX}, ${centerY})`
    } else {
      textTransform = `translate(0, 0)`
    }
  }

  const text = nodeGroupSelection
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .style('fill', isRoot ? 'white' : d.fontColor || 'black')
    .style('font-size', d.fontSize || '14px')
    .style('font-family', d.fontFamily || 'Arial, sans-serif')
    .attr('transform', textTransform)
    .style('pointer-events', 'none')

  if (labelLines.length > 1) {
    const initialDy = `-${(labelLines.length - 1) * 0.6}em`
    labelLines.forEach((line, index) => {
      text
        .append('tspan')
        .attr('x', 0)
        .attr('dy', index === 0 ? initialDy : '1.2em')
        .text(line)
    })
  } else {
    text.text(d.label || '')
  }
}

/**
 * Calculates the X coordinate for the start or end point of a link, connecting to an appropriate point on the node's shape.
 * @param {object} nodeData - The data object for the source or target node of the link.
 * @returns {number} The calculated X coordinate for the link endpoint.
 */
export const getLinkX = (nodeData) => {
  if (!nodeData) return 0
  if (nodeData.id === 'root') {
    return nodeData.x + 100
  } else if (nodeData.shape === 'diamond') {
    if (typeof nodeData.shapeWidth !== 'number' || typeof nodeData.shapeHeight !== 'number') return nodeData.x
    const points = diamondPoints(nodeData.shapeWidth, nodeData.shapeHeight).split(' ')
    const centerX = points.reduce((sum, p) => sum + parseFloat(p.split(',')[0] || 0), 0) / points.length
    return nodeData.x + centerX
  }
  return nodeData.x
}

/**
 * Calculates the Y coordinate for the start or end point of a link, connecting to an appropriate point on the node's shape.
 * @param {object} nodeData - The data object for the source or target node of the link.
 * @returns {number} The calculated Y coordinate for the link endpoint.
 */
export const getLinkY = (nodeData) => {
  if (!nodeData) return 0
  if (nodeData.id === 'root') {
    return nodeData.y + 50
  } else if (nodeData.shape === 'diamond') {
    if (typeof nodeData.shapeWidth !== 'number' || typeof nodeData.shapeHeight !== 'number') return nodeData.y
    const points = diamondPoints(nodeData.shapeWidth, nodeData.shapeHeight).split(' ')
    const centerY = points.reduce((sum, p) => sum + parseFloat(p.split(',')[1] || 0), 0) / points.length
    return nodeData.y + centerY
  }
  return nodeData.y
}
