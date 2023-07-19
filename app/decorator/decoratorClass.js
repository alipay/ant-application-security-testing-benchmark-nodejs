const SinkB = require('../service/sinkB')

function decoratorClass(name) {
  return function decorator(Class) {
    return (...args) => {
      console.log(`log for ${name}: `, args)
      return new Class(...args)
    }
  }
}

function decoratorFunction(target, name, descriptor) {
  const original = descriptor.value;

  if (typeof original === 'function') {
    descriptor.value = function(...args) {
      const sinkB=new SinkB();
      const res=sinkB.sink2(args);
      console.log(`log for func args: ${args},sink res is: ${res}`);
      try {
        return original.apply(this, args);
      } catch (e) {
        console.log(`Error: ${e}`);

        throw e;
      }
    }
  }

  return descriptor;
}

export {decoratorClass,decoratorFunction};
