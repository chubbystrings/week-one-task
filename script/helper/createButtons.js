export function createButtons () {
    
    const buttonHolder = document.querySelector('#button-holder')
    const buttonHolderTwo = document.querySelector('#button-holder-two')
    const reshuffleBtn = document.createElement('button')
    const alphabeticBtn = document.createElement('button')
    const nextBtn = document.createElement('button')
    const previousBtn = document.createElement('button')

    reshuffleBtn.setAttribute('id', 'refreshBtn')
    alphabeticBtn.setAttribute('id', 'alphabetic')
    reshuffleBtn.classList.add('home-btns')
    alphabeticBtn.classList.add('home-btns')
    alphabeticBtn.setAttribute('disabled', 'disabled')
    nextBtn.setAttribute('id', 'nextBtn')
    previousBtn.setAttribute('id', 'previousBtn')
    nextBtn.classList.add('home-fixed-btns')
    previousBtn.classList.add('home-fixed-btns')


    reshuffleBtn.textContent = 'Shuffle'
    alphabeticBtn.textContent = 'Sort'
    nextBtn.textContent = 'Next'
    previousBtn.textContent = 'Previous'
    

    buttonHolder.appendChild(reshuffleBtn)
    buttonHolder.appendChild(alphabeticBtn)
    buttonHolderTwo.appendChild(nextBtn)
    buttonHolderTwo.appendChild(previousBtn)

    return {
        reshuffleBtn,
        alphabeticBtn,
        nextBtn,
        previousBtn
    }

}