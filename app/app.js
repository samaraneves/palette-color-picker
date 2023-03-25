import { elementCard } from './utils/element.js'
import { copyToClipboard, getKeyPressedCode } from './utils/keyboard.js'
import { Palette } from './utils/palette.js'

const paletteArea = document.querySelector('.generator__section')


const pallette = new Palette()

const colors = pallette.createPalette()

const elements = colors.map(item => elementCard(item)).join('')

const generateNewPallette = (elements) => {
            if(elements) {
                elements.forEach(element => {
                    const backgroundElement = element.firstElementChild
                    const textHexadecimalElement = element.lastElementChild
                    const newColor = pallette.newColor()
                
                    backgroundElement.style.backgroundColor = newColor
                    textHexadecimalElement.textContent = newColor
                });
            } 
}

window.addEventListener("DOMContentLoaded", () => {
    paletteArea.innerHTML = elements;

    const cards = document.querySelectorAll('.card')

    document
    .querySelector('#generator__palette__button')
    .addEventListener('click', () => generateNewPallette(cards))

    cards.forEach((element) => {
        element.addEventListener('click', () => {
            const textElement = element.lastElementChild
            copyToClipboard(textElement)
        })
    });

    document.addEventListener('keypress', (event) => {
        const keyPressed = getKeyPressedCode(event)
        if(keyPressed === 32) {
            generateNewPallette(cards)
        }

        if(keyPressed === 99) {
            const teste = document.querySelectorAll('.card__hexadecimal')
            
            const text = Array.from(teste, (item) => item.innerText)
            console.log(text)
        }
        
    })
});



