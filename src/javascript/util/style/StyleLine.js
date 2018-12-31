export default class StyleLine {
    constructor() {
        this._key = '';
        this._value = '';
        this._important = false;
    }

    get key() {
        return this._key;
    }

    set key(value) {
        this._key = value;
        return this;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        return this;
    }

    get important() {
        return this._important;
    }

    set important(value) {
        this._important = value;
        return this;
    }

    toString() {
        return (
            this.key +
            ': ' +
            this.value +
            (this.important ? ' !important' : '') +
            ';'
        );
    }
}
