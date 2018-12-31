import List from '../List';

/**
 * 完整含有style元素对象
 */
class Style {
    constructor() {
        this._name = null;
        this._styleList = new List();
        this._element = $('<style>');
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
        this._element.attr('data-name', this._name);
        return this;
    }

    get element() {
        this._element.text(this.toString());
        return this._element;
    }

    addStyleBlock(styleBlock) {
        this._styleList.add(styleBlock);
        return this;
    }

    toString() {
        let style = [];
        this._styleList.forEach(e => {
            style.push(e.toString());
        });
        return style.join('\n');
    }
}
