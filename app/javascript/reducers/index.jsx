import { combineReducers } from 'redux';
import filterReducer from './filter';
import filterRateReducer from './filterRate';


const rootReducer = combineReducers({
  filter: filterReducer,
  filterRate: filterRateReducer,
});

export default rootReducer;
