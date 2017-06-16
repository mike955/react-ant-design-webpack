import React from 'react';
import { Link } from 'react-router';

import {
  Menu,
  Icon
} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import 'antd/dist/antd.less';
import './style.less';
class HomeList extends React.Component {
  render() {
    return(
      <div id="list">
        <Menu id="menu">
          <Menu.Item class="item"><Link to="/item1">菜单项1</Link></Menu.Item>
          <Menu.Item class="item"><Link to="/item2">菜单项2</Link></Menu.Item>
          <Menu.Item class="item"><Link to="/item3">菜单项3</Link></Menu.Item>
          <Menu.Item class="item"><Link to="/item4">菜单项4</Link></Menu.Item>
          <Menu.Item class="item"><Link to="/item5">菜单项5</Link></Menu.Item>
          <Menu.Item class="item"><Link to="/item6">菜单项6</Link></Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default HomeList;
