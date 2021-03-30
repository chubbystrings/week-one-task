import { createDialog } from "./createDialog.js"
import { removeModal } from './removeDialog.js'

export function showErrorModal(msg) {
    const error = {
        imageSrc: './assets/img/error.png',
        errorMsg: msg
    }
    const { dialog, button } = createDialog(error, 'error')

    const backdrop = document.createElement('div')
    backdrop.classList.add('overlay')
    const htmlBody = document.querySelector('body')
    backdrop.addEventListener('click', () => {
        removeModal(backdrop, dialog)
    })
    button.addEventListener('click', () => {
        removeModal(backdrop, dialog)
    })
    
    htmlBody.appendChild(backdrop)
    htmlBody.appendChild(dialog)
    dialog.show()
}