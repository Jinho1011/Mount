export const AUTH = 'AUTH';
export const LOGOUT = 'LOGOUT';

export const auth = (dataToSubmit, jwt) => {
  return {
    type: AUTH,
    payload: dataToSubmit,
    jwt,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
    payload: false,
  };
};
