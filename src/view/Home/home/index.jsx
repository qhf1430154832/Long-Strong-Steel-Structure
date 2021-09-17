import React from "react";
import HomeHeader from "./home-header";
import { Redirect } from "react-router";
import { Route, Switch } from "react-router-dom";
import Introduction from "../introduction/introduction";
import Engineering from "../engineering/engineering";
import Dynamic from "../dynamic/dynamic";
import Bussiness from "../bussiness/bussiness";
import Contact from "../contact/contact";
import Admin from "../admin/admin";
import { Layout } from "antd";

const { Footer, Sider, Content } = Layout;

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Content>
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>
            {/* <Route path="/home" component={Home} /> */}
            <Route path="/introduction" component={Introduction} />
            <Route path="/engineering" component={Engineering} />
            <Route path="/dynamic" component={Dynamic} />
            <Route path="/business" component={Bussiness} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </Content>
      </div>
    );
  }
}
