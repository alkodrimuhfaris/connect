import services from '../../helpers/services';
import qs from 'qs';

export default {
  checkPassword: (token) => ({
    type: 'CHECK_OLD_PASSWORD',
    payload: services(token).get('user/check/password'),
  }),
  updatePassword: (token, data = {}) => ({
    type: 'CHANGE_PASSWORD',
    payload: services(token).patch('user/password/update', qs.stringify(data)),
  }),
  addPassword: (token, data = {}) => ({
    type: 'ADD_PASSWORD',
    payload: services(token).patch('user/password/add', qs.stringify(data)),
  }),
};
