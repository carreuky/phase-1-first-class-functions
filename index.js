function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function named() {
      return 'be cool'
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => 'be cool';
  }