import { getStarWarzCharacter } from './services/starWarz.js' 
import { cards } from './helper/cards.js'
import { createMainElements } from './helper/createMainElements.js'
import { createButtons } from './helper/createButtons.js'



createMainElements()

const arr = ['S', 'T', 'A', 'R', '-', 'W', 'A', 'R', 'Z' ]
const starWarz = document.querySelector('#star-warz')

arr.forEach((letter, index) => {
    const l = document.createElement('p')
    l.setAttribute('id', `warz-${letter}-${index + 1}`)
    l.textContent = letter
    starWarz.appendChild(l)
})

let reshuffle = false
let alphabeticalOrder = true
const 
{ 
    reshuffleBtn,
     alphabeticBtn, 
     nextBtn, 
     previousBtn 
} = createButtons()


const url = "https://swapi.dev/api/people"
const spinner = document.querySelector('#spinner')
spinner.style.color = '#640032'

let next = ''
let previous = ''

const data = await getStarWarzCharacter(url)
next = data.next
previous = data.previous
const { results } = data
cards(results, reshuffle, alphabetic)
spinner.style.display = 'none'
if(!previous) { previousBtn.setAttribute('disabled', 'disabled')}

reshuffleBtn.addEventListener('click', () => {
    reshuffle = true
    alphabeticalOrder = false
    alphabeticBtn.removeAttribute('disabled')
    cards(results, reshuffle, alphabeticalOrder)
    reshuffleBtn.setAttribute('disabled', 'disabled')
})

alphabeticBtn.addEventListener('click', () => {
    reshuffle = false
    alphabeticalOrder = true
    reshuffleBtn.removeAttribute('disabled')
    cards(results, reshuffle, alphabeticalOrder)
    alphabeticBtn.setAttribute('disabled', 'disabled')
})

nextBtn.addEventListener('click', async () => {
    reshuffle = false
    alphabeticalOrder = true
    const newData = await getStarWarzCharacter(next)
    next = newData.next
    previous = newData.previous
    cards(newData.results, reshuffle, alphabeticalOrder)
    previousBtn.removeAttribute('disabled')
    if (!next) { nextBtn.setAttribute('disabled', 'disabled')}

})


previousBtn.addEventListener('click', async () => {
    reshuffle = false
    alphabeticalOrder = true
    const newData = await getStarWarzCharacter(previous)
    next = newData.next
    previous = newData.previous
    cards(newData.results, reshuffle, alphabeticalOrder)
    nextBtn.removeAttribute('disabled')
    if(!previous) { previousBtn.setAttribute('disabled', 'disabled')}
})




