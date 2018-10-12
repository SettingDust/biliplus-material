/**
 * 简单的颜色处理
 */
class Color {
    constructor() {
        this._r = 0
        this._g = 0
        this._b = 0
        this._a = 0
    }

    get r() {
        return this._r;
    }

    set r(value) {
        this._r = value;
    }

    get g() {
        return this._g;
    }

    set g(value) {
        this._g = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        this._b = value;
    }

    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    /**
     * a为0时返回rbg字符串
     * @returns {string}
     */
    toString() {
        if (this.a > 0)
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
        else
            return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
    }
}