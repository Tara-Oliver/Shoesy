import { combineReducers } from 'redux';

import uiReducer from './ui_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  ui: uiReducer,
  errors: ErrorsReducer,
  entities: EntitiesReducer
});

export default RootReducer;