import { combineReducers } from 'redux';

import { reducer as podcasts } from './podcasts';
import { reducer as auth } from './auth';

export default combineReducers({
  podcasts,
  auth,
});
