import axios from 'axios';

export const FETCH_AUTOMAKERS_START = 'FETCH_AUTOMAKERS_START';
export const FETCH_AUTOMAKERS_SUCCESSFUL = 'FETCH_AUTOMAKERS_SUCCESSFUL';
export const FETCH_AUTOMAKERS_FAILED = 'FETCH_AUTOMAKERS_FAILED';

export function fetchStarted() {
  return {
    type: FETCH_AUTOMAKERS_START,
  };
}

export function fetchSuccessful(data) {
  return {
    type: FETCH_AUTOMAKERS_SUCCESSFUL,
    payload: data,
  };
}

export function fetchFailed(status) {
  return {
    type: FETCH_AUTOMAKERS_FAILED,
    payload: status,
  };
}

export function fetchAutomakers() {
  return (dispatch) => {
    dispatch(fetchStarted());
    axios.get('https://private-anon-6fe820533a-tradersclubapi.apiary-mock.com/api/brands')
      .then((response) => {
        if (response.status === 200) {
          return dispatch(fetchSuccessful(response.data.brands));
        }
        return dispatch(fetchFailed(response.status));
      });
  };
}
