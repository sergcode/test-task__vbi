'use strict'

window.addEventListener('DOMContentLoaded', () => {
  function randomWord(length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
      counter += 1
    }
    return result
  }

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

  function createABlock(num) {
    const createABlock = document.createElement('div')
    createABlock.classList.add('block', 'block__new')
    createABlock.innerHTML = `
      <div class="block__wrapper">
        <span class="block__number">${num}</span>
        <span class="block__text">
          ${randomWord(40)}
        </span>
      </div>
    `
    return createABlock
  }

  function addABlock() {
    const addABlockBtn = document.querySelector('.main__add-a-block button'),
      mainBlock = document.querySelector('.main__block'),
      mainContentRow = mainBlock.querySelector('.main__content > .row')

    addABlockBtn.addEventListener('click', function (e) {
      e.preventDefault()

      const blocks = document.querySelectorAll('.block'),
        blocksLength = blocks.length,
        changeBgBlock = document.getElementById('changeBgBlock')

      if (blocksLength > 3) {
        mainBlock.classList.add('main__block_pt-40', 'main__block_pb-40')
      } else {
        mainBlock.classList.remove('main__block_pt-40', 'main__block_pb-40')
      }

      mainContentRow.append(createABlock(blocksLength + 1))

      if (changeBgBlock.checked) {
        const blocksWrapper = document.querySelectorAll('.main__content .block__wrapper')

        for (let [i, block] of blocksWrapper.entries()) {
          if (i % 2 === 1 && !block.classList.contains('change') && !block.hasAttribute('style')) {
            block.classList.add('change')
            randBackground(block)
            randColorText(block)
          }
        }
      }
    })
  }

  addABlock()
})
