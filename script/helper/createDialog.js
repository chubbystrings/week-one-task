export function createDialog(data, type) {

    const dialog = document.createElement('dialog')
    const dialogCard = document.createElement('div')
    dialogCard.classList.add('dialog-card')
    const header = document.createElement('div')
    header.classList.add('dialog-header')
    const body = document.createElement('div')
    body.classList.add('dialog-body')

    if (type === 'info') {
        const { username, imageSrc, height, gender} = data
        const img = document.createElement('img')
        img.src = imageSrc
        header.appendChild(img)
        const characterName = document.createElement('p')
        characterName.textContent = 'Name: ' + username
        const characterGender = document.createElement('p')
        characterGender.textContent = 'Gender ' + gender
        const characterHeight = document.createElement('p')
        characterHeight.textContent = 'Height: ' + height
        body.appendChild(characterName)
        body.appendChild(characterGender)
        body.appendChild(characterHeight)
    }

    if (type === 'error') {
        const { imageSrc, errorMsg} = data
        const img = document.createElement('img')
        img.src = imageSrc
        header.appendChild(img)
        const errorText = document.createElement('p')
        errorText.textContent = errorMsg
        body.appendChild(errorText)
    }

    
    const actions = document.createElement('div')
    actions.classList.add('dialog-menu')
    const button = document.createElement('button')
    button.classList.add('flat')
    button.textContent = 'close'
    actions.appendChild(button)
    dialogCard.appendChild(header)
    dialogCard.appendChild(body)
    dialogCard.appendChild(actions)
    dialog.appendChild(dialogCard)
    console.log(dialog)

    return {
        dialog,
        button
    }
}