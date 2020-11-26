const initialState = {
  allUser: [],
  pageInfoAllUser: {},
  allFriend: [],
  pageInfoAllFriend: {},
  isLoading: false,
  isError: false,
  isAdded: false,
  isLoadingGetData: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAdded: false,
        isLoadingGetData: true,
        alertMsg: 'Getting all user ...',
      };
    }
    case 'GET_ALL_USER_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isLoadingGetData: false,
        allUser: action.payload.data.results,
        pageInfoAllUser: action.payload.data.pageInfo,
        isAdded: false,
        alertMsg: 'Get all user successfull',
      };
    }
    case 'SCROLL_ALL_USER_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAdded: false,
        isLoadingGetData: false,
        alertMsg: 'Get all user failed',
      };
    }
    case 'SCROLL_ALL_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAdded: false,
        isLoadingGetData: true,
        alertMsg: 'Getting all user ...',
      };
    }
    case 'SCROLL_ALL_USER_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isLoadingGetData: false,
        allUser: [...state.allUser, ...action.payload.data.results],
        pageInfoAllUser: {
          ...state.pageInfoAllUser,
          ...action.payload.data.pageInfo,
        },
        isAdded: false,
        alertMsg: 'Get all user successfull',
      };
    }
    case 'SCROLL_ALL_USER_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAdded: false,
        isLoadingGetData: false,
        alertMsg: 'Get all user failed',
      };
    }
    case 'GET_ALL_FRIEND_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAdded: false,
        isLoadingGetData: true,
        alertMsg: 'Getting all user ...',
      };
    }
    case 'GET_ALL_FRIEND_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isAdded: false,
        isLoadingGetData: false,
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
        isAdded: false,
        isLoadingGetData: false,
        alertMsg: 'Get all user failed',
      };
    }
    case 'SCROLL_ALL_FRIEND_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAdded: false,
        isLoadingGetData: true,
        alertMsg: 'Getting all user ...',
      };
    }
    case 'SCROLL_ALL_FRIEND_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isAdded: false,
        isLoadingGetData: false,
        allFriend: [...state.allFriend, ...action.payload.data.results],
        pageInfoAllFriend: action.payload.data.pageInfo,
        alertMsg: 'Get all user successfull',
      };
    }
    case 'SCROLL_ALL_FRIEND_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAdded: false,
        isLoadingGetData: false,
        alertMsg: 'Get all user failed',
      };
    }
    case 'ADD_FRIEND_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAdded: false,
        isLoadingGetData: true,
        alertMsg: 'Adding friend ...',
      };
    }
    case 'ADD_FRIEND_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isAdded: true,
        isLoadingGetData: true,
        alertMsg: 'Add friend successfull',
      };
    }
    case 'ADD_FRIEND_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAdded: false,
        isLoadingGetData: false,
        alertMsg: 'Add friend failed',
      };
    }
    case 'UNFRIEND_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAdded: false,
        isLoadingGetData: true,
        alertMsg: 'Remove friend ...',
      };
    }
    case 'UNFRIEND_FULFILLED': {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isAdded: false,
        isLoadingGetData: true,
        alertMsg: 'Unfriend successfull',
      };
    }
    case 'UNFRIEND_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAdded: false,
        isLoadingGetData: false,
        alertMsg: 'Unfriend failed',
      };
    }
    default: {
      return state;
    }
  }
};
