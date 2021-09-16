import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import logo from './img/logo.png'
export default class Head extends Component {
    // 顶部固定半透明导航栏
    render() {
        return (
            <div>
                <div id="head_background"></div>
                    <header>
                        <div id="left_logo">
                            <img src={logo} alt="err" id="logo"/>
                            <span id="title">重庆长实钢结构有限公司</span>
                        </div>
                        <div id="links">
                            {/* 编写路由 */}
                        <span className="head_font"><Link to="/HomePage">网站首页</Link></span>
                        <span className="head_font"><Link to="/Engineering_Example">工程实例</Link></span>
                        <span className="head_font"><Link to="/Company_Profile">公司简介</Link></span>
                        <span className="head_font"><Link to="/Trends">公司动态</Link></span>
                        <span className="head_font"><Link to="/Business">主营业务</Link></span>
                        <span className="head_font"><Link to="/Contact">联系我们</Link></span>
                        </div>
                    </header>
            </div>
        )
    }
}
