"use strict";

var compose = function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(undefined, arguments));
    };
  });
};

var sequence = function() {
  var args = Array.prototype.slice.call(arguments).reverse();
  return compose.apply(null, args);
}
var add10 =  function(value) {
  return value + 10;
}

var multiply5 = function(value) {
  return value * 5;
}

var add10Multiply5 = sequence(add10, multiply5);
// 20 = (2 + 10) * 5
console.log(add10Multiply5(2));
// 30 = (4 + 10 ) * 5
console.log(add10Multiply5(4));
