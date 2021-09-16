import React, { Component } from 'react'
import './index.css'
export default class Display_content extends Component {
    render() {
        const {display_items} = this.props
        return (
            <div className="outer_shell">
                {/* 内容展示区 */}
                {
                    display_items.map(display=>{
                        return(
                            <div key={display.id} className="trend_outer_shell">
                                <span className="trend_display_content">{display.title}</span>
                                <span className="trend_display_content">{display.gmtCreate}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
