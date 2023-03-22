import { elementCard } from './utils/element.js'

const paletteArea = document.querySelector('.generator__section')

const array = ['#000', '#000', '#000', '#000', '#000']
document
    .querySelector('#generator__palette__button')
    .addEventListener('click', () => {
    let element = ''
    array.forEach((value) => {
        element = elementCard(value)
    })
    paletteArea.innerHTML = element

})
