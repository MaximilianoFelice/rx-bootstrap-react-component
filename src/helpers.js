export function argsToArray(args){
  return Array.prototype.slice.call(args);
};

export function without(keys, object){
  if (!Array.isArray(keys)){
    var args = argsToArray(arguments)
    var object = args[args.length-1];
    var keys = args.slice(0, -1);
  }
  const copy = Object.assign({}, object);
  keys.forEach(x => delete copy[x]);
  return copy;
};

export function propagable(props, state, omit = []) {
  return without(
    ['observeOn', 'publishOn'].concat(omit), 
    Object.assign.apply(this, [{}].concat(argsToArray(arguments).slice(0,2)))
  );
};

export function propagableObsevable(observable, field){
  return observable.map(x => x.data[field]).filter(isDefined).map(x => {data: x})
};

export function isDefined(arg){return arg !== undefined};
export function isNotDefined(arg){return arg === undefined};

export function getData(val){return val.data};
