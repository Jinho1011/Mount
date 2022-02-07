const initialState = {
  jwt: '',
  signupSuccess: false,
  loginSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SOCIALMEDIA_SIGNUP': {
      // 서버로 정보를 보내면 jwt를 받음
      // const jwt = await getJwt(action.payload);
      const jwt = 'asfasdasfasd';
      return {...state, signupSuccess: action.payload, jwt};
    }
    case 'SIGNUP_USER': {
      const jwt = 'asfasdasfasd';
      return {...state, signupSuccess: action.payload, jwt};
    }
    case 'LOGIN_USER': {
      const jwt = 'asfasdasfasd';
      return {...state, signupSuccess: action.payload, jwt};
    }
    case 'LOGOUT': {
      return {signupSuccess: false, loginSuccess: false, jwt: ''};
    }
    default:
      return state;
  }
};
