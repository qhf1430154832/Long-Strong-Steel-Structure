import React, { Component } from 'react'
import './Footer.css'
import {Link}from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
          
            <div id='warp'>
               <div id='item1'>
                 <div className='top'>
                 <Link to='../../../Trends' id='trend'>
                 <div className='font1'>公司动态</div>
                </Link>
                  <div className='font2'> TRENDS</div>

                 </div>
                 <div className='top'>
                 <Link to='../../../Business' id='trend'>
                 <div className='font1'> 主营业务</div>
                 </Link>
                  <div className='font2'>BUSINESS</div>
                 </div>
                 <div className='top'>
                 <Link to='../../../Contact' id='trend'>
                 <div className='font1'> 联系我们</div>
                 </Link>
                  <div className='font2'>CONTACT</div>
                 </div>

               </div>
               {/* 第一个大盒子 */}
             
               <div id='item2'>
               <div id='content1'></div>
               {/* 第一张图片 */}
                 <div id='content2'></div>
                 {/* 第二张图片 */}
                 <div id='content3'></div>
                 {/* 第三张图片 */}

               </div>
               {/* 第二个大盒子 */}
               
               <div id='item3'>
               <Link to='../../../Trends' id='trend'>
                 <div id='bot1'>
                  <div className='ifm'>
                  
                  <div className='xx'>重庆市大力发展装配式建筑</div>
                  {/* 信息 */}
                  <div className='rq'>2018-02-23</div>
                  {/* 日期 */}
                  </div>
                  {/* 第一条信息 */}
                  <div className='ifm'>
                  <div className='xx'> 宣汉急控中心装配式建...</div>
                  {/* 信息 */}
                  <div className='rq'> 2018-02-23</div>
                  {/* 日期 */}
                  

                  </div>
                    {/* 第二条信息 */}
                  <div className='ifm'>
                  <div className='xx'>公司举行2017年总结暨2018...</div>
                  {/* 信息 */}
                  <div className='rq'>2018-02-09</div>
                  {/* 日期 */}
                  </div>
                    {/* 第三条信息 */}
                  <div className='ifm'>
                  <div className='xx'> 公司举行2017年新春团拜会</div>
                  {/* 信息 */}
                  <div className='rq'>2017-01-24</div>
                  {/* 日期 */}
                  </div>
                    {/* 第四条信息 */}


                 </div>
                 </Link >
                 {/* 公司动态内容 */}
                 <Link to='../../../Business' id='trend2'>
                 <div id='bot2'>
                
                  <div className='ifm'>
                  钢结构厂房设计建设
                  </div>
                   {/* 第一条信息 */}
                  
                  <div  className='ifm'>
                  各种钢结构型材设计加工
                  </div>
                   {/* 第二条信息 */}
                  <div className='ifm'>
                  活动板房设计制作安装
                  </div>
                   {/* 第三条信息 */}
                  <div className='ifm'>
                  土建等基础设施建设
                  </div>
                   {/* 第四条信息 */}
                 </div>
                </Link>
                 {/* 主营业务内容 */}
                 <Link to='../../../Contact' id='trend2'>
                 <div id='bot3'>
                 <div id='cmp'>
                 重庆长实钢结构有限公司
                 </div>
                 {/* 公司名称 */}
                 <div className='cot'>
                   <div>联系人：邓经理</div>
                   <div>联系方式：18680900078</div>
                 </div>
                 {/* 第一行联系人名称 */}
                 <div className='cot'>
                   <div>联系人：杨经理</div>
                   <div>联系方式：15696633268</div>
                 </div>
                 {/* 第二行联系人名称 */}
                 <div className='cot'>邮箱：1099028414@qq.com</div>
                 {/* 邮箱信息 */}
                 <div className='cot'>地址：重庆市万州区江南大道2453号</div>
                 {/* 地址信息 */}

                
                 </div>
                 
                 {/* 联系我们内容 */}
                 </Link>
                 
               </div>
               
               {/* 第三个大盒子 */}
              
                
            </div>
            
        )
    }
}
