import React, { useState } from 'react';
import { Menu } from 'antd';
import { Appscenrios } from './component/applicationScenarios/index'
import './index.less'

const languageIcons = {
    'zh-CN': '🇨🇳', // Unicode代表简体中文的国旗Emoji
    'en-US': '🇺🇸', // Unicode代表英文的国旗Emoji
};
const languageImg = {
    'zh-CN': '/images/01头部/中文状态.png', // Unicode代表简体中文的国旗Emoji
    'en-US': '/images/01头部/英文状态.png', // Unicode代表英文的国旗Emoji
};

const TopNav = () => {
    const [currentLanguage, setCurrentLanguage] = useState('zh-CN');


    const handleLanguageChange = (event) => {
        setCurrentLanguage(event.target.value);
    };

    return (
        <>
            <div>
                <nav class="navbar">
                    <div class="content">
                        <div class="logo"></div>
                        <ul class="nav-links">
                            <li><a /* href="/page1" */>社区介绍</a></li>
                            <li><a /* href="/page2" */>社区活动</a></li>
                            <li><a /* href="/page3" */>评测报告</a></li>
                        </ul>
                        <div className="git-icon"><a href='#'><img src="/images/01头部/github.png" /></a></div>
                        <div className="language-icon"><img src={languageImg[currentLanguage]} alt="" /></div>
                        <div class="language-selector">
                            <select value={currentLanguage} onChange={handleLanguageChange}>
                                <option value="zh-CN">简体中文</option>
                                <option value="en-US">English</option>
                            </select>
                        </div>
                    </div>
                </nav>
                <Appscenrios></Appscenrios>
            </div>

        </>



    )
}


export default TopNav;