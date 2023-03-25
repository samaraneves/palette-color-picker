import { elementCard } from './utils/element.js'
import { Palette } from './utils/palette.js'

const paletteArea = document.querySelector('.generator__section')

const pallette = new Palette()

const colors = pallette.createPalette()

const elements = colors.map(item => elementCard(item)).join('')

window.onload = paletteArea.innerHTML = elements;

document
    .querySelector('#generator__palette__button')
    .addEventListener('click', () => {
        const cardPalette = document.querySelectorAll('.card__background')

            if(cardPalette) {
                cardPalette.forEach(element => {
                    element.style.backgroundColor = pallette.newColor()
                });
            }  
})
