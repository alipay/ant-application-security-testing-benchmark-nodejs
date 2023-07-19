import {SinkC} from "../service/sinkC"

function arrayAccess(params){
  var sinkC=new SinkC();
  var res="";
  for (var i=0; i<params.length;i++){
    res += sinkC.sink3(params[i]);
  }
  return res;
}

export {arrayAccess};
