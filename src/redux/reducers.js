import { combineReducers } from 'redux';

import userReducer from './user';
import currencyReducer from './currency';
import clientReducer from './client';

const appReducer = combineReducers({
  userReducer,
  currencyReducer,
  clientReducer,
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
