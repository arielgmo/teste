import { FETCH_CARS_SUCCESSFUL } from '../actions/carActions';

export default function platformReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CARS_SUCCESSFUL:
      return [...action.payload];
    default:
      return state;
  }
}
