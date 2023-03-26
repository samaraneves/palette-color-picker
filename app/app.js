import { 
    changeTextContentHTMLElement, 
    getDocumentAllElements, 
    getDocumentElementById, 
    getTextContentHTMLElement, 
    selectFirstElementChild, 
    selectLastElementChild, 
    styleHTMLElement 
} from './utils/element.js'
import { copyStringToClipboard, getKeyPressedCode } from './utils/keyboard.js'
import { convertToArray, pipe } from './utils/operators.js'
import { newColor } from './utils/palette.js'

const generateNewPallette = (elements) => {
            if(elements) {
                elements.forEach(element => {
                    const backgroundElement = selectFirstElementChild(element)
                    const textHexadecimalElement = selectLastElementChild(element)
                    const color = newColor()
                
                    styleHTMLElement(backgroundElement, 'backgroundColor', color)
                    changeTextContentHTMLElement(textHexadecimalElement, color)
                });
            } 
}

window.addEventListener("DOMContentLoaded", () => {
    const cards = getDocumentAllElements('card')

    generateNewPallette(cards)

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
            const cardHexadecimalElements = getDocumentAllElements('card__hexadecimal')
            
            const arrayToContentElements = convertToArray(cardHexadecimalElements, item => getTextContentHTMLElement(item))
    
            copyStringToClipboard(arrayToContentElements)
        }
    })
});

