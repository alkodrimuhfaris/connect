const initialState = {
  isLogin: false,
  token: '',
  id: null,
  isCreated: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  authState: true,
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
        id: action.payload.data.user.id,
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
        id: action.payload.data.user.id,
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
        id: null,
        authState: true,
        alertMsg: 'Logout successfull',
      };
    }
    case 'IN_MAIN_SCREEN': {
      return {
        ...state,
        authState: false,
      };
    }
    default: {
      return state;
    }
  }
};
