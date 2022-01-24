const initialState = {
  jwt: '',
  signupSuccess: false,
  loginSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'KAKAO_SIGNUP': {
      // 서버로 정보를 보내면 jwt를 받음
      // const jwt = await getJwt(action.payload);
      const jwt = 'asfasdasfasd';
      return {...state, signupSuccess: action.payload, jwt};
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
