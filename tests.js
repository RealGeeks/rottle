'use strict';

var test = require('tape');
var throttle = require('./');

test('Does not trigger function for successive calls', function (assert) {
  assert.plan(1);

  var fn = throttle(function () {
    assert.pass('Called');
  });

  fn();
  fn();
});

test('Triggers function after delay', function (assert) {
  assert.plan(2);

  var fn = throttle(function () {
    assert.pass('Called');
  });

  fn();
  setTimeout(fn, 50);
});

test('Passes the correct context and arguments', function (assert) {
  assert.plan(3);

  var fn = function (a, b) {
    assert.equal(this, object, 'context');
    assert.equal(a, 1, 'first argument');
    assert.equal(b, 'b', 'second argument');
  };

  var object = {};

  object.method = throttle(fn);

  object.method(1, 'b');
});
