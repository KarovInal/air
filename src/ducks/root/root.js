import { combineReducers } from 'redux';
import mapReducer from 'Ducks/map';

const rootReducer = combineReducers({
  map: mapReducer
});

export default rootReducer;
