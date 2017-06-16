import React from 'react';

import {
  Row,
  Col,
  Menu,
  Icon,
  Modal,
  Button
} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import 'antd/dist/antd.less';
import './style.less';
//import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userinfo: '',
      modal1visible: false,
      modal2visible: false
    };
  }

  showLogin() {
    this.setState({
      modal1visible: true
    })
  }

  showRegister() {
    this.setState({
      modal2visible: true
    })
  }

  handleOkLogin() {
    this.setState({
      modal1visible: false,
      userinfo: '123'
    })
  }

  handleCancelLogin() {
    this.setState({
      modal1visible: false
    })
  }

  handleOkRegister() {
    this.setState({
      modal2visible: false,
      userinfo: 456
    })
  }

  handleCancelRegister() {
    this.setState({
      modal2visible: false
    })
  }

  quit() {
    this.setState({
      userinfo: ''
    })
  }

  render() {

    const userShow = this.state.userinfo
    ? <Col span={4}>
      <Button>欢迎您：{this.state.userinfo}</Button>
      <span class="link">&nbsp;&nbsp;&nbsp;</span>
      <Button onClick={this.quit.bind(this)}>退出</Button>
    </Col>
    : <Col span={4}>
      <Button  onClick={this.showLogin.bind(this)}>注册</Button>
      <span class="link">&nbsp;&nbsp;&nbsp;</span>
      <Button onClick={this.showRegister.bind(this)}>登录</Button>
    </Col>

    return(
      <header id="header">
        <Row>
          <Col span={2}></Col>
          <Col span={6}  class="project">
            <a href="/">
              <span>Project</span>
            </a>
          </Col>
          <Col span={10}></Col>
          {userShow}
          <Col span={2}></Col>
        </Row>
        <Modal
          visible={this.state.modal1visible}
          title="Title"
          onOk={this.handleOkLogin.bind(this)}
          onCancel={this.handleCancelLogin.bind(this)}
          footer={[
            <Button key="concelRegister" size="large" onClick={this.handleCancelLogin.bind(this)}>取消</Button>,
            <Button key="register"size="large" onClick={this.handleOkLogin.bind(this)}>
              注册
            </Button>,
          ]}>
          <p>some contents1...</p>
          <p>some contents1...</p>
          <p>some contents1...</p>
        </Modal>
        <Modal visible={this.state.modal2visible}
          title="Title"
          onOk={this.handleOkRegister.bind(this)}
          onCancel={this.handleCancelRegister.bind(this)}
          footer={[
            <Button key="cancelLogin" onClick={this.handleCancelRegister.bind(this)}>取消</Button>,
            <Button key="login" onClick={this.handleOkRegister.bind(this)}>
              登录
            </Button>,
          ]}>
         <p>some contents2...</p>
         <p>some contents2...</p>
         <p>some contents2...</p>
       </Modal>
      </header>
    )
  }
}

export default Header
