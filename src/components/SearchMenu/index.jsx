import React from 'react';
import {
  Row,
  Col,
  Input,
  Button,
} from 'antd';
import PropTypes from 'prop-types';

import './index.scss';

const SearchMenu = (props) => {
  const {
    onChangeState,
    goToAddCar,
    showList,
    onGoToList,
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
        {showList
          ? (
            <Button className="add-car-button" size="large" onClick={() => goToAddCar('add')}>
              Cadastrar
            </Button>
          )
          : (
            <Button className="add-car-button" size="large" onClick={() => onGoToList()}>
              Voltar
            </Button>
          )
        }
      </Col>
    </Row>
  );
};

SearchMenu.propTypes = {
  onChangeState: PropTypes.func,
  goToAddCar: PropTypes.func,
  onGoToList: PropTypes.func,
  showList: PropTypes.bool,
};

SearchMenu.defaultProps = {
  onChangeState: () => {},
  goToAddCar: () => {},
  onGoToList: () => {},
  showList: false,
};

export default SearchMenu;
