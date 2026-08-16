var test = require('brittle');
var BiMap = require('.')

var makeOne = function() {
  return new BiMap({
    john: 'mary',
    bob: 'alice',
    ptolemy: 'cleopatra',
  })
}    

test('it should create an empty Map', function (t) {
  var empty = new BiMap()
  t.is(empty instanceof BiMap, true);
  t.is(empty.size, 0);
});

test('it should get the value by key', function (t) {
  var monogamy = makeOne()
  t.is(monogamy.get('bob'), 'alice');
});

test('it should get the key by value', function (t) {
  var monogamy = makeOne()
  t.is(monogamy.getKey('alice'), 'bob');
});

test('it should set change values of same key', function (t) {
  var monogamy = new BiMap()
  monogamy.set('a', 0)
  monogamy.set('a', 1)
  t.is(monogamy.get('a'), 1);
  t.is(monogamy.getKey(1), 'a');
  t.is(monogamy.hasValue(0), false);
  t.is(monogamy.hasValue(1), true);
});

test('it should set change keys of same value', function (t) {
  var monogamy = new BiMap()
  monogamy.set('a', 0)
  monogamy.set('b', 0)
  t.is(monogamy.get('b'), 0);
  t.is(monogamy.getKey(0), 'b');
  t.is(monogamy.has('a'), false);
  t.is(monogamy.has('b'), true);
});

test('it should set the same key-value', function (t) {
  var monogamy = new BiMap()
  monogamy.set('a', 0)
  monogamy.set('a', 0)
  t.is(monogamy.get('a'), 0);
  t.is(monogamy.getKey(0), 'a');
  t.is(monogamy.has('a'), true);
  t.is(monogamy.hasValue(0), true);
});


test('it should get the size', function (t) {
  var monogamy = makeOne()
  t.is(monogamy.size, 3);
});

test('it should clear', function (t) {
  var monogamy = makeOne()
  monogamy.clear()
  t.is(monogamy.size, 0);
});

test('it should delete by key', function (t) {
  var monogamy = makeOne()
  monogamy.delete('john')
  t.is(monogamy.has('john'), false);
  t.is(monogamy.hasValue('mary'), false);
});

test('it should delete by value', function (t) {
  var monogamy = makeOne()
  monogamy.deleteValue('alice')
  t.is(monogamy.has('bob'), false);
  t.is(monogamy.hasValue('alice'), false);
});

test('it should return the entries', function (t) {
  var monogamy = makeOne()
  var entriesIt = monogamy.entries()
  t.is(entriesIt.next().value[0], 'john');
  t.is(entriesIt.next().value[1], 'alice');
});

test('it should check if it has a key', function (t) {
  var monogamy = makeOne()
  t.is(monogamy.has('bob'), true);
  t.is(monogamy.has('bill'), false);
});

test('it should check if it has a value', function (t) {
  var monogamy = makeOne()
  t.is(monogamy.hasValue('alice'), true);
  t.is(monogamy.hasValue('laura'), false);
});


test('it should return the keys', function (t) {
  var monogamy = makeOne()
  var keysIt = monogamy.keys()
  t.is(keysIt.next().value, 'john');
  t.is(keysIt.next().value, 'bob');
});

test('it should return the values', function (t) {
  var monogamy = makeOne()
  var valuesIt = monogamy.values()
  t.is(valuesIt.next().value, 'mary');
  t.is(valuesIt.next().value, 'alice');
});

test('it should return the plain {}', function (t) {
  var monogamy = makeOne()
  var object = monogamy.getObject()
  t.is(typeof object, 'object');
  t.is(object['john'], 'mary');
  t.is(object['bob'], 'alice');
});

test('it should return the reverse plain {}', function (t) {
  var monogamy = makeOne()
  var object = monogamy.getObjectReverse()
  t.is(typeof object, 'object');
  t.is(object['mary'], 'john');
  t.is(object['alice'], 'bob');
});
