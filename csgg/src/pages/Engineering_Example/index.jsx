import React, { Component } from 'react'
import Content from './Right_Content'
import Leftnav from '../../component/Leftnav'
import './index.css'
/**
 * 工程实例
 */
export default class Engineering_Example extends Component {
    render() {
        return (
            <div className="Both_Shell">
                    <div className="inner_shell">
                        <Leftnav/>
                        <Content/>
                    </div>

            </div>
        )
    }
}
