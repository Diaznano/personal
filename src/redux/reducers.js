import { combineReducers } from 'redux';

import userReducer from './user';
import currencyReducer from './currency';
import clientReducer from './client';
import categoryReducer from './category';

const appReducer = combineReducers({
  userReducer,
  currencyReducer,
  clientReducer,
  categoryReducer,
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
