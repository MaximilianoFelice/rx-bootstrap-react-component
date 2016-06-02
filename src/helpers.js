function argsToArray(args){
  return Array.prototype.slice.call(args);
};

function without(keys, object){
  if (!Array.isArray(keys)){
    var args = argsToArray(arguments)
    var object = args[args.length-1];
    var keys = args.slice(0, -1);
  }
  const copy = Object.assign({}, object);
  keys.forEach(x => delete copy[x]);
  return copy;
};

function propagable(props, state){
  return without('observeOn', 'publishOn', Object.assign.apply(this, [{}].concat(argsToArray(arguments))));
};

export {without, propagable};
