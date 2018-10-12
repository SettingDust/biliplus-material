import StyleLines from "./StyleLines"
import List from "../List";

/**
 * 拥有选择器的style对象
 */
export default class StyleBlock {
    constructor() {
        this._styleLines = new StyleLines()
        this._selector = ""
        this._childStyle = new List()
    }

    get styleLines() {
        return this._styleLines
    }

    get selector() {
        return this._selector
    }

    set selector(value) {
        this._selector = value
        return this
    }

    addChild(styleBlock) {
        this._childStyle.add(styleBlock)
        return this
    }

    toString() {
        let style = []
        style.push(this._selector + " {")
        style.push(addSpace(this._styleLines.toString()) + "\n")
        style.push("}")
        this._childStyle.forEach((e) => {
            style.push(e.toString())
        })
        return style.join("\n")
    }
}