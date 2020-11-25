import services from '../../helpers/services';
import qs from 'qs';

export default {
  login: ({email, password}) => ({
    type: 'LOGIN',
    payload: services().post('auth/login', qs.stringify({email, password})),
  }),
  signup: ({phone}) => ({
    type: 'SIGNUP',
    payload: services().post('auth/signup', qs.stringify({phone})),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
  inMainScreen: () => ({
    type: 'IN_MAIN_SCREEN',
  }),
  setToken: (payload) => ({
    type: 'SET_TOKEN',
    payload,
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
