import { 
    changeTextContentHTMLElement, 
    elementCard, 
    getDocumentAllElements, 
    getDocumentElement, 
    getDocumentElementById, 
    getTextContentHTMLElement, 
    selectFirstElementChild, 
    selectLastElementChild, 
    styleHTMLElement 
} from './utils/element.js'
import { copyStringToClipboard, getKeyPressedCode } from './utils/keyboard.js'
import { convertToArray, pipe } from './utils/operators.js'
import { generatePalette } from './utils/palette.js'

const paletteArea = getDocumentElement('generator__section')

const colors = generatePalette()

const elements = colors.map(item => elementCard(item)).join('')

const generateNewPallette = (elements) => {
            if(elements) {
                elements.forEach(element => {
                    const backgroundElement = selectFirstElementChild(element)
                    const textHexadecimalElement = selectLastElementChild(element)
                    const newColor = pallette.newColor()
                
                    styleHTMLElement(backgroundElement, 'backgroundColor', newColor)
                    changeTextContentHTMLElement(textHexadecimalElement, newColor)
                });
            } 
}

window.addEventListener("DOMContentLoaded", () => {
    paletteArea.innerHTML = elements;

    const cards = getDocumentAllElements('card')

    getDocumentElementById('generator__palette__button')
    .addEventListener('click', () => generateNewPallette(cards))

    cards.forEach((element) => {
        element.addEventListener('click', () => {
            const textElement = pipe(selectLastElementChild, getTextContentHTMLElement)(element)
            copyStringToClipboard(textElement)
        })
    });

    document.addEventListener('keypress', (event) => {
        const keyPressed = getKeyPressedCode(event)
        if(keyPressed === 32) {
            generateNewPallette(cards)
        }

        if(keyPressed === 99) {
            const teste = getDocumentAllElements('card__hexadecimal')
            
            const arrayToContentElements = convertToArray(teste, item => getTextContentHTMLElement(item))

            copyStringToClipboard(arrayToContentElements)
        }
    })
});



