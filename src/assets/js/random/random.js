'use strict'

function rgb() {
  const
    r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256)

  return '#' + r.toString(16) + g.toString(16) + b.toString(16)
}

function randBackground(parent) {
  parent.style.background = rgb()
}

function randColorText(parent) {
  const blockWrapText = parent.children
  for (let child of blockWrapText) {
    child.style.color = rgb()
  }
}

export {
  randBackground,
  randColorText
}
