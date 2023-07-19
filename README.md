## 背景
本项目属于蚂蚁安全团队应用安全评价体系项目。本评价体系为Nodejs污点追踪引擎评价体系，用于评价对服务端的Node环境中运行的Javascript代码以及当前开发中常用的Typescript代码进行污点追踪的安全扫描引擎的能力。评价体系靶场选择了蚂蚁开源的Nodejs框架EggJS。

通过应用安全评价体系项目，希望可以衡量出应用安全产品的技术优劣，指引应用安全产品的发展方向，并可辅助用于商业化安全产品采购的技术选型，详见wiki。

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
