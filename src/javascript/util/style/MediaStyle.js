import KeyStyle from './KeyStyle';

/**
 * media style对象
 */
class MediaStyle extends KeyStyle {
    constructor() {
        super();
        this._max = true;
        this._height = false;
    }

    set max(value) {
        this._max = value;
        return this;
    }

    set height(value) {
        this._height = value;
        return this;
    }

    toString() {
        let style = [];
        style.push(
            '@media (' +
                (this._max ? 'max' : 'min') +
                '-' +
                (this._height ? 'height' : 'width') +
                ': ' +
                this.key +
                'px {'
        );
        style.push(addSpace(super.toString()));
        style.push('}');
        return style.join('\n');
    }
}
