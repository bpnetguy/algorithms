Singleton = (function() {
  let _singleton;
  function getSingleton() {
      if (!_singleton) {
          _singleton = new SingletonClass();
      }
      return _singleton;

  }
  class RokuClass {
      constructor() {
          if(_singleton) {
             return _singleton;
          }
      }
      static getInstance = () => {
         return getSingleton();
      }
  }

  return SingletonClass;

})();

console.log(new Singleton() === new Singleton());
console.log(new Singleton() === Singleton.getInstance());
