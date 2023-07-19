import { Service } from 'egg';
import { Context } from 'egg-di';

@Context
export default class execHttp2 extends Service {
  async run123(params) {
    const res = await this.ctx.eval(params);
    return res;
  }
}
