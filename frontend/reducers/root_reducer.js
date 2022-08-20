import { combineReducers } from 'redux';

import uiReducer from './ui_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  ui: uiReducer,
  errors: errorsReducer
});

export default rootReducer;