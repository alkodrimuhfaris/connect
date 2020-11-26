import services from '../../helpers/services';
import qs from 'qs';

export default {
  getAllUser: (token, query = {}) => ({
    type: 'GET_ALL_USER',
    payload: services(token).get('user/get/all' + '?' + qs.stringify(query)),
  }),
  scrollAllUser: (token, page, query = {}) => ({
    type: 'SCROLL_ALL_USER',
    payload: services(token).get(
      'user/get/all' + '?' + qs.stringify({page, ...query}),
    ),
  }),
  getAllFriend: (token, query = {}) => ({
    type: 'GET_ALL_FRIEND',
    payload: services(token).get('friend/get/all' + '?' + qs.stringify(query)),
  }),
  scrollAllFriend: (token, page, query = {}) => ({
    type: 'SCROLL_ALL_FRIEND',
    payload: services(token).get(
      'friend/get/all' + '?' + qs.stringify({page, ...query}),
    ),
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
