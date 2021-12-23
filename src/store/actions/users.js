export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';

//서버에 리퀘스트 날리고 받은 데이터를 request에 저장
export const signupUser = dataToSubmit => {
  let req;
  if (
    dataToSubmit.email === 'amykim928@naver.com' &&
    dataToSubmit.password === 'test1234!'
  ) {
    req = true;
  } else {
    req = false;
  }
  return {
    type: SIGNUP_USER,
    payload: req, //reducer로
  };
};
//서버에 리퀘스트 날리고 받은 데이터를 request에 저장
export const loginUser = dataToSubmit => {
  let req;
  if (
    dataToSubmit.email === 'amykim928@naver.com' &&
    dataToSubmit.password === 'test1234!'
  ) {
    req = true;
  } else {
    req = false;
  }
  return {
    type: LOGIN_USER,
    payload: req, //reducer
  };
};
