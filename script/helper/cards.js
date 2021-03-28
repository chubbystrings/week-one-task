import { createDialog } from './createDialog.js'
import { removeModal } from './removeDialog.js'
import { renderDataFromApi } from './renderData.js'



export function cards(results, reshuffle, alphabetical){
    
    renderDataFromApi(results, reshuffle, alphabetical)

    const cards = document.querySelectorAll('.picture-card')
    cards.forEach((card) => {
        card.addEventListener('click', (event) => {
            const username = card.getAttribute('data-name')
            const gender = card.getAttribute('data-gender')
            const height = card.getAttribute('data-height')
            const imageSrc = card.getAttribute('data-img')

            const data = {
                username,
                gender,
                height,
                imageSrc
            }

            const { dialog, button } = createDialog(data)

            const backdrop = document.createElement('div')
            backdrop.classList.add('overlay')
            const htmlBody = document.querySelector('body')
            backdrop.addEventListener('click', (event) => {
                removeModal(backdrop, dialog)
            })
            button.addEventListener('click', (event) => {
                removeModal(backdrop, dialog)
            })
            
            htmlBody.appendChild(backdrop)
            htmlBody.appendChild(dialog)
            dialog.show()
        })
    })

}
