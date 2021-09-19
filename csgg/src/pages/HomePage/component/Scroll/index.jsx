import React from 'react'
import './index.css'
import p1 from './pictures/p1bishangdalu.png'
import p2 from './pictures/pic2wanzhounongjiale.png'
import p3 from './pictures/p3wanzhoushidai.png'
import p4 from './pictures/p4biesu.jpg'
import p5 from './pictures/p5huanbao.jpg'
import p6 from './pictures/p6chejian.jpg'
import p7 from './pictures/p7bangonglou.jpg'
import p8 from './pictures/p8fuhuajidi.jpg'
import p9 from './pictures/p9dakuadu.jpg'
import p10 from './pictures/p10钢构dalou.jpg'

export default function Pic() {
    return (
        <div class="window">

         <div class="images_list">
            
            <img src={p1} alt=""/>
            <img src={p2} alt=""/>
            <img src={p3} alt=""/>
            <img src={p4} alt=""/>
            <img src={p5} alt=""/>
            <img src={p6} alt=""/>
            <img src={p7} alt=""/>
            <img src={p8} alt=""/>
            <img src={p9} alt=""/>
            <img src={p10} alt=""/>
          
        </div>
    
    </div>
    
    )
}