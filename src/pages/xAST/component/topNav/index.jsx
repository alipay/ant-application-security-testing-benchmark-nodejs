import React, { useState } from 'react';
import { Menu } from 'antd';
import styles from './index.less'


const TopNav = () => {

    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: '社区介绍',
            key: 'mail',
        },
        {
            label: '社区活动',
            key: 'community1',
        },

        {
            label: "评测报告",
            // (
            //     <a href="#" target="_blank" rel="noopener noreferrer">
            //         评测报告
            //     </a>
            // ),
            key: 'report',
        },
    ];

    return (
        <div className='allContainer'>
            <div style={{ height: "60px", backgroundColor: "#e7f1fd" }}>
                <span className='topLogo'> <img src="" />  </span> <Menu style={{ backgroundColor: "transport" }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </div>
        </div>
    )
}


export default TopNav;