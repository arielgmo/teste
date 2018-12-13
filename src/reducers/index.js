import { combineReducers } from 'redux';
import carReducer from './carReducer';
import automakerReducer from './automakerReducer';

export default combineReducers({
  carReducer,
  automakerReducer,
});
