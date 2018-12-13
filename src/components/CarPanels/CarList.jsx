import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  List,
} from 'antd';
import './CarList.scss';

const ListItem = List.Item;

class CarList extends Component {

  filterListData = (carList) => {
    const {
      searchFilter,
    } = this.props;
    return carList.filter((car) => {
      if (
        car.title.toLowerCase().includes(searchFilter.toLowerCase())
        || car.model.toLowerCase().includes(searchFilter.toLowerCase())
        || car.brand.toLowerCase().includes(searchFilter.toLowerCase())
        || car.color.toLowerCase().includes(searchFilter.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  }

  getListData = () => {
    const {
      carReducer,
    } = this.props;

    // could use map to do a validation or add logic if needed.
    return this.filterListData(carReducer);
  }

  render() {
    const {
      onGoToForm,
    } = this.props;
    return (
      <List
        className="car-list"
        itemLayout="horizontal"
        dataSource={this.getListData()}
        renderItem={item => (
          <ListItem onClick={() => onGoToForm('edit', item)} className="car-list-item">
            <div className="car-list-text-container-left">
              <div className="car-list-text-title">{item.title}</div>
              <div className="car-list-text">{`${item.model} - ${item.brand} - ${item.km}`}</div>
            </div>
            <div className="car-list-text-container-right">
              <div className="car-list-text-title">{item.price}</div>
              <div className="car-list-text">{item.year}</div>
            </div>
          </ListItem>
        )}
      />
    );
  }
}

export default connect(
  ({ carReducer }) => ({
    carReducer,
  }),
)(CarList);
