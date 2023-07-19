const { Controller } = require('egg');
const Teacher = require('../../common/Teacher')
const Animal = require('../../common/Animal')
const Plant = require('../../common/plant')
const SinkB = require('../../service/sinkB')
const R = require('ramda')
import {SinkC} from "../../service/sinkC"
const fs = require('fs')
const util = require('util')
const dofunc = require('../../common/doFunction')

class SpecialCase extends Controller {
  //Template string
  async case0165(){
    var a= this.ctx.query.a;
    var obj = `select * from ${a}`; // Pretend to be a SQL injection
    var res = await this.ctx.service.sinkA.sink1(obj);
    this.ctx.body = `Output: \n${res}`;
  }

  //Destructuring assignment -- 1
  async case0166(){
    const arr = [this.ctx.query.name,this.ctx.query.id,this.ctx.query.a];
    const [name,id,a]=arr;
    const res = await this.ctx.service.sinkA.sink1(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //Destructuring assignment -- 2
  async case0167(){
    const obj = { x:1,y:this.ctx.query.a };
    const { x,y }=obj;
    const res = await this.ctx.service.sinkA.sink1(y);
    this.ctx.body = `Output: \n${res}`;
  }

  //Destructuring assignment -- 3
  async case0168(){
    const arr = [[this.ctx.query.name,this.ctx.query.id],[this.ctx.query.a,this.ctx.query.b]];
    const [[name,id],[a,b]]=arr;
    const res = await this.ctx.service.sinkA.sink1(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //Destructuring assignment -- 4
  async case0169(){
    const obj = {x:1,y:{z:3,u:this.ctx.query.a}};
    const {x,y:{z:c,u:e}} = obj;
    const res = await this.ctx.service.sinkA.sink1(e);
    this.ctx.body = `Output: \n${res}`;
  }

  //Spread operator -- object assignment
  async case0170(){
    const params={
      name:"Tony",
      age:"12",
      id:this.ctx.query.a
    }
    const newParams = {
      score:100,
      ...params
    }
    const res = await this.ctx.service.sinkA.sink1(newParams);
    this.ctx.body = `Output: \n${res}`;
  }

  //Spread operator -- func param
  async case0171(){
    const params={
      name:"Tony",
      age:"12",
      id:this.ctx.query.a
    };
    const res = await this.ctx.service.sinkA.sink13({...params});
    this.ctx.body = `Output: \n${res}`;
  }

  //constructor --> member
  async case0172(){
    const a = this.ctx.query.a;
    const t = new Animal(a,"huge");
    const res = await this.ctx.service.sinkA.sink1(t.AA());
    this.ctx.body = `Output: \n${res}`;
  }

  //parent/child class + super
  async case0173(){
    const a = this.ctx.query.a;
    const t = new Teacher("tony",12,a);
    const res = await this.ctx.service.sinkA.sink1(t.AA());
    this.ctx.body = `Output: \n${res}`;
  }

  //Native functions
  async case0174(){
    const a = this.ctx.query.a;
    const array1 = [a, 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = array1.concat(array2);
    const sinkB=new SinkB();
    const res = await sinkB.sink2(array3);
    this.ctx.body = `Output: \n${res}`;
  }

  //prototype call
  async case0175(){
    const a = this.ctx.query.a;
    var arrayLike= ["1","2"];
    var arr=Array.prototype.concat.call(arrayLike, a)
    const sinkB=new SinkB();
    const res = await sinkB.sink2(arr);
    this.ctx.body = `Output: \n${res}`;
  }

  //Two/Third-party pack
  async case0176(){
    const a = this.ctx.query.a;
    var array=[a,"1","2"];
    let taint=R.head(array);
    const sinkB=new SinkB();
    const res = await sinkB.sink2(taint);
    this.ctx.body = `Output: \n${res}`;
  }

  //Chained calls
  async case0177(){
    const a = this.ctx.query.a;
    const sinkB=new SinkB();
    const res = await sinkB.getSelf().sink2(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //decorator
  async case0178(){
    const a = this.ctx.query.a;
    const plant = new Plant("abc",1);
    const res = plant.AA(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //prototype modify
  async case0179(){
    const a = this.ctx.query.a;
    Animal.prototype.returnTaint=function(param){
      return param;
    }
    const animal = new Animal();
    const sinkB=new SinkB();
    const res = sinkB.sink2(animal.returnTaint(a));
    this.ctx.body = `Output: \n${res}`;
  }

  //source --> multi sink
  async case0180(){
    const a = this.ctx.query.a;
    const sinkB=new SinkB();
    const res1 = sinkB.sink2(a);
    let sinkC = new SinkC();
    const res2 = sinkC.sink3(a);
    this.ctx.body = `Output: \n${res1+res2}`;
  }

  //multi source --> sink
  async case0181(){
    const a = this.ctx.query.a;
    const bc = this.ctx.request.bc;
    const sinkB=new SinkB();
    const res1 = sinkB.sink2(a);
    const res2 = sinkB.sink2(bc);
    this.ctx.body = `Output: \n${res1+res2}`;
  }

  //sink(source)
  async case0182(){
    const sinkB=new SinkB();
    const res = sinkB.sink2(this.ctx.query.a);
    this.ctx.body = `Output: \n${res}`;
  }

  //Promise
  async case0183(){
    const a = this.ctx.query.a;
    const promise = new Promise((resolve, reject) => {
      // 异步操作
      setTimeout(() => {
        if ( Number(a) < 10) {
          resolve('success');
        } else {
          reject('error');
        }
      }, 1000);
    });

    promise.then(result => {
      const sinkB=new SinkB();
      const res = sinkB.sink2(a);
      console.log(`Output: \n${res}`);
    }).catch(error => {
      console.log( `Error a>=10`);
    });
    this.ctx.body = "still empty"
  }

  //util.promisify
  async case0184(){
    const path = this.ctx.query.a;

    const abcde = util.promisify(fs.readFile);
    const buf = await abcde(path);
    const obj = JSON.parse(buf.toString('utf8'));
    console.log(obj.name); // 'tsbenchmark'
    this.ctx.body = `Output: \n${obj}`;
  }

  //callback
  async case0185(){
    const path = String(this.ctx.query.a);
    console.log(path);
    let str='';
    fs.readFile(path, (err, buf) =>{
      if (err) throw err;
      const obj = JSON.parse(buf.toString('utf8'));
      console.log(obj.description); // '123'
      const sinkB=new SinkB();
      const res = sinkB.sink2(obj.description);
      console.log(res);
      str = `Output: \n${res}`;
      console.log(str);
    });
    this.ctx.body='still empty';
  }

  //sink-->func parameter
  async case0186(){
    const a = this.ctx.query.a;
    const sinkB=new SinkB();
    const res= dofunc(a,sinkB.sink2);
    this.ctx.body = `Output: \n${res}`;
  }

  //?.
  async case0196(){
    const animal = {
      cat: {
        name: this.ctx.query.a,
        color: 'black'
      },
      dog: {
        name: 'doggie'
      }
    }
    const catName = animal ?.cat ?.name
    const sinkB=new SinkB();
    const res = sinkB.sink2(catName);
    this.ctx.body = `Output: \n${res}`;
  }

  //??
  async case0197(){
    const animal = {
      cat: {
        name: this.ctx.query.a,
        color: 'black'
      },
      dog: {
        name: 'doggie'
      }
    }
    const catName = null ?? animal.cat.name
    const sinkB=new SinkB();
    const res = sinkB.sink2(catName);
    this.ctx.body = `Output: \n${res}`;
  }
}
module.exports = SpecialCase;
