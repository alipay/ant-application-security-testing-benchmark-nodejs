const SinkB=require('../service/sinkB.js')

module.exports=function* yieldTest(i){
  var sinkB = new SinkB();
  yield sinkB.sink2(i);
}

