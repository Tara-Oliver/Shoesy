import { combineReducers } from 'redux';
import errors from './session_errors_reducer';
import ui from './ui_reducer';
import session from './session_reducer';


const rootReducer = combineReducers({
  session,
  ui,
  errors,
});

export default rootReducer;
