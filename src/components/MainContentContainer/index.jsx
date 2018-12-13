import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchMenu from '../SearchMenu';
import { fetchCars } from '../../actions/carActions';
import { fetchAutomakers } from '../../actions/automakerActions';
import CarList from '../CarPanels/CarList';
import CarDetails from '../CarPanels/CarDetails';
import './index.scss';

class MainContentContainer extends Component {
  static propTypes = {
    onFetchCars: PropTypes.func,
    onFetchAutomakers: PropTypes.func,
  }

  static defaultProps = {
    onFetchCars: () => {},
    onFetchAutomakers: () => {},
  }

  state = {
    searchFilter: '',
    showList: true,
    typeDetails: '',
    activeCar: {},
  }

  componentDidMount() {
    const {
      onFetchCars,
      onFetchAutomakers,
    } = this.props;
    onFetchCars();
    onFetchAutomakers();
  }

  changeState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  onGoToForm = (type, car) => {
    this.setState({
      showList: false,
      typeDetails: type,
      activeCar: car,
    });
  }

  onGoToList = () => {
    this.setState({
      showList: true,
      activeCar: {},
    });
  }

  render() {
    const {
      searchFilter,
      showList,
      typeDetails,
      activeCar,
    } = this.state;
    return (
      <div>
        <SearchMenu
          showList={showList}
          goToAddCar={this.onGoToForm}
          onChangeState={this.changeState}
          onGoToList={this.onGoToList}
        />
        <div className="img-container" />
        {
          showList
            ? (
              <CarList
                searchFilter={searchFilter}
                onGoToForm={this.onGoToForm}
              />
            )
            : (
              <CarDetails
                type={typeDetails}
                onChangeState={this.changeState}
                activeCar={activeCar}
                onGoToList={this.onGoToList}
              />
            )}
      </div>
    );
  }
}

export default connect(
  null,
  {
    onFetchCars: fetchCars,
    onFetchAutomakers: fetchAutomakers,
  },
)(MainContentContainer);
