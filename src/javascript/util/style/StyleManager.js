import List from "../List";

/**
 * 管理style元素
 */

class StyleManager {
    constructor() {
        this._styleList = new List()
    }

    getStyle(name) {
        this._styleList.forEach((e) => {
            if (e.name === name) {
                return e
            }
        })
        return null
    }

    register(style) {
        this._styleList.add(style)
        return this
    }

    apply() {
        this._styleList.forEach((e) => {
            body.append(e.element);
        })
    }
}