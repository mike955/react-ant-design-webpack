import React from 'react';
import HomeHeader from '../../components/HomeHeader';

import HomeList from '../../components/HomeList';

import {
  Row,
  Col
} from 'antd';

import 'antd/dist/antd.less';

class Home extends React.Component{
  render() {
    return (
      <div>
        <HomeHeader />
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

export default Home;
