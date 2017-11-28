function wrapper(...args) {
  return function() {
    args.forEach( method => {
      if (method) method.apply(this);
    });
  }
}

export default wrapper;