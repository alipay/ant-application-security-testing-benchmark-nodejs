const { execSync } = require('child_process');
const Controller = require('egg').Controller;
const SinkB = require('../../service/sinkB')
const yieldUtil = require('../../util/yieldUtil.js')
const returnUtil = require('../../util/returnUtil.js')
const anonymousclass = require('../../common/anonymousClass')
import { a as AnonymousFunc } from '../../common/anonymousFunction'
import { res as arrowFunc } from '../../common/arrowFunc'
import { res as exportFunc} from '../../common/exportFunction'
const meFunction = require('../../common/moduleExportsFunction')
import {arrayAccess as arrAccess} from '../../common/arrayAccess'
const justReturn = require('../../common/justReturn')

class AstTaintCase extends Controller {

  //Simple Assignment expression
  async case011() {
    var a = this.ctx.query.a;
    var res = execSync(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //Prefix/Suffix expression
  async case012() {
    var i=this.ctx.query.a;
    i++;
    ++i;
    var a = execSync(`echo ${i}`);
    this.ctx.body = `Output: \n${a}`;
  }

  //infix expression
  async case013() {
    var a= this.ctx.query.a + "; ls -l" ;
    var res= execSync(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //Ternary expressions -- true
  async case014() {
    var a= this.ctx.query.a;
    var res= typeof a == 'string' ?  execSync(a) : a;
    this.ctx.body = `Output: \n${res}`;
  }

  //Ternary expressions -- false
  async case015() {
    var a= this.ctx.query.a;
    var res= typeof a != 'string' ? a : execSync(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //invocation expression
  async case016() {
    var a= this.ctx.query.a;
    var res= await this.ctx.service.cmdUtil.doCmd(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //new expression
  async case017(){
    var a= this.ctx.query.a;
    var res = execSync(new String(a).toString());
    this.ctx.body = `Output: \n${res}`;
  }

  //object expression
  async case018(){
    var obj={
      str:this.ctx.query.a
    };
    var res = this.ctx.service.sinkA.sink1(obj);
    this.ctx.body = `Output: \n${res}`;
  }

  //object property
  async case019(){
    var obj={
      str:this.ctx.query.a
    };
    var res = execSync(obj.str);
    this.ctx.body = `Output: \n${res}`;
  }

  //Array Access
  async case0110(){
    var a = new Array(5);
    a[0]=this.ctx.query.a;
    var res = execSync(a[0]);
    this.ctx.body = `Output: \n${res}`;
  }

  //Map Access
  async case0111(){
    var a = new Map();
    a.set('taint',this.ctx.query.a);
    var res = execSync(a.get('taint'));
    this.ctx.body = `Output: \n${res}`;
  }

  //if statement -- discriminant
  async case0112(){
    var a= this.ctx.query.a;
    if( typeof execSync(a) =='string'){
      this.ctx.body = `Output: \n${res}`;
    }
    else{
      this.ctx.body = `Output: not string`;
    }
  }

  //if statement -- true
  async case0113(){
    var a= this.ctx.query.a;
    if(true){
      var res = execSync(a);
      this.ctx.body = `Output: \n${res}`;
    }
    else{
      this.ctx.body = `Output: not string`;
    }
  }

  //if statement -- false
  async case0114(){
    var a= this.ctx.query.a;
    if(false){
      this.ctx.body = `Output: not string`;
    }
    else{
      this.ctx.body = `Output: not string`;
      var res = execSync(a);
      this.ctx.body = `Output: \n${res}`;
    }
  }

  //return statement --yield
  async case0115(){
    var a= this.ctx.query.a;
    var res= yieldUtil(a).next().value;
    this.ctx.body = `Output: \n${res}`;
  }

  //return statement --return
  async case0116(){
    var a= this.ctx.query.a;
    const returnObject = new returnUtil();
    var res= await returnObject.returnTest(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //switch statement discriminant
  async case0117(){
    var a= this.ctx.query.a;
    switch (this.ctx.service.sinkA.sink(a)) {
      case 1:
        this.ctx.body = `Output: \n1`;
        break;
    }
  }

  //switch statement case clause
  async case0118(){
    var a= this.ctx.query.a;
    switch (1) {
      case 1:
        var res = execSync(a);
        this.ctx.body = `Output: \n${res}`;
        break;
    }
  }

  //switch statement default clause
  async case0119(){
    var a= this.ctx.query.a;
    switch (2) {
      case 1:
        this.ctx.body = `Output: \n$1`;
        break;
      default:
        var res = execSync(a);
        this.ctx.body = `Output: \n${res}`;
    }
  }

  //for statement init clause
  async case0120(){
    var a= this.ctx.query.a;
    for(var i= await this.ctx.service.sinkA.sink1(a);i<10;i++){
      this.ctx.body = `Output: \n${i}`;
    }
  }

  //for statement discriminant clause
  async case0121(){
    var a= this.ctx.query.a;
    for(var i=1;i< await this.ctx.service.sinkA.sink1(a);i++){
      this.ctx.body = `Output: \n${i}`;
    }
  }

  //for statement update clause
  async case0122(){
    var a= this.ctx.query.a;
    for(var i=1;i<10;i= await this.ctx.service.sinkA.sink1(a)){
      this.ctx.body = `Output: \n${i}`;
    }
  }

  //for statement body clause
  async case0123(){
    var a= this.ctx.query.a;
    var res=0;
    for(var i=1;i<10;i++){
      res= await this.ctx.service.sinkA.sink1(a);
    }
    this.ctx.body = `Output: \n${res}`;
  }

  //for in
  async case0124(){
    var obj = {a:this.ctx.query.a, b:2, c:3}
    var res="res:";
    for (let index in obj) {
      res += await this.ctx.service.sinkA.sink1(index);
    }
    this.ctx.body = `Output: \n${res}`;
  }

  //for of
  async case0125(){
    var obj = [this.ctx.query.a,2,3]
    var res="res:";
    for (let index of obj) {
      res+= await this.ctx.service.sinkA.sink1(index);
    }
    this.ctx.body = `Output: \n${res}`;
  }

  //while condition
  async case0126(){
    var a=this.ctx.query.a;
    const sinkB=new SinkB();
    var res="res:";
    while(sinkB.sink2(a)>1){
      res += a;
      a--;
    }
    this.ctx.body = `Output: \n${res}`;
  }

  //while body
  async case0127(){
    var a=this.ctx.query.a;
    const sinkB=new SinkB();
    var res="res:";
    while(a>1){
      res += sinkB.sink2(a);
      a--;
    }
    this.ctx.body = `Output: \n${res}`;
  }

  //do-while
  async case0128(){
    var a=this.ctx.query.a;
    const sinkB=new SinkB();
    var res="res:";
    do{
      res += sinkB.sink2(a);
      a--;
    }while (a>1)
  }

  //try-statement
  async case0129(){
    var a=this.ctx.query.a;
    try{
      const sinkB = new SinkB();
      var res = sinkB.sink2(a);
      this.ctx.body = `Output: \n${res}`;
    }catch(e){
      //...
    }
  }

  //catch-statement
  async case0130(){
    var a=this.ctx.query.a;
    try{
      adddlert("123！");
    }catch(e){
      const sinkB = new SinkB();
      var res = sinkB.sink2(a);
      this.ctx.body = `Output: \n${res}`;
    }
  }

  //finally-statement
  async case0131(){
    var a=this.ctx.query.a;
    try{
      //...
    }catch(e){
      //..
    }finally {
      const sinkB = new SinkB();
      var res = sinkB.sink2(a);
      this.ctx.body = `Output: \n${res}`;
    }
  }

  //anonymous class
  async case0132(){
    var a= this.ctx.query.a;
    const ac = new anonymousclass();
    var res= await ac.fun1(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //anonymous function
  async case0133(){
    var a= this.ctx.query.a;
    var res= await AnonymousFunc(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //IIFE
  async case0134(){
    var pp=(function(param) {
      // 块级作用域
      var a= param;
      var res="";
      for (var i = 0; i < 5; i++) {
        res += a;
      }
      return res;
    })(this.ctx.query.a);
    const sinkB = new SinkB();
    var res = sinkB.sink2(pp);
    this.ctx.body = `Output: \n${res}`;
  }

  //arrowFunction
  async case0135(){
    var a= this.ctx.query.a;
    var res=arrowFunc(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //closure function
  async case0136(){
    var a= this.ctx.query.a;
    function abc(){
      const sinkB = new SinkB();
      return sinkB.sink2(b);
    }
    var b=a;
    var res=abc();
    this.ctx.body = `Output: \n${res}`;
  }

  //export statement+func
  async case0137(){
    var a = this.ctx.query.a;
    var res= exportFunc(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //module exports statement + anonymous function
  async case0138(){
    var a = this.ctx.query.a;
    const meF = new meFunction();
    var res= meF.fun1(a);
    this.ctx.body = `Output: \n${res}`;
  }

  //Unary expression+Binary expression
  async case0139(){
    var i=Number(this.ctx.query.a);
    var j=Number(this.ctx.query.b);
    var iplus=i+++j;
    var a = execSync(`echo ${iplus}`);
    this.ctx.body = `Output: \n${a}`;
  }

  //Binary expression+Binary expression
  async case0140(){
    var i=Number(this.ctx.query.a);
    var j=Number(this.ctx.query.b);
    var iplus=(i+j)+(i+j);
    var a = execSync(`echo ${iplus}`);
    this.ctx.body = `Output: \n${a}`;
  }

  //Ternary expressions+Unary/Binary/Ternary expressions
  async case0141(){
    var a=Number(this.ctx.query.a);
    var b=Number(this.ctx.query.b);
    var c=Number(this.ctx.query.c);
    var d=Number(this.ctx.query.d);
    var e=Number(this.ctx.query.e);
    var f=Number(this.ctx.query.f);
    var iplus = a===1?(c===1?d+e:f):++b;
    var res = execSync(`echo ${iplus}`);
    this.ctx.body = `Output: \n${res}`;
  }

  //invocation expression+unary expression
  async case0142(){
    var a = Number(this.ctx.query.a);
    const sinkB = new SinkB();
    var res = sinkB.sink2(a++);
    this.ctx.body = `Output: \n${res}`;
  }

  //invocation expression+binary expression
  async case0143(){
    var a = Number(this.ctx.query.a);
    const sinkB = new SinkB();
    var res = sinkB.sink2(a+1);
    this.ctx.body = `Output: \n${res}`;
  }

  //invocation expression+Ternary expression
  async case0144(){
    var a = Number(this.ctx.query.a);
    var b = Number(this.ctx.query.b);
    const sinkB = new SinkB();
    var res = sinkB.sink2(b===1?a+2:0);
    this.ctx.body = `Output: \n${res}`;
  }

  //invocation expression+object property
  async case0145(){
    var obj={
      id:this.ctx.query.a,
      name:this.ctx.query.name,
      sex:this.ctx.query.sex
    }
    const sinkB = new SinkB();
    var res = sinkB.sink2(obj.id);
    this.ctx.body = `Output: \n${res}`;
  }

  //invocation expression+array
  async case0146(){
    var arr=[];
    arr.push(123);
    arr.push(this.ctx.query.a);
    var res=arrAccess(arr)
    this.ctx.body = `Output: \n${res}`;
  }

  //object property+array
  async case0147(){
    var arr=[];
    arr.push(123);
    arr.push(this.ctx.query.a);
    var obj={
      p:arr,
    }
    const sinkB = new SinkB();
    var res = sinkB.sink2(obj.p[1]);
    this.ctx.body = `Output: \n${res}`;
  }

  //method invocation+method invocation
  async case0148(){
    var a = this.ctx.query.a;
    var id = this.ctx.query.id;
    var sinkB = new SinkB();
    var res= sinkB.setId(id).sink2(a)
    this.ctx.body = `Output: \n${res}`;
  }

  //method invocation in method invocation
  async case0149(){
    var a = this.ctx.query.a;
    var res= await this.ctx.service.sinkA.sink1(justReturn(a));
    this.ctx.body = `Output: \n${res}`;
  }

  //return statement+function declaration
  async case0150(){
    var a= this.ctx.query.a;
    const returnObject = new returnUtil();
    var res= await returnObject.returnInner(a);
    var resTruth=res();
    this.ctx.body = `Output: \n${resTruth}`;
  }

  //inner class -- Property access Internal instantiation
  async case0151(){
    var a= this.ctx.query.a;
    var sinkB = new SinkB();
    var res= sinkB.processB(a)
    this.ctx.body = `Output: \n${res}`;
  }

  //inner class -- new inner class
  async case0152(){
    const a = this.ctx.query.a;
    const innerB = new SinkB().InnerB;
    const justa = innerB.justR(a);
    this.ctx.body = `Output: \n${justa}`;
  }

  //ThisExpression -- set-->property
  async case0153(){
    const a= this.ctx.query.a;
    var sinkB= new SinkB();
    sinkB.setId(a);
    var res=sinkB.sink2(sinkB.id);
    this.ctx.body = `Output: \n${res}`;
  }

  //ThisExpression -- set -->get property
  async case0154(){
    const a= this.ctx.query.a;
    var sinkB= new SinkB();
    sinkB.setId(a);
    var res=sinkB.sink2(sinkB.getId());
    this.ctx.body = `Output: \n${res}`;
  }
}

module.exports = AstTaintCase;
