/**
 * 基于数组的简单List类
 */
export default class List extends Array {
    constructor() {
        super();
    }

    //向集合追加新元素
    add(item) {
        this.push(item);
        return self;
    }

    //在指定索引处插入新元素
    insert(index, item) {
        this.splice(index, 0, item);
        return self;
    }

    //删除元素，仅删除第一个索引处的元素
    remove(item) {
        let index = this.indexOf(item);
        if (index !== -1) {
            return this.splice(index, 1)[0];
        } else {
            return undefined;
        }
    }

    //删除元素，如果元素在多个索引处存在，则全部删除
    removeAll(item) {
        let result = [];
        let removeItem = undefined;
        do {
            removeItem = remove(item);
            if (removeItem !== undefined) {
                result.push(removeItem);
            }
        } while (removeItem !== undefined);
        return result;
    }

    //根据index删除元素
    removeAt(index) {
        if (index !== -1) {
            return this.splice(index, 1)[0];
        } else {
            return undefined;
        }
    }

    //判断元素是否包含在集合中
    contains(item) {
        return this.indexOf(item) !== -1;
    }

    //清空集合的所有元素
    clear() {
        return new List(this.splice(0, length));
    }
}
