const initialState = {
  isLogin: false,
  token: '',
  id: 0,
  isCreated: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      console.log('login pending');
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Logging in ...',
      };
    }
    case 'LOGIN_FULFILLED': {
      console.log('login fullfiled');
      return {
        ...state,
        isLogin: true,
        isError: false,
        token: action.payload.data.token,
        user: action.payload.data.user,
        alertMsg: 'Login successfull',
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isError: true,
        alertMsg: 'Login failed',
      };
    }
    case 'SIGNUP_PENDING': {
      console.log('login pending');
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Signing up ...',
      };
    }
    case 'SIGNUP_FULFILLED': {
      console.log('Signup fullfiled');
      return {
        ...state,
        isLogin: true,
        isError: false,
        token: action.payload.data.token,
        user: action.payload.data.user,
        isCreated: action.payload.data.created,
        alertMsg: action.payload.data.message,
      };
    }
    case 'SIGNUP_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isError: true,
        alertMsg: 'Signup failed',
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLogin: false,
        isError: false,
        token: '',
        alertMsg: 'Logout successfull',
      };
    }
    default: {
      return state;
    }
  }
};
