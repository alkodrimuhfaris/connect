import services from '../../helpers/services';
import qs from 'qs';

export default {
  getProfile: (token) => ({
    type: 'GET_PROFILE',
    payload: services(token).get('user'),
  }),
  patchProfile: (token, data = {}) => ({
    type: 'EDIT_PROFILE',
    payload: services(token).patch('user/update', qs.stringify(data)),
  }),
  deleteAccount: (token) => ({
    type: 'DELETE_ACCOUNT',
    payload: services(token).delete('user/delete'),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};
