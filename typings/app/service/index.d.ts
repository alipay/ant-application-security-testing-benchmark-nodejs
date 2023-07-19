// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCmdUtil = require('../../../app/service/cmdUtil');
import ExportSinkA = require('../../../app/service/sinkA');
import ExportSinkB = require('../../../app/service/sinkB');
import ExportSinkC from '../../../app/service/sinkC';
import ExportComplexServiceExecHttp = require('../../../app/service/complexService/execHttp');
import ExportComplexServiceExecHttp2 = require('../../../app/service/complexService/execHttp2');
import ExportComplexServiceSqlService = require('../../../app/service/complexService/sqlService');

declare module 'egg' {
  interface IService {
    cmdUtil: AutoInstanceType<typeof ExportCmdUtil>;
    sinkA: AutoInstanceType<typeof ExportSinkA>;
    sinkB: AutoInstanceType<typeof ExportSinkB>;
    sinkC: AutoInstanceType<typeof ExportSinkC>;
    complexService: {
      execHttp: AutoInstanceType<typeof ExportComplexServiceExecHttp>;
      execHttp2: AutoInstanceType<typeof ExportComplexServiceExecHttp2>;
      sqlService: AutoInstanceType<typeof ExportComplexServiceSqlService>;
    }
  }
}
