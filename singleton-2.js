const Singleton = (function() {

  let _singleton;
  function getSingleton() {
      if (!_singleton) {
          _singleton = new SingletonClass();
      }
      return _singleton;

  }
  class SingletonClass {
      constructor() {
          if(_singleton) {
             return _singleton;
          }

      }
      static getInstance = () => {
         return getSingleton();
      }
  }
  // warm up
  SingletonClass.getInstance();
  return SingletonClass;

})();

console.log(new Singleton() === Singleton.getInstance());
console.log(new Singleton() === new Singleton());
