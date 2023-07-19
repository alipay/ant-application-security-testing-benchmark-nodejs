import { Service } from 'egg';
import { Context } from 'egg-di';

@Context
export default class SqlService extends Service {
  async connQuery(queryStr){
    const co = require('co')
    const record = await co(function * () { return yield connection.query(queryStr) })
    return record
  }
}
