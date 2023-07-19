const SinkB=require('../service/sinkB.js')

let ac = class {
  fun1(param){
    const sinkB=new SinkB();
    return sinkB.sink2(param);
  }
}

module.exports=ac;
