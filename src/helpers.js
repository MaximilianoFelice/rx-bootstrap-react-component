function without(keys, object){
  if (!Array.isArray(keys)){
    var args = Array.prototype.slice.call(arguments);
    var object = args[args.length-1];
    var keys = args.slice(0, -1);
  }
  const copy = Object.assign({}, object);
  keys.forEach(x => delete copy[x]);
  return copy;
}

export {without};