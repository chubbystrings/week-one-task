import { createCard } from './createCard.js'

export function createFreshContainer(data) {
    
    const container = document.createElement('div')
    const cardsWrapper = document.createElement('div')
    const section = document.querySelector('#section2')
    cardsWrapper.setAttribute('id', 'cards-wrapper')
    container.classList.add('container')
    container.setAttribute('id', 'container')
    container.classList.add('container')
    

    data.forEach((result) => {
        const newResult = result.url.split('').filter((r) => Number(r))
        .join('')
        result.id = Number(newResult);
        cardsWrapper.appendChild(createCard(result))
    })
    container.appendChild(cardsWrapper)
    section.appendChild(container)
}
