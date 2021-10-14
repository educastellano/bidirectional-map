"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BidirectionalMap = /*#__PURE__*/function () {
  function BidirectionalMap() {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, BidirectionalMap);

    this._map = new Map();
    this._reverse = new Map();

    if (object) {
      for (var attr in object) {
        if ({}.hasOwnProperty.call(object, attr)) {
          this.set(attr, object[attr]);
        }
      }
    }
  }

  _createClass(BidirectionalMap, [{
    key: "size",
    get: function get() {
      return this._map.size;
    }
  }, {
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
    key: "getObject",
    value: function getObject() {
      var _iterator = _createForOfIteratorHelper(this._map.keys()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;

          if (!isPrimitive(key)) {
            throw new Error('There are non-primitive keys');
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return Object.fromEntries(this._map.entries());
    }
  }, {
    key: "getObjectReverse",
    value: function getObjectReverse() {
      var _iterator2 = _createForOfIteratorHelper(this._reverse.keys()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var key = _step2.value;

          if (!isPrimitive(key)) {
            throw new Error('There are non-primitive keys');
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return Object.fromEntries(this._reverse.entries());
    }
  }]);

  return BidirectionalMap;
}();

exports["default"] = BidirectionalMap;

function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
}

