import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchMenu from '../SearchMenu';
import { fetchCars } from '../../actions/carActions';
import CarList from '../CarPanels/CarList';
import CarDetails from '../CarPanels/CarDetails';

class MainContentContainer extends Component {
  static propTypes = {
    onFetchCars: PropTypes.func,
  }

  static defaultProps = {
    onFetchCars: () => {},
  }

  state = {
    searchFilter: '',
    showList: true,
    typeDetails: '',
  }

  componentDidMount() {
    const {
      onFetchCars,
    } = this.props;
    onFetchCars();
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

export default connect(
  null,
  { onFetchCars: fetchCars },
)(MainContentContainer);
