const SinkB = require('../service/sinkB')

function decoratorClass(plantType){
  return function(target){
    console.log(`set type ${plantType}`);
    target.plantType=plantType;
  }
}

function decoratorFunction(target,name,descriptor){
  var oldValue = descriptor.value;
  console.log(descriptor.value);
  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    const sinkB = new SinkB();
    console.log(sinkB.sink2(arguments));
    return oldValue.apply(this, arguments);
  };
  return descriptor;
}

@decoratorClass('123')
class Plant{
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  @decoratorFunction
  AA(param){
    return param;
  }
}

module.exports=Plant;
