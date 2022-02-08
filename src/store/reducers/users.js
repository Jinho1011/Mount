const initialState = {
  jwt: '',
  signupSuccess: false,
  loginSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH': {
      return {...state, signupSuccess: action.payload, jwt: action.jwt};
    }
    case 'LOGOUT': {
      return {signupSuccess: false, loginSuccess: false, jwt: ''};
    }
    default:
      return state;
  }
};
