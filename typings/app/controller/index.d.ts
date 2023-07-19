// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportAccuracyObjectAccuracy = require('../../../app/controller/accuracy/objectAccuracy');
import ExportAccuracySourceSinkAccuracy = require('../../../app/controller/accuracy/sourceSinkAccuracy');
import ExportAccuracyUnReachable = require('../../../app/controller/accuracy/unReachable');
import ExportCompletenessAstTaintCase = require('../../../app/controller/completeness/astTaintCase');
import ExportCompletenessMixedCase from '../../../app/controller/completeness/mixedCase';
import ExportCompletenessSinkCase = require('../../../app/controller/completeness/sinkCase');
import ExportCompletenessSourceCase = require('../../../app/controller/completeness/sourceCase');
import ExportCompletenessSourceCaseAnother = require('../../../app/controller/completeness/sourceCaseAnother');
import ExportCompletenessSpecialCase = require('../../../app/controller/completeness/specialCase');
import ExportCompletenessTsCase from '../../../app/controller/completeness/tsCase';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    accuracy: {
      objectAccuracy: ExportAccuracyObjectAccuracy;
      sourceSinkAccuracy: ExportAccuracySourceSinkAccuracy;
      unReachable: ExportAccuracyUnReachable;
    }
    completeness: {
      astTaintCase: ExportCompletenessAstTaintCase;
      mixedCase: ExportCompletenessMixedCase;
      sinkCase: ExportCompletenessSinkCase;
      sourceCase: ExportCompletenessSourceCase;
      sourceCaseAnother: ExportCompletenessSourceCaseAnother;
      specialCase: ExportCompletenessSpecialCase;
      tsCase: ExportCompletenessTsCase;
    }
  }
}
