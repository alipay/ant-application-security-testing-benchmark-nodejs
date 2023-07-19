const Service = require('egg').Service;

class SinkA extends Service {
  async sink1(param){
    return param;
  }
  async sink13(param){
    return param.id;
  }
}

module.exports = SinkA;
