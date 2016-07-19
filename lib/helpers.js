'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.argsToArray = argsToArray;
exports.without = without;
exports.propagable = propagable;
exports.propagableObsevable = propagableObsevable;
exports.isDefined = isDefined;
exports.isNotDefined = isNotDefined;
exports.getData = getData;
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
  var omit = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  return without(['observeOn', 'publishOn'].concat(omit), Object.assign.apply(this, [{}].concat(argsToArray(arguments).slice(0, 2))));
};

function propagableObsevable(observable, field) {
  return observable.map(function (x) {
    return x.data[field];
  }).filter(isDefined).map(function (x) {
    data: x;
  });
};

function isDefined(arg) {
  return arg !== undefined;
};
function isNotDefined(arg) {
  return arg === undefined;
};

function getData(val) {
  return val.data;
};