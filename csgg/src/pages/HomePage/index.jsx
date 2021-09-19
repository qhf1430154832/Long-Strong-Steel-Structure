import React, { Component } from 'react'
import Content1 from './component/Content1'
import Content2 from './component/Content2'
import Content3 from './component/Content3'
import Pic from './component/Scroll'
import './HomePage.css'
/**
 * 网站首页
 */
export default class HomePage extends Component {
    render() {
        return (
            <div>
                {/* 工程实例 */}
                <Content1/>
                <div id="empty"></div>
                {/* 公司简介 */}
                <Content2/>
                {/* 底部三栏 */}
                <Content3/>
                <Pic />
            </div>
        )
    }
}