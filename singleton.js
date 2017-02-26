var  Singleton = (function() {
  var _singleton;  
  function SingletonClass() {
    this.name = "Singleton";
  }
  
  function S() {
    if (!_singleton) {
      _singleton = new SingletonClass();
    }
    return _singleton;
  }

  S.getInstance = function() {
    if (!_singleton) {
      _singleton = new SingletonClass();
    }
    return _singleton;
  }

  return S;
})();
console.log(new Singleton() === new Singleton());
console.log(new Singleton() === Singleton.getInstance());
