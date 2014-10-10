'use strict';

var raf = require('raf');

module.exports = function throttle(fn) {
  var busy;
  var context;
  var args;

  return function () {
    if (busy) {
      return;
    }
    busy = true;
    context = this;
    args = arguments;

    raf(function () {
      fn.apply(context, args);
      busy = false;
    });
  };
};
