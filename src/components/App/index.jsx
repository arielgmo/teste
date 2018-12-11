import React from 'react';
import { Row, Col } from 'antd';

import SideMenu from '../SideMenu';
import MainContentContainer from '../MainContentContainer';
import '../../assets/styles/Shared.scss';

const App = () => (
  <div className="main-container">
    <Row>
      <Col span={4}>
        <SideMenu />
      </Col>
      <Col span={20}>
        <MainContentContainer />
      </Col>
    </Row>
  </div>
);

export default App;
