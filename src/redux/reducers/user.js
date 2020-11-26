const initialState = {
  allUser: [],
  pageInfoAllUser: {},
  allFriend: [],
  pageInfoAllFriend: {},
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Getting all user ...',
      };
    }
    case 'GET_ALL_USER_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        allUser: action.payload.data.results,
        pageInfoAllUser: action.payload.data.pageInfo,
        alertMsg: 'Get all user successfull',
      };
    }
    case 'GET_ALL_USER_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: 'Get all user failed',
      };
    }
    case 'GET_ALL_FRIEND_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Getting all user ...',
      };
    }
    case 'GET_ALL_FRIEND_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        allFriend: action.payload.data.results,
        pageInfoAllFriend: action.payload.data.pageInfo,
        alertMsg: 'Get all user successfull',
      };
    }
    case 'GET_ALL_FRIEND_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: 'Get all user failed',
      };
    }
    case 'ADD_FRIEND_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Adding friend ...',
      };
    }
    case 'ADD_FRIEND_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        alertMsg: 'Add friend successfull',
      };
    }
    case 'ADD_FRIEND_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: 'Add friend failed',
      };
    }
    case 'UNFRIEND_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Remove friend ...',
      };
    }
    case 'UNFRIEND_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        alertMsg: 'Unfriend successfull',
      };
    }
    case 'UNFRIEND_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        alertMsg: 'Unfriend failed',
      };
    }
    default: {
      return state;
    }
  }
};
