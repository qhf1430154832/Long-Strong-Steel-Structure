import React, { Component } from 'react'
import './index.css'
export default class Right_Content extends Component {
    render() {
        return (
            <div id="content_shell">
                <div className="right_title">
                    <h2 className="title_h3">联系我们</h2>
                    <hr/>
                </div>
                <div className="right_content" id="__Contactsymbolstyle__">             
                    <p class="Contact_p" id="__first-Contact_p__">邓经理:18680900078</p>
                    <p class="Contact_p">杨经理:15696633268</p>
                    <p class="Contact_p">电 话:023-58369088</p>
                    <p class="Contact_p">传 真:023-58369088</p>
                    <p class="Contact_p">地 址:重庆万州区沱口集装箱码头办公大楼310</p>                  
                </div>
            </div>
        )
    }
}
