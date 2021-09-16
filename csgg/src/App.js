import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Engineering_Example from './pages/Engineering_Example'
import Company_Profile from './pages/Company_Profile'
import Trends from './pages/Trends'
import Business from './pages/Business'
import Contact from './pages/Contact'
import MySwiper from './component/Swiper'
import Head from './component/Head'
import Footer from './component/Footer/index'
import './App.less'
import Login from './pages/Login/Login'
import List from './pages/admin/products/List'
export default class App extends Component {
    render() {
        return (
            <div>
                <Head/>
                {/* Swiper */}
                <MySwiper/>
                {/* 组件展示区 */}
                <Switch>
                    {/* 路由注册 */}
                    <Route path="/HomePage" component={HomePage}/>
                    <Route path="/Engineering_Example" component={Engineering_Example}/>
                    <Route path="/Company_Profile" component={Company_Profile}/>
                    <Route path="/Trends" component={Trends}/>
                    <Route path="/Business" component={Business}/>
                    <Route path="/Contact" component={Contact}/>
                    <Route path='/login' component={Login}/>
                    <Route exact path='/admin/products' component={List}/>
                    <Redirect to="/HomePage"/>
                </Switch>
                {/* Footer */}
                <Footer/>
            </div>
        )
    }
}
