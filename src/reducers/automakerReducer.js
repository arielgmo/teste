import { FETCH_AUTOMAKERS_SUCCESSFUL } from '../actions/automakerActions';

export default function platformReducer(state = [], action) {
  switch (action.type) {
    case FETCH_AUTOMAKERS_SUCCESSFUL:
      return [...action.payload];
    default:
      return state;
  }
}
