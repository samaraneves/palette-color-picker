export const getKeyPressedCode = (event) => event.keyCode || event.which

export const copyStringToClipboard = (string) => navigator.clipboard.writeText(string)

export const handleKeyPress = (keyFunctions) => (event) => {
    const keyCode = getKeyPressedCode(event)

    const keyFunction = keyFunctions.find(([code]) => code === keyCode)?.[1];

    if (keyFunction) keyFunction();
};