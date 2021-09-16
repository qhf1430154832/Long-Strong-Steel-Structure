import React, { Component } from 'react'
import Left_nav from '../../component/Leftnav'
import Trendcontens from './Right_Content/index'
/**
 * 公司动态
 */
export default class Trends extends Component {
    render() {
        return (
            <div className="Both_Shell">
                <div className="inner_shell">
                    <Left_nav/>
                    <Trendcontens/>
                </div>
            </div>
        )
    }
}
