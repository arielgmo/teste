import React, { Component } from 'react';
import SearchMenu from '../SearchMenu';
import CarList from '../CarPanels/CarList';
import CarDetails from '../CarPanels/CarDetails';

class MainContentContainer extends Component {
  state = {
    searchFilter: '',
    showList: true,
    typeDetails: '',
  }

  changeState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  onGoToForm = (type) => {
    this.setState({
      showList: false,
      typeDetails: type,
    });
  }

  render() {
    const {
      searchFilter,
      showList,
      typeDetails,
    } = this.state;
    return (
      <div>
        <SearchMenu addCar={this.onGoToForm} onChangeState={this.changeState} />
        {
          showList
            ? <CarList search={searchFilter} onChangeState={this.changeState} />
            : <CarDetails type={typeDetails} onChangeState={this.changeState} />}
      </div>
    );
  }
}

export default MainContentContainer;
