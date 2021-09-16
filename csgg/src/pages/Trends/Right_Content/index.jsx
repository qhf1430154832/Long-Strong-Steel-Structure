import React, { Component } from 'react'
import Display_content from './Display_content'
import axios from 'axios'
import './index.css'
import { Pagination } from 'antd';
export default class Right_Content extends Component {
    state = {
        contents:[]
    }
    // 初次网络请求
    componentDidMount(){
        axios.get(`http://8.142.10.159:8001/changshi/news/pageNews/1/12`).then(
            res=>{
                this.setState({contents:res.data.data.row})
            },
            err=>{
                console.log(err)
            }
        )
    }
    
    // 网络请求图片和内容
    pageChange=(page)=>{
        axios.get(`http://8.142.10.159:8001/changshi/news/pageNews/${page}/12`).then(
            res=>{
                this.setState({contents:res.data.data.row})
            },
            err=>{
                console.log(err)
            }
        )
    }
    render() {
        return (
            <div id="content_shell">
                <div className="right_title">
                    <h2 className="title_h3">公司动态</h2>
                    <hr/>
                </div>
                <div className="right_content">
                    {/* 接到数据后传入状态，props传给展示区 */}
                    <Display_content display_items={this.state.contents}/>
                    <Pagination defaultCurrent={1} total={30} defaultPageSize={12} onChange={this.pageChange}/>
                </div>
            </div>
        )
    }
}
