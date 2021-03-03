import { combineReducers } from 'redux';

import * as auth from './auth';
import * as app from './app';

const rootReducer = combineReducers({
  ...app,
  ...auth
});

export default rootReducer;