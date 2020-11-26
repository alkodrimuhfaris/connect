const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  isPasswordExist: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_OLD_PASSWORD_PENDING': {
      console.log('edit profile pending');
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Checking old password ...',
      };
    }
    case 'CHECK_OLD_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isPasswordExist: action.payload.data.passwordExist,
        alertMsg: 'Old password checking success',
      };
    }
    case 'CHECK_OLD_PASSWORD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Old password checking failed',
      };
    }
    case 'CHANGE_PASSWORD_PENDING': {
      console.log('edit profile pending');
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: 'Updating password ...',
      };
    }
    case 'CHANGE_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: 'Password updated successfully',
      };
    }
    case 'CHANGE_PASSWORD_REJECTED': {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        alertMsg: 'Password update failed',
      };
    }
    case 'ADD_PASSWORD_PENDING': {
      console.log('edit profile pending');
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        alertMsg: 'Adding new password ...',
      };
    }
    case 'ADD_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: 'Add password success',
      };
    }
    case 'ADD_PASSWORD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        alertMsg: 'Add password failed',
      };
    }
    case 'LOGOUT': {
      return {
        isLoading: false,
        isError: false,
        isSuccess: false,
        isPasswordExist: false,
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
