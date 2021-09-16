import React, { Component } from 'react'
import './Content2.css'
import img1 from './img/箭头 (4).png'
import img2 from './img/201541432334480 (1).jpg'

export default class Content2 extends Component {
    render() {
        return (
            <div>
                <div id="introduction_head">
                    <p id="black_font">公司简介</p>
                    <p id="blue_font">COMPANY PROFILE</p>
                    <img src={img1} alt="err"/>
                </div>
            <div id="introduction_part">
                <img src={img2} alt="err" />
                <div id="int_button_part">
                    <p>
                        重庆长实钢结构有限公司位于重庆市万州区沱口集装箱码头办公大楼三楼，注册资金1000万元。是一家专业从事钢结构设计，制作，施工安装于一体的高新技术企业，在万州经开区建有占地40余亩的生产基地，有包括火焰切割机，组立机，埋弧焊机，抛丸机等组成的重钢生产线和轻型钢生产线。公司拥有多套建构钢结构设计软件，胜任各种轻钢和重钢的设计，制作与安装任务。
                    </p>
                    <button className="breath animation">更多</button>
                </div>
            </div>
            </div>
        )
    }
}
