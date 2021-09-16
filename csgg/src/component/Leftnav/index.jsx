import React, { Component } from 'react'
import './index.css'
export default class Leftnav extends Component {
    render() {
        return (
            <div id='warp1'>
             {/* 企业文化板块内容 */}
                <div id='bq1'>
                    {/* 渐变背景板块 */}
                    <div className='Gradual'>企业文化</div>
                    {/* 内容板块 */}
                    <div className='Leftnav_content'>价值观念：诚廉、创新、卓越、和谐</div>
                    <div className='Leftnav_content'>企业精神：团结、务实、高效、奋进</div>
                    <div className='Leftnav_content'>管理理念：严格、规范、高效、精细</div>
                    <div className='Leftnav_content'>质量理念：合作、友谊、双赢、发展</div>
                    <div className='Leftnav_content'>管理理念：一丝不苟、精益求精</div>
                    <div className='Leftnav_content'>安全理念：安全第一、科学防范</div>
                </div>
                {/* 联系我们板块内容 */}
                    <div id='bq2'>
                    {/* 渐变背景板块 */}
                    <div className='Gradual'>联系我们</div>
                    {/* 内容板块 */}
                    <div className='content'>邓经理:18680900078</div>
                    <div className='content'>杨经理:15696633268</div>
                    <div className='content'>Email:1099028414@qq.com</div>


                </div>
             
            </div>
        )
    }
}
