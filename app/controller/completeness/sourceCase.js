const Controller = require('egg').Controller;
const SinkB = require('../../service/sinkB')

class SourceCase extends Controller{

  //source Customization -- A
  async case0155A(custSource){
    const foo = custSource;
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //source Customization -- B
  async case0155B(){
    const custSource="aaa";
    const foo = custSource;
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //source Customization -- Fuzzy matching
  async case0156(){
    const foo = this.ctx.queries.abc;
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }
}

module.exports = SourceCase;
