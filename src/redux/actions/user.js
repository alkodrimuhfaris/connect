import services from '../../helpers/services';
import qs from 'qs';

export default {
  getAllUser: (token) => ({
    type: 'GET_ALL_USER',
    payload: services(token).get('user/get/all'),
  }),
  getAllFriend: (token, query = {}) => ({
    type: 'GET_ALL_FRIEND',
    payload: services(token).get('friend/get/all' + '?' + qs.stringify(query)),
  }),
  addFriend: (token, id) => ({
    type: 'ADD_FRIEND',
    payload: services(token).post('friend/add/' + id),
  }),
  unfriend: (token, id) => ({
    type: 'UNFRIEND',
    payload: services(token).delete('friend/unfriend' + id),
  }),
};
