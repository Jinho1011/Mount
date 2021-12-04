import Axios from 'axios';
export const INIT_FOODS = 'INIT_FOODS';
export const INIT_RECS = 'INIT_RECS';
export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';

//서버에 리퀘스트 날리고 받은 데이터를 request에 저장
export const loginUser = dataToSubmit => {
  const request = Axios.post('/api/login', dataToSubmit).then(
    response => response.data,
  );
  return {
    type: LOGIN_USER,
    payload: request, //reducer
  };
};

//서버에 리퀘스트 날리고 받은 데이터를 request에 저장
export const signupUser = dataToSubmit => {
  const request = Axios.post('/api/signup', dataToSubmit).then(response =>
    console.log(response.data),
  );
  return {
    type: SIGNUP_USER,
    payload: request, //reducer로
  };
};
export const initFoods = foods => {
  return {type: INIT_FOODS, foods};
};

export const initRecs = recs => {
  return {type: INIT_RECS, recs};
};
