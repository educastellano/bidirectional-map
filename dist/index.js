"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BidirectionalMap = (function () {
    function BidirectionalMap() {
        var object = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

        _classCallCheck(this, BidirectionalMap);

        this._map = new Map();
        this._reverse = new Map();
        if (object) {
            for (var attr in object) {
                if ({}.hasOwnProperty.call(object, attr)) {
                    this.set(attr, object[attr])
                }
            }
        }
    }

    _createClass(BidirectionalMap, [{
        key: "set",
        value: function set(key, value) {
            if (this._map.has(key)) {
                var _value = this._map.get(key);
                this._reverse["delete"](_value);
            }
            if (this._reverse.has(value)) {
                var _key = this._reverse.get(value);
                this._map["delete"](_key);
            }
            this._map.set(key, value);
            this._reverse.set(value, key);
        }
    }, {
        key: "get",
        value: function get(key) {
            return this._map.get(key);
        }
    }, {
        key: "getKey",
        value: function getKey(value) {
            return this._reverse.get(value);
        }
    }, {
        key: "clear",
        value: function clear() {
            this._map.clear();
            this._reverse.clear();
        }
    }, {
        key: "delete",
        value: function _delete(key) {
            var value = this._map.get(key);
            this._map["delete"](key);
            this._reverse["delete"](value);
        }
    }, {
        key: "deleteValue",
        value: function deleteValue(value) {
            var key = this._reverse.get(value);
            this._map["delete"](key);
            this._reverse["delete"](value);
        }
    }, {
        key: "entries",
        value: function entries() {
            return this._map.entries();
        }
    }, {
        key: "has",
        value: function has(key) {
            return this._map.has(key);
        }
    }, {
        key: "hasValue",
        value: function hasValue(value) {
            return this._reverse.has(value);
        }
    }, {
        key: "keys",
        value: function keys() {
            return this._map.keys();
        }
    }, {
        key: "values",
        value: function values() {
            return this._map.values();
        }
    }, {
        key: "size",
        get: function get() {
            return this._map.size;
        }
    }]);

    return BidirectionalMap;
})();

exports["default"] = BidirectionalMap;
module.exports = exports["default"];

