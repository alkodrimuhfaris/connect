import services from '../../helpers/services';
import qs from 'qs';

export default {
  openOption: () => ({
    type: 'OPEN_OPTION',
  }),
  openAddFriend: (opt) => ({
    type: 'OPEN_ADD',
    payload: opt,
  }),
  getAllList: (token) => ({
    type: 'GET_LIST',
    payload: services(token).get('chat/list/all'),
  }),
  getPrivate: (token, id) => ({
    type: 'GET_PRIVATE',
    payload: services(token).get('chat/colluctor/' + id),
  }),
  privateScroll: (token, id, page) => ({
    type: 'PRIVATE_SCROLL',
    payload: services(token).get(
      'chat/colluctor/' + id + '?' + qs.stringify({page}),
    ),
  }),
  allListScroll: (token, page) => ({
    type: 'LIST_SCROLL',
    payload: services(token).get('chat/list/all?' + qs.stringify({page})),
  }),
  sendChat: (token, id, chat) => ({
    type: 'SEND_CHAT',
    payload: services(token).post('chat/create/' + id, qs.stringify({chat})),
  }),
  readChat: (token, id) => ({
    type: 'READ_CHAT',
    payload: services(token).patch('chat/read/' + id),
  }),
};
