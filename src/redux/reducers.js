import { combineReducers } from 'redux';

import userReducer from './user';
import currencyReducer from './currency';

const appReducer = combineReducers({
  userReducer,
  currencyReducer,
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
