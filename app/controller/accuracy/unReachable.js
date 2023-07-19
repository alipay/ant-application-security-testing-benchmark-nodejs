const Controller = require('egg').Controller;
const SinkB = require('../../service/sinkB')
const Teacher = require('../../common/Teacher');

class UnReachable extends Controller{
  //static value assignment
  async case0211B(){
    var foo = this.ctx.query.a;
    var bar = "123";
    foo = "hello world";
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //static value assignment by another value
  async case0212B(){
    var bar = "123";
    var foo = this.ctx.query.a;
    foo = bar;
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //static array
  async case0213B(){
    var foo = this.ctx.query.a;
    var arr = ["1","2","3"];
    let sinkB = new SinkB();
    const res = sinkB.sink2(arr[foo]);
    this.ctx.body = `Output: \n${res}`;
  }

  //static map
  async case0214B(){
    const foo = this.ctx.query.a;
    const map1 = new Map();
    map1.set('a','hello');
    map1.set('b','world');
    map1.set('c','wasdzxc');
    let sinkB = new SinkB();
    const res = sinkB.sink2(map1.get(foo));
    this.ctx.body = `Output: \n${res}`;
  }

  //set method covers the taint value
  async case0215B(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const t = new Teacher(foo,1,bar);
    t.setName("abc");
    let sinkB = new SinkB();
    const res = sinkB.sink2(t.getName());
    this.ctx.body = `Output: \n${res}`;
  }

  //multi return statement
  async case0216B(){
    var foo = this.ctx.query.a;
    this.ctx.body = "Output: already return";
    return 0;
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //logic unreachable
  async case0217B(){
    var foo = this.ctx.query.a;
    var bar = "hello world";
    var test = 1;
    let sinkB = new SinkB();
    if(test === 1){
      bar = foo;
      this.ctx.body = "Output: logic unreachable case1";
    }
    if(!(test === 1)){
      const res = sinkB.sink2(bar);
      this.ctx.body = `Output: \n${res}`;
    }
  }

  //logic unreachable
  async case0218B(){
    var foo = this.ctx.query.a;
    var bar = "hello world";
    var test = 1;
    let sinkB = new SinkB();
    if(test === 1){
      bar = foo;
      this.ctx.body = "Output: logic unreachable case2";
    }
    else{
      const res = sinkB.sink2(bar);
      this.ctx.body = `Output: \n${res}`;
    }
  }

  //Expression solving
  async case0219B(){
    var foo = this.ctx.query.a;
    var bar = "hello world";
    var test = 1;
    let sinkB = new SinkB();
    if(test+1+2+3+4 === 11){
      this.ctx.body = "Output: Expression solving case";
    }
    else{
      bar = foo;
      const res = sinkB.sink2(bar);
      this.ctx.body = `Output: \n${res}`;
    }
  }
}
module.exports = UnReachable;
