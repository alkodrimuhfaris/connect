import services from '../../helpers/services';
import qs from 'qs';

export default {
  login: ({email, password}) => ({
    type: 'LOGIN',
    payload: services().post('auth/login/customer' + qs(email, password)),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
  setToken: (payload) => ({
    type: 'SET_TOKEN',
    payload,
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
