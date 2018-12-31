import KeyStyle from './KeyStyle';

/**
 * 伪元素或者类状态style
 */
class ChildStyle extends KeyStyle {
    toString() {
        this.selector(this.selector + this.key);
        return super.toString();
    }
}
