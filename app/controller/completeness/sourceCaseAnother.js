const Controller = require('egg').Controller;
const SinkB = require('../../service/sinkB')

class SourceCaseAnother extends Controller{
  //source Customization -- BB -- should not in this class
  async case0155BB(custSource){
    const foo = custSource;
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }
}

module.exports = SourceCaseAnother;
