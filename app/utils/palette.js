export const newColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`

export const generatePalette = () => new Array(5).fill(null).map((_) => newColor())
