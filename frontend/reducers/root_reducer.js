import { combineReducers } from 'redux';

import uiReducer from './ui_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ProductReducer from './product_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  ui: uiReducer,
  errors: ErrorsReducer,
  product: ProductReducer
});

export default RootReducer;