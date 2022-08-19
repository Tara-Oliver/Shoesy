import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import modal from './modal_reducer';

export default combineReducers({
  modal
});
