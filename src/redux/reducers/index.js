import {combineReducers} from 'redux';

import auth from './auth';
import chat from './chat';
import profile from './profile';
import password from './password';

export default combineReducers({
  auth,
  chat,
  profile,
  password,
});
