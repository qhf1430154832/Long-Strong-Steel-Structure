import React, { Component } from 'react'
import './Content1.css'
import jiantou from './photo/jiantou.png'
export default class Content2 extends Component {
    render() {
        return (
            <div className="test">
                <div ><h2 id='title-p'>工程实例</h2></div>
                <div id='title-e'>ENGINE EXAMPLE</div>
                <img src={jiantou} id='jian-tou' alt="err"></img>
                <div id='photo-show'>
                    <div></div><div></div><div></div>
                    <span>璧山大路兔管家标准厂房</span><span>万州高峰农家乐</span><span>原材料堆码厂房</span>
                    <div></div><div></div><div></div>
                    <span>万州白羊镇柠檬基地</span><span>万州时代印象钢结构连廊</span><span>万州映水农业办公室</span>
                </div>
            </div>
        )
    }
}

