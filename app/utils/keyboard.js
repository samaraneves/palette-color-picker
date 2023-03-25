const createRangeSelection = () => document.createRange()

const selectNode = (range, element) => range.selectNode(element)

const removeAlllSelectedRanges = () => window.getSelection().removeAllRanges()

const addRangeSelection = (range) => window.getSelection().addRange(range)

export const getKeyPressedCode = (event) => event.keyCode || event.which

export const copyToClipboard = (element) => {
    const range = createRangeSelection()
    selectNode(range, element)

    removeAlllSelectedRanges()
    addRangeSelection(range)

    document.execCommand("copy")
    alert('copiado')
    removeAlllSelectedRanges()
}