import { combineReducers } from 'redux';

import userReducer from './user';

const appReducer = combineReducers({
  userReducer,
});

export default (state, action) => {
  if (action.type === 'RESET_APP') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
