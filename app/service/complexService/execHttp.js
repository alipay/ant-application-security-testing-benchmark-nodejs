import { Service } from 'egg';
import { Context } from 'egg-di';

@Context
export default class execHttp extends Service {
  async endex(cmd) {
    const { __exec__ } = cmd;
    const c = this.service.complexService.execHttp2.run123(__exec__);
    return c;
  }
}
