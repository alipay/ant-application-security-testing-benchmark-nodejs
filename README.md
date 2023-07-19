## 背景
本项目属于蚂蚁安全团队应用安全评价体系项目。本评价体系为Nodejs污点追踪引擎评价体系，用于评价对服务端的Node环境中运行的Javascript代码以及当前开发中常用的Typescript代码进行污点追踪的安全扫描引擎的能力。评价体系靶场选择了蚂蚁开源的Nodejs框架EggJS。
**注：本评价体系评价的是Nodejs静态安全分析引擎，而非全部的整个检测产品，即不包括使用引擎来建设的检测规则的评价。**

通过应用安全评价体系项目，希望可以衡量出应用安全产品的技术优劣，指引应用安全产品的发展方向，并可辅助用于商业化安全产品采购的技术选型。

项目主要包括两部分，一部分是分语言的评价体系，另一部分是基于评价体系的Benchmark。此项目一期首先发布的是Nodejs SAST引擎能力评价体系V1.0和Benchmark。如果您有任何好的想法，欢迎与我们团队联系。
[Java应用的xAST(SAST/IAST/DAST)评价体系传送门](https://github.com/alipay/ant-application-security-testing-benchmark)

## 项目结构
本评价体系benchmark选用开源框架Egg，项目结构如下

    |-- app
    |   |-- router.ts           //路由文件
    |   |-- common
    |   |-- controller          //路由
    |   |   |-- Accuracy        //准确度case
    |   |   |-- Completeness    //完整度case
    |   |-- decorator
    |   |-- generic
    |   |-- public
    |   |-- service
    |   |-- util
    |-- config
    |   |-- config.default.ts
    |   |-- config.local.ts
    |   |-- config.prod.ts
    |   |-- plugin.ts


## 评价体系Cases
靶场用例，详见文档[《评价项对应表》](https://github.com/alipay/ant-application-security-testing-benchmark-nodejs/wiki/case%E5%AF%B9%E5%BA%94%E8%A1%A8)，目前仍在持续更新中，您也可以评论留下您的宝贵意见或建议

配合靶场使用的source、sink点清单见文档[《source、sink清单》](https://github.com/alipay/ant-application-security-testing-benchmark-nodejs/wiki/%E9%9D%B6%E5%9C%BAsource%E3%80%81sink%E7%82%B9%E6%B8%85%E5%8D%95),各个产品使用时可以以自己的配置方式进行导入配置。


## 推荐使用的评价指标
### 基本指标：
* TP：被检出为漏洞的漏洞（是真正的漏洞，而且也被检出为漏洞）
* TN：没有被检出为漏洞的非漏洞（未检出的非漏洞）
* FP：被检出为漏洞的非漏洞（本来不是漏洞，但是被模型检出了）
* FN：没有被检出的漏洞（是真正的漏洞，但是没有被检出）
* 准确率=TP/(TP+FP) -- 可辅助观测检出的case中真实是漏洞的比例
* 召回率=TP/(TP+FN) -- 可辅助观测检出的漏洞case占全部漏洞的比例

### 增强指标：
* EM: 链路信息错误数量 -- 可辅助观测给运营时带来的误报情况（因为链路错误情况下产生的漏洞一定是误报）
* EL:  链路信息正确但是缺失内容数量 -- 可辅助观测自动化消费时可能产生的漏报（自动化消费链路可能因为链路信息缺失的引擎bug而无法产生漏洞）
* SR=TP+FP+EM+EL -- 上报链路总数，可辅助观测整体的运营压力 （如果链路数字远大于case数字，说明产生了非常多的冗余结果，会给运营增加额外负担）
* EMR = EM/SR -- 链路信息错误率，可辅助观测运营中的误报情况
* ELR = EL/SR -- 链路信息丢失率，可辅助观测自动化消费时可能产生的漏报

**注：可视引擎实际使用情况将链路中信息错误、不全（节点丢失、信息存在偏差等）均视作未检出该case（记入TN/FN）。这部分链路可能会提升误报率与遗漏率，给运营带来压力。**


## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Requirement

- Node.js >= 16.x
- Typescript >= 4.x


## 联系我们
钉钉

![扫码加入钉钉群](./floder-img/a.png)
