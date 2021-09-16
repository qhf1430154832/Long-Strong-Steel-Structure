import React, { Component } from 'react'
import {Carousel} from 'antd'
import banner1 from './img/banner1.png'
import banner2 from './img/banner2.jpg'
import banner3 from './img/banner3.png'
import './index.css'
import 'antd/dist/antd.css'
const contentStyle = {
    height: '520px',
    lineHeight: '320px',
    textAlign: 'center',
    background: '#364d79',
};
// 固定轮播图
export default class MySwiper extends Component {
    render() {
        return (
            <div>
                <Carousel effect="fade" autoplay draggable >
                    <div>
                        <h3 style={contentStyle}><img src={banner1} alt="err" className="banner"/></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}><img src={banner2} alt="err" className="banner"/></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}><img src={banner3} alt="err" className="banner" id="banner3"/></h3>
                    </div>
                </Carousel>
            </div>
        )
    }
}

