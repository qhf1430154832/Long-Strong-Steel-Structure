import React, { Component } from 'react'
import Edit from '../../pages/admin/products/Edit'
import { Link } from 'react-router-dom'
import './index.css'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <div id="FriendlyLinks">
                    <div id="fl_former">
                        <p>友情链接：</p>
                        <div id="Footer_links">
                            <p>重庆山仁钢构</p>
                            <p>重庆惠仁建筑劳务</p>
                            <p>重庆凤轩农业</p>
                            <p>重庆建工</p>
                            <p>重庆路桥</p>
                            <Link to='/login' className='admin'>管理登入</Link>
                           
                        </div>
                      
                      
                    </div>
                    
                    <div id="fl_later">
                        <p>版权所有</p>
                        <div id="fengfeng">
                            <p>@勤奋蜂&极客工作室</p>
                          
                        </div>
                      
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
