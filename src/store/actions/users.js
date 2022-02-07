export const AUTH = 'AUTH';
export const LOGOUT = 'LOGOUT';

export const auth = dataToSubmit => {
  // 서버에는 액세스토큰, Email, nickname 서버로 전송
  // jwt = asdaskjfhasjkjkasld
  let req = true;
  return {
    type: AUTH,
    payload: dataToSubmit, //reducer로
  };
};

export const logOut = () => {
  let req = false;
  return {
    type: LOGOUT,
    payload: req, //reducer
  };
};
