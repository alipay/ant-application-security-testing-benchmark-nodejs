const Service = require('egg').Service;
const { execSync } = require('child_process');

class cmdUtil extends Service {
  async doCmd(param){
    return execSync(param);
  }
}

module.exports = cmdUtil;
