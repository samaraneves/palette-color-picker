export const createHTMLelement = (tagName = '', className = '', textContent = '') => {
    const element = document.createElement(tagName);
    element.className = className

    if(textContent) {
        const textContentElement = document.createTextNode(textContent)
        element.appendChild(textContentElement)
    }
    return element
}

export const selectFirstElementChild = (element) => element.firstElementChild

export const selectLastElementChild = (element) => element.lastElementChild

export const styleHTMLElement = (element, cssProperty, cssPropertyValue) => element.style[cssProperty] = cssPropertyValue

export const getTextContentHTMLElement = (element) => element.textContent

export const changeTextContentHTMLElement = (element, newContent) => element.textContent = newContent

