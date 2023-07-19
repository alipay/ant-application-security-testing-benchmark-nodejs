const Controller = require('egg').Controller;
import {SinkC} from "../../service/sinkC"
const serialize = require('node-serialize');
import {unserialize as ns} from 'node-serialize'
import {unserialize}  from 'node-serialize'
import * as nsu  from 'node-serialize'

class SinkCase extends Controller{

  //sink parameter -- A
  async case0157A(){
    const foo = this.ctx.query.a;
    let sinkC = new SinkC();
    const res = sinkC.sink4("/aaa",foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //sink parameter -- B
  async case0157B(){
    const foo = this.ctx.query.a;
    let sinkC = new SinkC();
    const res = sinkC.sink4(foo,"www.aaa.com");
    this.ctx.body = `Output: \n${res}`;
  }

  //sink directly
  async case0158(){
    const foo = this.ctx.query.a;
    let sinkC = new SinkC();
    const res = sinkC.sink3(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //sink object reassign
  async case0159(){
    const foo = this.ctx.query.a;
    let sinkC = new SinkC();
    const sinkTemp = sinkC;
    const res = sinkTemp.sink3(foo);
    this.ctx.body = `Output: \n${res}`;
  }

  //sink object require
  async case0160(){
    const payload = this.ctx.query.a;
    serialize.unserialize(payload);
    this.ctx.body = "Output: unserialize sucess";
  }

  //sink object import as
  async case0161(){
    const payload = this.ctx.query.a;
    ns(payload);
    this.ctx.body = "Output: unserialize sucess";
  }

  //sink object import
  async case0162(){
    const payload = this.ctx.query.a;
    unserialize(payload);
    this.ctx.body = "Output: unserialize sucess";
  }

  //sink object import * as
  async case0163(){
    const payload = this.ctx.query.a;
    nsu.unserialize(payload);
    this.ctx.body = "Output: unserialize sucess";
  }

  //sink -- Fuzzy matching -- *.ctx.curl
  async case0164(){
    const url = this.ctx.query.a;
    const result = await this.ctx.curl(url, {
      // 自动解析 JSON response
      dataType: 'json',
      // 3 秒超时
      timeout: 3000,
    });
  }


}

module.exports = SinkCase;
