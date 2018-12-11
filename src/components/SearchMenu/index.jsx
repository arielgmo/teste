import React from 'react';
import {
  Row,
  Col,
  Input,
  Button,
} from 'antd';

import './index.scss';

const SearchMenu = (props) => {
  const {
    onChangeState,
    addCar,
  } = props;

  return (
    <Row className="menu-container">
      <Col span={18}>
        <Input
          placeholder="Pesquise por um veículo"
          className="search-input"
          onChange={event => onChangeState('searchFilter', event.target.value)}
        />
      </Col>
      <Col span={2}>
        <Button className="add-car-button" size="large" onClick={() => addCar('add')}>
          Cadastrar
        </Button>
      </Col>
    </Row>
  );
};

export default SearchMenu;
