import React, { Component } from 'react'
import './index.css'
export default class Display_content extends Component {
    render() {
        console.log("props",this.props);
        const {display_items} = this.props
        console.log(display_items)
        return (
            <div className="outer_shell">
                {/* 内容展示区 */}
                {
                    display_items.map((display)=>{
                        return(
                            <div className="display_content" key={display.id}><img className="display_img" src={display.url} alt="err" />{display.content}</div>
                        )
                    })
                }
            </div>
        )
    }
}
