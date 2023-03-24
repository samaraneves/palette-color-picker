export class Palette {

    constructor() {
        this._palette = new Array(5)
    }

    _newColor() {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`
    }

    createPalette() {
    return this._palette.fill(null).map((_) => this._newColor())
    }
}