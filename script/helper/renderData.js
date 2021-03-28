import { shuffle } from './shuffle.js';
import { alphabetical } from './sort.js';
import { createFreshContainer } from './createContainer.js';



export function renderDataFromApi(results, reshuffle, alphabetic) {

    const availableContainer = document.querySelector('#container')

    if (!availableContainer) {
        const container = document.createElement('div')
        const section = document.querySelector('#section2')
        container.setAttribute('id', 'container')
        container.classList.add('container')
        section.appendChild(container)
    }


    if (reshuffle) {
        const con = document.querySelector('#container')
        con.parentNode.removeChild(con)
        const data = shuffle(results)

        createFreshContainer(data)
    }

    if (alphabetic) {
        const con = document.querySelector('#container')
        con.parentNode.removeChild(con)
        const data = alphabetical(results)

        createFreshContainer(data)
    }
    
}