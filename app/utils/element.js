export const elementCard = color => {
    const element = `
        <div class='card'>
            <div class='card__background' style='background-color: #${color}'><div>
            <p class='card__hexadecimal'>${color}</p>
        <div>
    `
    return element
}