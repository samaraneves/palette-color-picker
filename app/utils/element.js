export const elementCard = color => {
    const element = `
        <div class='card'>
            <div class='card__background' style='background-color: ${color}'></div>
            <p class='card__hexadecimal'>${color}</p>
        </div>
    `
    return element
}

export const getDocumentAllElements = (query) => document.querySelectorAll(`.${query}`)

export const getDocumentElement = (query) => document.querySelector(`.${query}`)

export const getDocumentElementById = (query) => document.getElementById(query)

export const selectFirstElementChild = (element) => element.firstElementChild

export const selectLastElementChild = (element) => element.lastElementChild

export const styleHTMLElement = (element, cssProperty, cssPropertyValue) => element.style[cssProperty] = cssPropertyValue

export const getTextContentHTMLElement = (element) => element.textContent

export const changeTextContentHTMLElement = (element, newContent) => element.textContent = newContent