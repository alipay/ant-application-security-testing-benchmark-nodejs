const SinkB=require('../service/sinkB.js')

module.exports = class {
  fun1(param){
    const sinkB=new SinkB();
    return sinkB.sink2(param);
  }
}
