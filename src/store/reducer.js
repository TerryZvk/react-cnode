import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../components/pages/Home/store';

export default combineReducers({
  home: homeReducer
})