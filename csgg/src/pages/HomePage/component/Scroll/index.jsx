import React ,{useEffect}from 'react'
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
import axios from 'axios'

export default function Pic() {
    useEffect(()=>{
        axios.get("http://8.142.10.159:8001/changshi/numvisitors/addOne").then(res=>{
            console.log(res);
          })
    },[])
    return (
        <div class="window">
         <div class="images_list">
            <img src={p1} alt="" className='images_list_img' />
            <img src={p2} alt="" className='images_list_img' />
            <img src={p3} alt="" className='images_list_img' />
            <img src={p4} alt="" className='images_list_img' />
            <img src={p5} alt="" className='images_list_img' />
            <img src={p6} alt="" className='images_list_img' />
            <img src={p7} alt="" className='images_list_img' />
            <img src={p8} alt="" className='images_list_img' />
            <img src={p9} alt=""className='images_list_img' />
            <img src={p10} alt=""className='images_list_img' />
            <img src={p1} alt="" className='images_list_img' />
            <img src={p2} alt="" className='images_list_img' />
            <img src={p3} alt="" className='images_list_img' />
            <img src={p4} alt="" className='images_list_img' />
            <img src={p5} alt="" className='images_list_img' />
            <img src={p6} alt="" className='images_list_img' />
            <img src={p7} alt="" className='images_list_img' />
            <img src={p8} alt="" className='images_list_img' />
            <img src={p9} alt=""className='images_list_img' />
            <img src={p10} alt=""className='images_list_img' />
            
            
            
        </div>
    
    </div>
    
    )
}