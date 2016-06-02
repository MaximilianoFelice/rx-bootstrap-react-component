"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function without(keys, object) {
  if (!Array.isArray(keys)) {
    var args = Array.prototype.slice.call(arguments);
    var object = args[args.length - 1];
    var keys = args.slice(0, -1);
  }
  var copy = Object.assign({}, object);
  keys.forEach(function (x) {
    return delete copy[x];
  });
  return copy;
}

exports.without = without;