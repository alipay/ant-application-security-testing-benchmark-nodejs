const SinkB=require('../service/sinkB.js')

module.exports = class returnUtil {
  async returnTest(i){
    const sinkB=new SinkB();
    return sinkB.sink2(i);
  }
  async returnInner(param){
    return function inner(){
      const sinkB=new SinkB();
      return sinkB.sink2(param);
    }
  }
}
