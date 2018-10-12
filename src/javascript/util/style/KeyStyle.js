import StyleBlock from "./StyleBlock"

/**
 * 拥有特定属性的style对象
 */
export default class KeyStyle extends StyleBlock {
    constructor() {
        super()
        this._key = ""
    }

    set key(value) {
        this._key = value
        return this
    }

    get key() {
        return this._key
    }
}