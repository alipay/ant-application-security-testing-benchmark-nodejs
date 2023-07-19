const Controller = require('egg').Controller;
const SinkB = require('../../service/sinkB')
const Teacher = require('../../common/Teacher')
const Person = require('../../common/Person')

class ObjectAccuracy extends Controller{
  //object -- source to sink
  async case024A(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    let sinkB = new SinkB();
    const res = sinkB.sink2(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //object -- source not to sink
  async case024B(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    let sinkB = new SinkB();
    const res = sinkB.sink2(bar);
    this.ctx.body = `Output: \n${res}`;
  }

  //Attribute sensitive - A
  async case025A(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const t = new Teacher(foo,1,bar);
    let sinkB = new SinkB();
    const res = sinkB.sink2(t.name);
    this.ctx.body = `Output: \n${res}`;
  }

  //Attribute sensitive - B
  async case025B(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const t = new Teacher(foo,1,bar);
    let sinkB = new SinkB();
    const res = sinkB.sink2(t.id);
    this.ctx.body = `Output: \n${res}`;
  }

  //Attribute sensitive - AA
  async case025AA(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const t = new Teacher(foo,1,bar);
    const temp = t.getName();
    let sinkB = new SinkB();
    const res = sinkB.sink2(temp);
    this.ctx.body = `Output: \n${res}`;
  }

  //Attribute sensitive - BB
  async case025BB(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const t = new Teacher(foo,1,bar);
    const temp = t.getId();
    let sinkB = new SinkB();
    const res = sinkB.sink2(temp);
    this.ctx.body = `Output: \n${res}`;
  }

  //Attribute sensitive - AAA
  async case025AAA(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const t = new Person();
    t.setName(foo);
    const temp = t.getName();
    let sinkB = new SinkB();
    const res = sinkB.sink2(temp);
    this.ctx.body = `Output: \n${res}`;
  }
  //Attribute sensitive - BBB
  async case025BBB(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const t = new Person();
    t.setName(foo);
    const temp = t.getId();
    let sinkB = new SinkB();
    const res = sinkB.sink2(temp);
    this.ctx.body = `Output: \n${res}`;
  }

  //Attribute sensitive - AAAA
  async case025AAAA(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const t = new Teacher(foo,1,bar);
    let sinkB = new SinkB();
    const res = sinkB.sink2(t);
    this.ctx.body = `Output: \n${res}`;
  }

  //Attribute sensitive - AAAAA Destructuring assignment
  async case025AAAAA(){
    const obj = { x:1,y:this.ctx.query.a };
    const { x,y }=obj;
    const res = await this.ctx.service.sinkA.sink1(y);
    this.ctx.body = `Output: \n${res}`;
  }

  //Attribute sensitive - BBBBB Destructuring assignment
  async case025BBBBB(){
    const obj = { x:1,y:this.ctx.query.a };
    const { a,b }=obj; // a b are undefined
    const res = await this.ctx.service.sinkA.sink1(b);
    this.ctx.body = `Output: \n${res}`;
  }

  //Array Element - A
  async case026A(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const array = ["1",foo,bar];
    let sinkB = new SinkB();
    const res = sinkB.sink2(array[1]);
    this.ctx.body = `Output: \n${res}`;
  }

  //Array Element - B
  async case026B(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const array = ["1",foo,bar];
    let sinkB = new SinkB();
    const res = sinkB.sink2(array[0]);
    this.ctx.body = `Output: \n${res}`;
  }

  //Map Element - A
  async case027A(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const map1 = new Map();
    map1.set('a',foo);
    map1.set('b',bar);
    map1.set('c','wasdzxc');
    let sinkB = new SinkB();
    const res = sinkB.sink2(map1.get('a'));
    this.ctx.body = `Output: \n${res}`;
  }

  //Map Element - B
  async case027B(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const map1 = new Map();
    map1.set('a',foo);
    map1.set('b',bar);
    map1.set('c','wasdzxc');
    let sinkB = new SinkB();
    const res = sinkB.sink2(map1.get('b'));
    this.ctx.body = `Output: \n${res}`;
  }

  //Multi-dimensional array -- A
  async case028A(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const array = [["1",foo],[bar,"2"]];
    let sinkB = new SinkB();
    const res = sinkB.sink2(array[0][1]);
    this.ctx.body = `Output: \n${res}`;
  }

  //Multi-dimensional array -- B
  async case028B(){
    const foo = this.ctx.query.a;
    const bar = "hello world";
    const array = [["1",foo],[bar,"2"]];
    let sinkB = new SinkB();
    const res = sinkB.sink2(array[1][0]);
    this.ctx.body = `Output: \n${res}`;
  }

  //Element not sure
  async case029AB(){
    const foo = this.ctx.query.a;
    const num = Number(this.ctx.query.num);
    const bar = "hello world";
    const array = ["1",foo,bar];
    let sinkB = new SinkB();
    const res = sinkB.sink2(array[num+1]);
    this.ctx.body = `Output: \n${res}`;
  }

  //char in string -AB
  async case0210AB(){
    const path = this.ctx.query.a;
    const url= "https://www.test.com/api/"+path; //这样一个url传入http请求函数中不会造成ssrf;如果domain可控，则会造成ssrf
    let sinkB = new SinkB();
    const res = sinkB.sink2(url);
    this.ctx.body = `Output: \n${res}`;
  }


}

module.exports = ObjectAccuracy;
