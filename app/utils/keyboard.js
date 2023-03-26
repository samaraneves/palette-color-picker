export const getKeyPressedCode = (event) => event.keyCode || event.which

export const copyStringToClipboard = (string) => navigator.clipboard.writeText(string)