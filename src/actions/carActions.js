import axios from 'axios';

export const FETCH_CARS_START = 'FETCH_CARS_START';
export const FETCH_CARS_SUCCESSFUL = 'FETCH_CARS_SUCCESSFUL';
export const FETCH_CARS_FAILED = 'FETCH_CARS_FAILED';
export const ADD_CAR_START = 'ADD_CAR_START';
export const ADD_CAR_SUCCESSFUL = 'ADD_CAR_SUCCESSFUL';
export const ADD_CAR_FAILED = 'ADD_CAR_FAILED';
export const DELETE_CAR_START = 'DELETE_CAR_START';
export const DELETE_CAR_SUCCESSFUL = 'DELETE_CAR_SUCCESSFUL';
export const DELETE_CAR_FAILED = 'DELETE_CAR_FAILED';
export const EDIT_CAR_START = 'EDIT_CAR_START';
export const EDIT_CAR_SUCCESSFUL = 'EDIT_CAR_SUCCESSFUL';
export const EDIT_CAR_FAILED = 'EDIT_CAR_FAILED';

export function fetchStarted() {
  return {
    type: FETCH_CARS_START,
  };
}

export function fetchSuccessful(data) {
  return {
    type: FETCH_CARS_SUCCESSFUL,
    payload: data,
  };
}

export function fetchFailed(status) {
  return {
    type: FETCH_CARS_FAILED,
    payload: status,
  };
}

export function addCarStarted() {
  return {
    type: ADD_CAR_START,
  };
}

export function addCarSuccessful() {
  return {
    type: ADD_CAR_SUCCESSFUL,
  };
}

export function addCarFailed(status) {
  return {
    type: ADD_CAR_FAILED,
    payload: status,
  };
}

export function deleteCarStarted() {
  return {
    type: DELETE_CAR_START,
  };
}

export function deleteCarSuccessful() {
  return {
    type: DELETE_CAR_SUCCESSFUL,
  };
}

export function deleteCarFailed(status) {
  return {
    type: DELETE_CAR_FAILED,
    payload: status,
  };
}

export function editCarStarted() {
  return {
    type: EDIT_CAR_START,
  };
}

export function editCarSuccessful() {
  return {
    type: EDIT_CAR_SUCCESSFUL,
  };
}

export function editCarFailed(status) {
  return {
    type: EDIT_CAR_FAILED,
    payload: status,
  };
}

export function fetchCars() {
  return (dispatch) => {
    dispatch(fetchStarted());
    axios.get('http://private-anon-6fe820533a-tradersclubapi.apiary-mock.com/api/cars?search=')
      .then((response) => {
        if (response.status === 200) {
          return dispatch(fetchSuccessful(response.data.cars));
        }
        return dispatch(fetchFailed(response.status));
      });
  };
}

export function addCar(car) {
  return (dispatch) => {
    dispatch(addCarStarted());
    axios.post('http://private-anon-6fe820533a-tradersclubapi.apiary-mock.com/api/cars',
      {
        ...car,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(addCarSuccessful());
          return dispatch(fetchCars());
        }
        return dispatch(addCarFailed());
      });
  };
}

export function deleteCar(id) {
  return (dispatch) => {
    dispatch(deleteCarStarted());
    axios.delete(`https://private-anon-6fe820533a-tradersclubapi.apiary-mock.com/api/cars/${id}`)
      .then((response) => {
        if (response.status === 200 || response.status === 204) {
          dispatch(deleteCarSuccessful());
          return dispatch(fetchCars());
        }
        return dispatch(deleteCarFailed());
      });
  };
}

export function editCar(id, car) {
  return (dispatch) => {
    dispatch(editCarStarted());
    axios.put(`https://private-anon-6fe820533a-tradersclubapi.apiary-mock.com/api/cars/${id}`, {
      ...car,
    })
      .then((response) => {
        if (response.status === 200 || response.status === 204) {
          dispatch(editCarSuccessful());
          return dispatch(fetchCars());
        }
        return dispatch(editCarFailed());
      });
  };
}
