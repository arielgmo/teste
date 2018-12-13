import React from 'react';
import { Row, Col } from 'antd';
import { Provider } from 'react-redux';
import store from '../../store';

import SideMenu from '../SideMenu';
import MainContentContainer from '../MainContentContainer';
import '../../assets/styles/Shared.scss';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
