const Controller = require('egg').Controller;
const SinkB = require('../../service/sinkB')
const { SinkC } = require('../../service/sinkC');

class SourceSinkAccuracy extends Controller{
  //source Customization -- A
  async case021A(selfParam){
    const foo = selfParam;
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }
  //source Customization -- B
  async case021B(selfParam){
    selfParam="aaa";
    const foo = selfParam;
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }
//sink parameter -- A
  async case022A(){
    const foo = this.ctx.query.a;
    let sinkC = new SinkC();
    const res = sinkC.sink4("/aaa",foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //sink parameter -- B
  async case022B(){
    const foo = this.ctx.query.a;
    let sinkC = new SinkC();
    const res = sinkC.sink4(foo,"www.aaa.com");
    this.ctx.body = `Output: \n${res}`;
  }

  //source/sink content -- A
  async case023A(){
    const foo = this.ctx.query.a;
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //source/sink content -- B
  async case023B(){
    const foo = this.ctx.query.aaa;
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //source/sink content -- BB
  async case023BB(){
    const foo = this.ctx.query.a;
    let sinkB = new SinkB();
    const res = sinkB.sink222(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //source/sink content -- BBB
  async case023BBB(){
    var obj={
      str:this.ctx
    };
    var res = this.ctx.service.sinkA.sink1(obj);
    this.ctx.body = `Output: \n${res}`;
  }


}

module.exports = SourceSinkAccuracy;
