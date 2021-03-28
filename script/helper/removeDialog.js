export function removeModal(backdrop, dialog) {
    const main = document.querySelector('main')
    const modal = document.querySelector('dialog')
    
    modal.style.transition = '200ms'
    modal.style.transform = 'scale(0)'
    setTimeout(() => {
        main.parentNode.removeChild(dialog)
    }, 1000)
    main.parentNode.removeChild(backdrop)
}