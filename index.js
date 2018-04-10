
export default class BidirectionalMap {
    constructor(object=null) {
        this._map = new Map()
        this._reverse = new Map()
        if (object) {
            for (let attr in object) {
                if ({}.hasOwnProperty.call(object, attr)) {
                    this.set(attr, object[attr])
                }
            }
        }
    }
    get size () {
        return this._map.size
    }
    set(key, value) {
        if (this._map.has(key)) {
            let _value = this._map.get(key)
            this._reverse.delete(_value)
        }
        if (this._reverse.has(value)) {
            let _key = this._reverse.get(value)
            this._map.delete(_key)
        }
        this._map.set(key, value)
        this._reverse.set(value, key)
    }
    get(key) {
        return this._map.get(key)
    }
    getKey(value) {
        return this._reverse.get(value)
    }
    clear() {
        this._map.clear()
        this._reverse.clear()
    }
    delete(key) {
        let value = this._map.get(key)
        this._map.delete(key)
        this._reverse.delete(value)
    }
    deleteValue(value) {
        let key = this._reverse.get(value)
        this._map.delete(key)
        this._reverse.delete(value)
    }
    entries() {
        return this._map.entries()
    }
    has(key) {
        return this._map.has(key)
    }
    hasValue(value) {
        return this._reverse.has(value)
    }
    keys() {
        return this._map.keys()
    }
    values() {
        return this._map.values()
    }
}
