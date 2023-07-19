import {SinkC} from "../service/sinkC"

const res = param => {
  var sinkC = new SinkC();
  return sinkC.sink3(param);
};

export {res};
