const avatarHair = [
    'Auburn',
    'black',
    'blond',
    'BrownDark',
    'red',
    'silverGrey',
    'platinum',
]

const avatarTop = [
    'Hijab',
    'Turban',
    'Hat',
    'LongHairStraight',
    'LongHairFro',
    'LongHairDreads',
    'LongHairCurly'
]

export const createCard = (data) => {
    const randomHair = avatarHair[Math.floor(Math.random() * avatarHair.length)]
    const topType = avatarTop[Math.floor(Math.random() * avatarTop.length)]
    const picUrl = `https://avataaars.io/?hairColor=${randomHair}&clottheType=Hoodie&topType=${topType}&avatarStyle=Circle`
    const header = document.createElement('div')
    header.classList.add('header');
    const img = document.createElement('img')
    img.src = picUrl
    const actions = document.createElement('div')
    actions.classList.add('actions')
    const name = document.createElement('p')
    name.textContent = data.name
    actions.appendChild(name)
    header.appendChild(img)
    header.appendChild(actions)
    const card = document.createElement('div')
    card.classList.add('picture-card')
    card.appendChild(header)
    card.setAttribute('data-id', data.id)
    card.setAttribute('data-name', data.name)
    card.setAttribute('data-gender', data.gender)
    card.setAttribute('data-height', data.height)
    card.setAttribute('data-img', picUrl)
    
    return card
}