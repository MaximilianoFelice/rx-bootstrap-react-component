'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function argsToArray(args) {
  return Array.prototype.slice.call(args);
};

function without(keys, object) {
  if (!Array.isArray(keys)) {
    var args = argsToArray(arguments);
    var object = args[args.length - 1];
    var keys = args.slice(0, -1);
  }
  var copy = Object.assign({}, object);
  keys.forEach(function (x) {
    return delete copy[x];
  });
  return copy;
};

function propagable(props, state) {
  return without('observeOn', 'publishOn', Object.assign.apply(this, [{}].concat(argsToArray(arguments))));
};

exports.without = without;
exports.propagable = propagable;