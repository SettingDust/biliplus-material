import StyleLine from './StyleLine';
import List from '../List';

export default class StyleLines {
    constructor() {
        this._styleList = new List();
    }

    addStyle(key, value, important) {
        for (let i = 0; i < this._styleList.length; i++) {
            if (this._styleList[i].key() === key) {
                this._styleList.removeAt(i);
            }
        }
        this._styleList.add(
            new StyleLine()
                .important(important)
                .key(key)
                .value(value)
        );
        return this;
    }

    removeStyle(key) {
        for (let i = 0; i < this._styleList.length; i++) {
            if (this._styleList[i].key() === key) {
                this._styleList.removeAt(i);
            }
        }
        return this;
    }

    toString() {
        let style = [];
        this._styleList.forEach(e => {
            style.push(e.toString() + '');
        });
        return style.join('\n');
    }
}
