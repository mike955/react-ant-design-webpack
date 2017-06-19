import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Menu,
  Icon,
  Modal,
  Button,
  Form,
  Input,
} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

import 'antd/dist/antd.less';
import './style.less';


import * as userInfoActions from '../../actions/userinfo';

//import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
class Header extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    console.log(this.props);
  }

  showLogin() {
    const userinfo = {
      modal1visible: true
    };
    this.props.actions.showLogin(userinfo);

  }

  showRegister() {
    const userinfo = {
      modal2visible: true
    };
    this.props.actions.showRegister(userinfo);
  }

  handleOkLogin() {
    const userinfo = {
      modal2visible: false,
      userinfo: 123
    };
    this.props.actions.handleOkLogin(userinfo);

  }

  handleCancelLogin() {
    const userinfo = {
      modal1visible: false
    };
    this.props.actions.hideLogin(userinfo);
  }

  handleOkRegister() {
    let options = {
      'method': 'GET',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'mode': 'cors',
      'Access-Control-Allow-Origin': '*',
    }
    fetch('http://127.0.0.1:3000?user=123', options)
    .then(response => response.json())
    .then(json => {
      console.log(json);
    })

    const userinfo = {
      modal1visible: false,
      userinfo: 456
    }
    this.props.actions.handleOkRegister(userinfo);
  }

  handleCancelRegister() {
    const userinfo = {
      modal1visible: false
    };
    this.props.actions.hideRegister(userinfo);
  }

  logout() {
    const userinfo = {
      userinfo: ''
    }
    this.props.actions.logout(userinfo);
  }


  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };

    const userShow = this.props.userinfo.userinfo
    ? <Col span={4}>
      <Button>欢迎您：{this.props.userinfo.userinfo}</Button>
      <span class="link">&nbsp;&nbsp;&nbsp;</span>
      <Button onClick={this.logout.bind(this)}>退出</Button>
    </Col>
    : <Col span={4}>
      <Button  onClick={this.showLogin.bind(this)}>注册</Button>
      <span class="link">&nbsp;&nbsp;&nbsp;</span>
      <Button  onClick={this.showRegister.bind(this)}>登录</Button>
    </Col>

    return (
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
          visible={this.props.userinfo.modal1visible}
          title="注册"
          onOk={this.handleOkRegister.bind(this)}
          onCancel={this.handleCancelRegister.bind(this)}
          footer={[
            <Button key="concelRegister" size="large"
              onClick={this.handleCancelRegister.bind(this)}
            >取消</Button>,
            <Button key="register" size="large"
              onClick={this.handleOkRegister.bind(this)}
              >注册
            </Button>,
          ]}>
          <FormItem
            {...formItemLayout}
            label="用户名"
            validateStatus="error"
            help="用户名不能为空"
          >
            <Input placeholder="请输入用户名" id="error" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码"
            validateStatus="error"
            help="密码不能为空"
          >
            <Input placeholder="请输入用密码" id="error" />
          </FormItem>
        </Modal>
        <Modal visible={this.props.userinfo.modal2visible}
          title="Title"
          onOk={this.handleOkLogin.bind(this)}
          onCancel={this.handleCancelLogin.bind(this)}
          footer={[
            <Button key="cancelLogin"
              onClick={this.handleCancelLogin.bind(this)}>取消</Button>,
            <Button key="login" onClick={this.handleOkLogin.bind(this)}>
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
function mapStateToProps(state) {
  return{
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
