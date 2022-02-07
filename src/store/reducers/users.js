import {getJWT} from '../../api/api';
const initialState = {
  jwt: '',
  signupSuccess: false,
  loginSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH': {
      // 서버로 정보를 보내면 jwt를 받음
      // const jwt = await getJwt(action.payload);
      // let jwt;
      // const jwtMake = async () => {
      //   jwt = await getJWT(action.payload);
      // };
      // jwtMake();
      const jwt = 'asdfsdfjalsdf';
      return {...state, signupSuccess: action.payload, jwt};
    }
    case 'LOGOUT': {
      return {signupSuccess: false, loginSuccess: false, jwt: ''};
    }
    default:
      return state;
  }
};
