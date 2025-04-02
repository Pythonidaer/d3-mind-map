// utils.js
export const rootRect = (width, height, radius) => {
  return `
      M ${radius}, 0
      L ${width - radius}, 0
      A ${radius}, ${radius} 0 0 1 ${width}, ${radius}
      L ${width}, ${height - radius}
      A ${radius}, ${radius} 0 0 1 ${width - radius}, ${height}
      L ${radius}, ${height}
      A ${radius}, ${radius} 0 0 1 0, ${height - radius}
      L 0, ${radius}
      A ${radius}, ${radius} 0 0 1 ${radius}, 0
    `
}

export const hexagonPoints = (radius) => {
  const points = []
  for (let i = 0; i < 6; i++) {
    const angle = ((2 * Math.PI) / 6) * i
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)
    points.push([x, y])
  }
  return points.map((p) => p.join(',')).join(' ')
}

export const diamondPoints = (width, height) => {
  const points = [
    `${width / 2},0`,
    `${width},${height / 2}`,
    `${width / 2},${height}`,
    `0,${height / 2}`,
  ]
  return points.join(' ')
}
