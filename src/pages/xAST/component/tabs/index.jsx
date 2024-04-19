import React, { useState } from 'react';
import './index.less';

const CommunityTabs = () => {
    const [activeTab, setActiveTab] = useState('PMC（筹）');

    const tabs = [
        { name: 'PMC（筹）', content: 'Content for Tab 1' },
        { name: 'Develop Group（开发者社区）', content: 'Content for Tab 2' },
        { name: 'User Group（用户社区）', content: 'Content for Tab 3' },
        { name: '社区日常工作机制', content: 'Content for Tab 4' },
    ];

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                {tabs.map((tab) => (
                    <div
                        key={tab.name}
                        className={`tab ${activeTab === tab.name ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                {tabs.filter((tab) => tab.name === activeTab)[0].content}
            </div>
        </div>
    );
};

export default CommunityTabs;
