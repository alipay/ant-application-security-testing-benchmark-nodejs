import {SinkC} from "../service/sinkC"

var a= function(param){
  const sinkC=new SinkC();
  return sinkC.sink3(param);
}

export {a};
