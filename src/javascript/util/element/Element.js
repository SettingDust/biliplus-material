import List from "../List";

export default class Element {
    constructor() {
        this._node = ""
        this._classList = new List()
        this._id = ""
        this._childElement = new List()
    }

    get node() {
        return this._node;
    }

    set node(value) {
        this._node = value;
        return this
    }

    get classList() {
        return this._classList;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
        return this
    }

    get element() {
        if (!this._element)
            this._element = $("<" + this._node + "\>")
        else
            this._element.contents().unwrap().wrap(this._node)
        this._element.attr("id", this._id)
        this._element.attr("class", this._classList.join(" "))
        this._childElement.forEach((e) => {
            this._element.append(e)
        })
        return this._element
    }
}