'use strict'

window.addEventListener('DOMContentLoaded', () => {
  function createdTooltip(text) {
    const createdElement = document.createElement('div')
    createdElement.classList.add('block__tooltip')
    createdElement.innerHTML = `
      <div class="block__tooltip__closed">&#10006;</div>
      ${text}
    `
    return createdElement
  }

  function removePopup(popup, parent) {
    parent.classList.remove('active')

    setTimeout(() => {
      popup.remove()
    }, 100)
  }

  function popupShow() {
    document.addEventListener('click', (evt) => {
      const target = evt.target,
        blockWrapChildren = target.closest('.block__wrapper'),
        parentBlockActivePopups = document.querySelectorAll('.block__tooltip')

      if ((target && target.classList.contains('block__wrapper')) || (target && blockWrapChildren)) {
        evt.preventDefault()

        const parent = blockWrapChildren.closest('.block'),
          elemBlockText = blockWrapChildren.innerHTML

        if (!parent.querySelector('.block__tooltip')) {
          for (let blockTooltip of parentBlockActivePopups) {
            removePopup(blockTooltip, blockTooltip.closest('.block'))
          }

          parent.append(createdTooltip(elemBlockText))

          const blockTooltip = parent.querySelector('.block__tooltip'),
            blockTooltipChild = blockTooltip.children,
            blockTooltipCloseBtn = blockTooltip.querySelector('.block__tooltip__closed')

          for (let child of blockTooltipChild) {
            if (child.hasAttributes('style')) {
              child.removeAttribute('style')
            }
          }

          setTimeout(() => {
            parent.classList.add('active')
          }, 100)

          blockTooltipCloseBtn.addEventListener('click', function () {
            const blockTooltips = document.querySelectorAll('.block__tooltip')

            for (let blockTooltip of blockTooltips) {
              removePopup(blockTooltip, parent)
            }
          })
        }
      }

      if (!target.closest('.block')) {
        for (let popup of parentBlockActivePopups) {
          const parentBlockActive = popup.closest('.block')

          if (parentBlockActive.classList.contains('active')) {
            removePopup(popup, parentBlockActive)
          }
        }
      }
    })
  }

  popupShow()
})
