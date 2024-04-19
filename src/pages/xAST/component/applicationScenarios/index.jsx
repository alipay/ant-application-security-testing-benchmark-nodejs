import { Divider, Button } from "antd"
import React, { useState } from "react"
import styles from "./index.less"
import "./index.less"
import CommunityTabs from "../tabs/index"

const Appscenrios = () => {

    const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

    const [canyuImgURl1, setCanyuImgURl1] = useState("/images/05参与贡献/常规样式/1.png")
    const [canyuImgURl2, setCanyuImgURl2] = useState("/images/05参与贡献/常规样式/2.png")
    const [canyuImgURl3, setCanyuImgURl3] = useState("/images/05参与贡献/常规样式/3.png")


    // 处理鼠标划入事件
    const handleMouseEnter = (index) => {
        if (index == 1) {
            setCanyuImgURl1("/images/05参与贡献/悬停样式/1.png")
        }
        if (index == 2) {
            setCanyuImgURl2("/images/05参与贡献/悬停样式/2.png")
        }
        if (index == 3) {
            setCanyuImgURl3("/images/05参与贡献/悬停样式/3.png")
        }
    };

    // 处理鼠标划出事件
    const handleMouseLeave = (index) => {
        console.log("离开", index);
        if (index == 1) {
            setCanyuImgURl1("/images/05参与贡献/常规样式/1.png")
        }
        if (index == 2) {
            setCanyuImgURl2("/images/05参与贡献/常规样式/2.png")
        }
        if (index == 3) {
            setCanyuImgURl3("/images/05参与贡献/常规样式/3.png")
        }
    };





    return (
        <>
            {/* <div>
                <img src="/images/01头部/banner.png" alt="banner" />

            </div> */}
            <div style={{ backgroundColor: "#1E2639", height: "488px", color: "#fff", }}>
                <div className={styles.bannerContainer}>
                    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                        <div className={styles.bannerTextSection}>
                            <h1 className={styles.bannerHeading}> <span class="blueCap">A</span>pplication <span class="blueCap">S</span>ecurity <span class="blueCap">E</span>esting
                                <span class="blueCap">E</span>valuation <span class="blueCap">C</span>riteria</h1>
                            <p className={styles.bannerSubHeading}>
                                针对应用安全测试领域（AST）缺乏有效衡量技术能力标准的业界痛点，
                                蚂蚁安全团队联合浙江大学网络空间安全学院的20余位专家学者，
                                共同设计了xAST评价体系及其测试样本套件Benchmark。
                            </p>
                            <Button type="primary" className={styles.bannerButton}>Github {">"} </Button>
                        </div>

                    </div>


                    <div className={styles.bannerImageSection}>
                        <img src="/images/01头部/bannerFinal.png" alt="banner" />
                    </div>
                </div>
            </div>

            <div style={{ width: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginTop: "40px" }}>
                    <div class="scene-text">应用场景</div>
                </div>
                <div >
                    <div className={styles.appContainer}>
                        <div className={styles.appModule} style={{ backgroundColor: "#FFFAEA" }}>
                            <div className={styles.appImageSection}>
                                <img src="/images/02应用场景/01.png" alt="描述1" />
                            </div>
                            <div className={styles.appTextSection}>
                                <p>应用安全测试技术衡量</p>
                            </div>
                        </div>
                        <div className={styles.appModule} style={{ backgroundColor: "#F0F4FE" }}>
                            <div className={styles.appImageSection}>
                                <img src="/images/02应用场景/02.png" alt="描述2" />
                            </div>
                            <div className={styles.appTextSection}>
                                <p>指引应用安全测试技术发展方向</p>
                            </div>
                        </div>
                        <div className={styles.appModule} style={{ backgroundColor: "#E9FDFC" }}>
                            <div className={styles.appImageSection}>
                                <img src="/images/02应用场景/03.png" alt="描述3" />
                            </div>
                            <div className={styles.appTextSection}>
                                <p>辅助企业客户产品选型</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div>

                </div>
            </div>
            <div className="tecCard">
                <div style={{ textAlign: 'center' }}>
                    <div class="scene-text2"> 技术名片</div>
                </div>
                <div className={styles.tecContainer}>
                    <div className={styles.tecModule}>
                        <div className={styles.tecImageSection}>
                            <img src="/images/03技术名片/01.png" alt="技术1" />
                        </div>
                        <div className={styles.tecTextSection}>
                            <p>业界首个评价体系驱动式
                                Benchmark</p>
                        </div>
                    </div>
                    <div className={styles.tecModule}>
                        <div className={styles.tecImageSection}>
                            <img src="/images/03技术名片/02.png" alt="技术2" />
                        </div>
                        <div className={styles.tecTextSection}>
                            <p>业界首个面向工具视角
                                Benchmark </p>
                        </div>
                    </div>
                    <div className={styles.tecModule}>
                        <div className={styles.tecImageSection}>
                            <img src="/images/03技术名片/03.png" alt="技术3" />
                        </div>
                        <div className={styles.tecTextSection}>
                            <p>评价体系分层设计</p>
                        </div>
                    </div>
                    <div className={styles.tecModule}>
                        <div className={styles.tecImageSection}>
                            <img src="/images/03技术名片/04.png" alt="技术4" />
                        </div>
                        <div className={styles.tecTextSection}>
                            <p>“体验报告”式结果，
                                细粒度可解释</p>
                        </div>
                    </div>
                    <div className={styles.tecModule}>
                        <div className={styles.tecImageSection}>
                            <img src="/images/03技术名片/05.png" alt="技术5" />
                        </div>
                        <div className={styles.tecTextSection}>
                            <p>业界Benchmark交叉验证，
                                确保完整性 </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: "40px" }}>
                <div class="scene-text">社区组织架构</div>
            </div>
            <div class="communityIamge">
                <img src="/images/04社区组织架构/map.png" alt="" />
            </div>
            <div class="communityTab"   >
                <div className="communityTabText">PMC（筹）</div>
                <div className="communityTabText">Develop Group（开发者社区）</div>
                <div className="communityTabText">User Group（用户社区）</div>
                {/* <div>Working Mechanism（社区日常工作机制）</div> */}
                <div>社区日常工作机制</div>
            </div>

            <CommunityTabs />

            <div className="canyuMap">
                <div style={{ marginTop: "60px" }}>
                    <div style={{ textAlign: 'center' }}>
                        <div class="scene-text2">参与贡献</div>
                    </div>
                </div>
                <div className={styles.parContainer}>
                    <div class="canyu-container" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                        <img src={canyuImgURl1} alt="示例图片" class="canyu-image" />
                        <span class="canyu-text">参与评测</span>
                    </div>
                    <div class="canyu-container" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                        <img src={canyuImgURl2} alt="示例图片" class="canyu-image" />
                        <span class="canyu-text">参与代码贡献</span>
                    </div>
                    <div class="canyu-container" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)} >
                        <img src={canyuImgURl3} alt="示例图片" class="canyu-image" />
                        <span class="canyu-text">行为准则</span>
                    </div>
                </div>
            </div>


            {/* <div style={{ width: "800px", height: "140px", margin: "0 auto" }}> */}
            <div style={{ textAlign: 'center', marginTop: "40px" }}>
                <div class="scene-text">Maintainers</div>
            </div>
            <div class="avatar-container">
                <img src="/images/08头像/1.png" alt="Circle Avatar" class="avatar-image" />
                <img src="/images/08头像/1.png" alt="Circle Avatar" class="avatar-image" />
            </div>
            {/* </div> */}
            <div style={{
                backgroundImage: 'url("/images/huobanBGC.png")',
                backgroundSize: "contain"
            }}>
                <div style={{ textAlign: 'center', marginTop: "40px" }}>
                    <div class="scene-text">生态伙伴</div>
                </div>
                <div style={{ textAlign: 'center', marginTop: "18px" }}>排名不分先后</div>

                <div class="huoban-container">
                    <div class="huoban-row">
                        <img src="/images/06生态伙伴/中国评测.png" alt="Image 1" class="huoban-image" />
                        <img src="/images/06生态伙伴/浙江大学.png" alt="Image 2" class="huoban-image" />
                        <img src="/images/06生态伙伴/开放.png" alt="Image 3" class="huoban-image" />
                    </div>
                    <div class="huoban-row">
                        <img src="/images/06生态伙伴/阿里巴巴.png" alt="Image 7" class="huoban-image" />
                        <img src="/images/06生态伙伴/科大.png" alt="Image 8" class="huoban-image" />
                        <img src="/images/06生态伙伴/水木.png" alt="Image 9" class="huoban-image" />
                        <img src="/images/06生态伙伴/蚂蚁.png" alt="Image 10" class="huoban-image" />
                    </div>
                    <div class="huoban-row">
                        <img src="/images/06生态伙伴/斗象.png" alt="Image 4" class="huoban-image" />
                        <img src="/images/06生态伙伴/统信.png" alt="Image 5" class="huoban-image" />
                    </div>
                </div>


            </div>
            <div class="footer">
                <div class="footer-container">
                    <div class="footer-left">
                        <div class="footer-logo">
                            <img src="/images/07底部/bottomLogo.png" alt="Logo" />
                        </div>
                        <div class="footer-email">
                            <img src="/images/07底部/emailLogo.png" alt="Email Icon" class="footer-email-icon" />
                            <span class="footer-email-address">xast-contact@service.alipay.com</span>
                        </div>
                        <div class="footer-note">
                            社区介绍  <Divider type="vertical" style={{ backgroundColor: "#fff" }} /> 社区活动  <Divider type="vertical" style={{ backgroundColor: "#fff" }} /> 评测报告
                        </div>
                    </div>
                    <div class="footer-right">
                        <img src="/images/07底部/公众号.png" alt="QR Code 1" class="footer-qrcode" />
                        <img src="/images/07底部/交流群.png" alt="QR Code 2" class="footer-qrcode" />
                    </div>
                </div>
            </div>

        </>
    )
}


export { Appscenrios }