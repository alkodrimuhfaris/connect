const initialState = {
  myProfile: {},
  isEdited: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PROFILE_PENDING': {
      console.log('edit profile pending');
      return {
        ...state,
        isLoading: true,
        isError: false,
        isEdited: false,
        alertMsg: 'Getting profile ...',
      };
    }
    case 'EDIT_PROFILE_FULFILLED': {
      console.log('edit profile fullfiled');
      return {
        ...state,
        isError: false,
        isEdited: true,
        myProfile: action.payload.data.results,
        alertMsg: 'Get profile successfull',
      };
    }
    case 'EDIT_PROFILE_REJECTED': {
      return {
        ...state,
        isError: true,
        isEdited: false,
        alertMsg: 'Get profile failed',
      };
    }
    case 'GET_PROFILE_PENDING': {
      console.log('edit profile pending');
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Getting profile ...',
      };
    }
    case 'GET_PROFILE_FULFILLED': {
      console.log('edit profile fullfiled');
      return {
        ...state,
        isError: false,
        myProfile: action.payload.data.results,
        alertMsg: 'Get profile successfull',
      };
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        isError: true,
        alertMsg: 'Get profile failed',
      };
    }
    case 'DELETE_ACCOUNT_PENDING': {
      console.log('edit profile pending');
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Deleting profile ...',
      };
    }
    case 'DELETE_ACCOUNT_FULFILLED': {
      console.log('edit profile fullfiled');
      return {
        ...state,
        isError: false,
        myProfile: {},
        alertMsg: 'Delete profile successfull',
      };
    }
    case 'DELETE_ACCOUNT_REJECTED': {
      return {
        ...state,
        isError: true,
        alertMsg: 'Delete profile failed',
      };
    }
    case 'LOGOUT': {
      return {
        myProfile: {},
        isEdited: false,
        isLoading: false,
        isError: false,
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
