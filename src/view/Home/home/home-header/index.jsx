import React from "react";
import { Menu, Input } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import menuList from "./menuList";
import { Link, withRouter } from "react-router-dom";
import logo from "../../../../assents/logo.png";
import top_back4 from "../../../../assents/top_back4.png";
const { Search } = Input;
class HomeHeader extends React.Component {
  onSearch = (value) => console.log(value);

  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname;

    return menuList.map((item) => {
      return (
        <Menu.Item key={item.key} className="home-menu-item">
          <Link
            to={item.key}
            onClick={() => this.props.history.push(item.key)}
          ></Link>
          <span>{item.title}</span>
        </Menu.Item>
      );
    });
  };

  UNSAFE_componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  }
  render() {
    const path = this.props.location.pathname;
    return (
      // <div>
      //   <header className="home-header">
      //     <div className="home-logo"></div>
      //     <div className="home-name">
      //       <p>重庆长实钢结构有限公司</p>
      //     </div>
      //     <Search
      //       className="home-search"
      //       placeholder="input search text"
      //       onSearch={this.onSearch}
      //       enterButton
      //     />
      //   </header>

      //   <div className="logo" />

      // </div>
      <div>
        <header>
          <div>
            <img src={logo} alt="" className="home-logo" />
            <p className="home-name">重庆长实钢结构有限公司</p>
            {/* <Search
              className="home-search"
              placeholder="input search text"
              onSearch={this.onSearch}
              enterButton
            /> */}
            <Search
              placeholder="请输入搜索内容"
              onSearch={this.onSearch}
              className="home-search"
            />
          </div>
        </header>
        <Menu className="home-menu" SelectedKeys={[path]} theme="light">
          {this.menuNodes}
        </Menu>
        <img src={top_back4} alt="" srcset="" className="top_back4" />
      </div>
    );
  }
}

export default withRouter(HomeHeader);
