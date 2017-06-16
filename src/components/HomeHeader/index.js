import React from 'react';

import {
  Row,
  Col,
  Menu,
  Icon
} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import 'antd/dist/antd.less';
//import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
export default class Header extends React.Component{
  render() {
    return(
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={6}>
            <a href="/" class="logo">
              <span>Project</span>
            </a>
          </Col>
          <Col span={10}></Col>
          <Col span={4}>
            <Menu mode="horizontal">
              <Menu.Item>登录</Menu.Item>
              <SubMenu title="子菜单">
                <Menu.Item>注册</Menu.Item>
              </SubMenu>
           </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}

// export default Header = From.create({})(Header);
