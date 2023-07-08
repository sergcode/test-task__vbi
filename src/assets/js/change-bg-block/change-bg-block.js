'use strict'

window.addEventListener('DOMContentLoaded', () => {
  function randBackground(parent) {
    const r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256)
    parent.style.background = '#' + r.toString(16) + g.toString(16) + b.toString(16)
  }

  function randColorText(parent) {
    const blockWrapText = parent.children,
      r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256)
    for (let child of blockWrapText) {
      child.style.color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
    }
  }

  function changeBgBlock() {
    const changeBgBlock = document.getElementById('changeBgBlock')

    changeBgBlock.addEventListener('change', function () {
      const blocks = document.querySelectorAll('.main__content .block__wrapper')

      for (let [i, block] of blocks.entries()) {
        if (i % 2 === 1) {
          if (!block.closest('.block').classList.contains('block__new')) {
            block.classList.toggle('change')
          } else {
            randBackground(block)
            randColorText(block)

            if (!this.checked) {
              for (let child of block.children) {
                block.classList.remove('change')
                block.removeAttribute('style')
                child.removeAttribute('style')
              }
            }
          }
        }
      }
    })
  }

  changeBgBlock()
})
