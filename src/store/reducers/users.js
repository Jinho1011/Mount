const initialState = {
  signupSuccess: false,
  loginSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'KAKAO_SIGNUP': {
      return {...state, signupSuccess: action.payload};
    }
    case 'SIGNUP_USER': {
      return {...state, signupSuccess: action.payload};
    }
    case 'LOGIN_USER': {
      return {...state, loginSuccess: action.payload};
    }
    default:
      return state;
  }
};
