class SinkB {
  constructor() {
    this.name = "abc";
    this.id = 0;
    this.InnerB = new this.InnerB();
  }

  sink2(param) {
    return param;
  }

  sink222(param){
    return param;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  getId(){
    return this.id;
  }

  getSelf(){
    return this;
  }

  InnerB = class{
    justR(param) {
      return param;
    }
  }

  processB(param){
    return this.InnerB.justR(param)
  }

}


module.exports = SinkB;
