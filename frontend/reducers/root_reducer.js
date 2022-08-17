import { combineReducers } from 'redux';

import ui from './ui_reducer';
import session from './session_reducer';


const rootReducer = combineReducers({
  session,
  ui,
});

export default rootReducer;
