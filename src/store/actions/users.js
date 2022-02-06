export const SOCIALMEDIA_SIGNUP = 'SOCIALMEDIA_SIGNUP';
export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGOUT = 'LOGOUT';

export const socialMediaSignup = dataToSubmit => {
  // 서버에는 액세스토큰, Email, nickname 서버로 전송
  // jwt = asdaskjfhasjkjkasld
  let req = true;
  return {
    type: SOCIALMEDIA_SIGNUP,
    payload: req, //reducer로
  };
};

//서버에 리퀘스트 날리고 받은 데이터를 request에 저장
export const signupUser = dataToSubmit => {
  let req = true;
  return {
    type: SIGNUP_USER,
    payload: req, //reducer로
  };
};
//서버에 리퀘스트 날리고 받은 데이터를 request에 저장
export const loginUser = dataToSubmit => {
  let req = true;
  return {
    type: LOGIN_USER,
    payload: req, //reducer
  };
};

export const logOut = () => {
  let req = false;
  return {
    type: LOGOUT,
    payload: req, //reducer
  };
};
