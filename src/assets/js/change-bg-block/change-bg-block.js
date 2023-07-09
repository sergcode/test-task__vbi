'use strict'
import {randBackground, randColorText} from '../random/random';

window.addEventListener('DOMContentLoaded', () => {
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
