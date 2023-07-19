import {SinkC} from "../service/sinkC"

export const res = param => {
  var sinkC = new SinkC();
  return sinkC.sink3(param);
};
