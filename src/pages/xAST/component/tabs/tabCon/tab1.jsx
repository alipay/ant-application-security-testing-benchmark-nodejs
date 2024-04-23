import React from 'react';
import "./tabCon.less"


const Tab1 = () => {
    return (
        <>
            <div className=''>
                <div className="tab1-container">
                    <div className='tab1-module'>
                        <div className='tab1-title'>PMC（筹）</div>
                        <div className='tab1-content'>
                            <div className='text1'>PMC是xAST评价体系开源社区日常的技术管理机构，负责社区相关各类重大事项的决议</div>
                            <div className='littleHeadLine'><img src="/images/04社区组织架构\职责.png" /> 职责：</div>
                            <div className='text1'>负责roadmap 制定与社区相关的重大决议，包括修改社区章程和组织设置等</div>
                            <div className='text1'>定期组织社区例会并公开社区相关事项决议</div>
                            <div className='text1'>社区荣誉评选（如评选优秀贡献者等）</div>
                            <div className='text1'>促进与开源组织和其他开源项目间的合作</div>
                            <div style={{ fontSize: "14px", color: "rgba(0,0,0,0.45)" }}>如何成为PMC</div>
                            <div className='text1'>目前PMC处于筹备状态，待后续项目成熟后将成立正式的PMC</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const Tab2 = () => {
    return (
        <>
            <div style={{ fontWeight: "400", color: "rgba(0, 0, 0, 0.85)", marginTop: '29px', marginBottom: "12px" }}>考虑到xAST评价体系作为技术标准的特殊性，任何涉及评价项和代码的提交都不允许单个用户的独立操作。</div>
            <div className="tab2-container">
                <div className="tab2-module">
                    <div className="tab2-title">维护者（Maintainers）</div>
                    <div className="tab2-content">
                        <div className='littleHeadLine'><img src="/images/04社区组织架构\职责.png" /> 职责：</div>
                        <div className='text1'>长期关注项目发展，积极参与项目建设</div>
                        <div className='text1'>吸纳并发展Active Contributors 加入Maintainers</div>
                        <div className='littleHeadLine'><img src="/images/04社区组织架构\权益.png" /> 权益：</div>
                        <div className='text1'>评价项和Benchmark修改的投票权，一人一票，超</div>
                        <div className='textWithout'> 过1/2 Maintainers同意的才可以最终合并</div>
                        <div className='text1'> 提名Active Contributors成为Maintainers
                        </div>
                        <div className='howTo'>如何成为Maintainers，需要同时满足以下条件：</div>
                        <div className='text1'>成为Active Contributors至少2个月以上</div>
                        <div className='text1'>至少2个重大PR被项目合并</div>
                        <div className='text1'>至少一位Maintainers提名，所有Maintainers投</div>
                        <div className='textWithout'>票，获得超过1/2 Maintainers的同意</div>
                    </div>
                </div>
                <div className="tab2-module">
                    <div className="tab2-title">活跃贡献者（Active Contributors）</div>
                    <div className="tab2-content">
                        <div className='littleHeadLine'><img src="/images/04社区组织架构\职责.png" /> 职责：</div>
                        <div className='text1'>参与社区咨询支持</div>
                        <div className='text1'>积极响应社区指派的 Issue 及 PR</div>
                        <div className='text1'>帮忙回复 issue/pr，triage（把 issue 分配给对应模</div>
                        <div className='textWithout'>块的负责人</div>
                        <div className='littleHeadLine'><img src="/images/04社区组织架构\权益.png" /> 权益：</div>
                        <div className='text1'> Triage，操作issue 和 pr，例如打 label、分配</div>
                        <div className='text1'>可参与社区荣誉评选</div>
                        <div className='howTo'>如何成为Active Contributors，需要同时满足以下条件：</div>
                        <div className='text1'>成为Active Contributors至少2个月以上</div>
                        <div className='textWithout'>至少一个重大PR（由Maintainers投票时确认，一般</div>
                        <div className='text1'>至少贡献10个case以上）被项目合并</div>
                        <div className='text1'> 有意愿一起维护社区</div>
                    </div>
                </div>
                <div className="tab2-module">
                    <div className="tab2-title">贡献者（ Contributors）</div>
                    <div className="tab2-content" style={{ paddingTop: "12px" }}>
                        <div className='littleHeadLine'><img src="/images/04社区组织架构\职责.png" /> 职责：</div>
                        <div className='text1'>提交有价值的 issue</div>
                        <div className='text1'>帮助改进文档</div>
                        <div className='littleHeadLine'><img src="/images/04社区组织架构\权益.png" /> 权益：</div>
                        <div className='text1'> 提交PR/issue </div>
                        <div className='howTo'>如何成为Contributors：</div>
                        <div className='text1'>至少提交一个有效PR或者issue</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Tab3 = () => {
    return (
        <div className="tab3-container">
            <div className="tab3-module">
                <div className="tab3-title">布道师（Community Leader）</div>
                <div className="tab3-content">
                    <div className='littleHeadLine'><img src="/images/04社区组织架构\职责.png" /> 职责：</div>
                    <div className='text1'>主动对外分享项目的理念和测评结果</div>
                    <div className='text1'>积极响应社区指派的文章或分享工作</div>
                    <div className='text1'>吸纳并发展Ambassador加入Community Leader</div>
                    <div className='littleHeadLine'><img src="/images/04社区组织架构\权益.png" /> 权益：</div>
                    <div className='text1'>行业年度测评报告的署名权（如有参与）</div>
                    <div className='text1'>优先提供PR渠道资源</div>
                    <div className='howTo'>如何成为Community Leader，需要同时满足以下条件：</div>
                    <div className='text1'>成为Ambassador超过 2 个月 </div>
                    <div className='text1'>基于评价体系进行测评，对外公开发布优质测评结果（经PMC投票评选确认）1篇以 </div>
                    <div className='textWithout'>上或者代表社区参与大会宣讲/Meetup分享 1 次以上</div>
                    <div className='text1'>至少一位Community Leader提名，由Community Leader投票，获得超过1/2</div>
                    <div className='textWithout'>Community Leader的同意</div>
                </div>
            </div>
            <div className="tab3-module">
                <div className="tab3-title">资深用户（Ambassador）</div>
                <div className="tab3-content">
                    <div className='littleHeadLine'><img src="/images/04社区组织架构\职责.png" /> 职责：</div>
                    <div className='text1'>参与安全工具测评 </div>
                    <div className='text1'>参与社区推广活动</div>
                    <div className='text1'>积极响应社区内用户提问</div>
                    <div className='littleHeadLine'><img src="/images/04社区组织架构\权益.png" /> 权益：</div>
                    <div className='text1'> 代表社区参与大会宣讲、Meetup分享</div>
                    <div className='text1'>可参与社区荣誉评选</div>
                    <div className='howTo'>如何成为Ambassador，满足以下任一条件：</div>
                    <div className='text1'>基于评价体系进行测评，并对外公开发布测评报告1篇以上</div>
                    <div className='text1'>在社区活跃超过 1 个月，累计有效答疑超过 10 次</div>
                </div>
            </div>
        </div>
    )
}


const Tab4 = () => {
    return (
        <>
            <div className='tab4Container'>
                <div className="textArea">
                    <div>
                        <div style={{ fontSize: "16px", color: "rgba(0,0,0,0.45)", lineHeight: "44px" }}>PMC（筹）根据项目进展，定期组织社区会议，目前默认一个月一次</div>
                        <div className='text4'> 社区会议所有感兴趣的社区成员都可以参加</div>
                        <div className='text4'>所有事项的决策都在社区会议中公开进行，但PR合并、优秀评测报告等相关投票只能由有投票权的人参与</div>
                        <div style={{ fontSize: "16px", color: "rgba(0,0,0,0.45)", lineHeight: "44px" }}> PMC（筹）将不定期组织各类社区活动 </div>
                        <div style={{ fontSize: "16px", color: "rgba(0,0,0,0.45)", lineHeight: "44px" }}>PMC（筹）将以社区名义发布安</div>
                    </div>
                </div>
            </div>
        </>
    )
}




export { Tab1, Tab2, Tab3, Tab4 }