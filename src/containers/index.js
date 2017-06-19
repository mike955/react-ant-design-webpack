import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from './HomeHeader';
import HomeList from '../components/HomeList';

import {
  Row,
  Col
} from 'antd';

import 'antd/dist/antd.less';
import * as userInfoActions from '../actions/userinfo';
class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      userinfo: '',
      modal1visible: false,
      modal2visible: false
    }
  }


  render() {
    return(
      <div>
        <HomeHeader userinfo={this.props.userinfo} actions={this.props.actions}/>
        <div>
          <Row>
            <Col span={4}><HomeList /></Col>
            <Col span={20}>{this.props.children}</Col>
          </Row>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userInfoActions, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
