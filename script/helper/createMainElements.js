export  function createMainElements() {

    const main = document.querySelector('main')
    const header = document.createElement('header')
    const starWarz = document.createElement('div')
    starWarz.setAttribute('id', 'star-warz')
    header.appendChild(starWarz)
    const firstSection = document.createElement('section')
    firstSection.setAttribute('id', 'section1')
    const buttonWrapper = document.createElement('div')
    buttonWrapper.classList.add('btns')
    buttonWrapper.setAttribute('id', 'button-holder')
    firstSection.appendChild(buttonWrapper)
    const secondSection = document.createElement('section')
    secondSection.setAttribute('id', 'section2')
    const spinner = document.createElement('div')
    spinner.classList.add('spinner')
    spinner.setAttribute('id', 'spinner')
    const idsRoller = document.createElement('div')
    idsRoller.classList.add('lds-roller')
    idsRoller.setAttribute('id', 'ids-roller')

    const divs = [1, 2, 3, 4, 5, 6, 7, 8]
    divs.forEach(() => {
        const div = document.createElement('div')
        idsRoller.appendChild(div)
    })

    spinner.appendChild(idsRoller)
    secondSection.appendChild(spinner)
    const thirdSection = document.createElement('section')
    thirdSection.setAttribute('id', 'section3')
    const btnWrapper = document.createElement('div')
    btnWrapper.classList.add('bottom-btns')
    btnWrapper.setAttribute('id', 'button-holder-two')
    thirdSection.appendChild(btnWrapper)
    const footer = document.createElement('footer')
    const footerMessage =  document.createElement('p')
    footerMessage.innerHTML = 'with love from @chubbystrings'
    footer.appendChild(footerMessage)

    main.appendChild(header)
    main.appendChild(firstSection)
    main.appendChild(secondSection)
    main.appendChild(thirdSection)
    main.appendChild(footer)
}