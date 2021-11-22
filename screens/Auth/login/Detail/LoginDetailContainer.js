import React, {useState} from 'react';
import LoginDetailPresenter from './LoginDetailPresenter';

export default () => {
  const [state, setState] = useState({
    email: [],
    emailIsEdited: false,
    emailValid: false,
    password: [],
    passwordIsEdited: false,
    passwordValid: false,
  });

  const emailChangeHandler = e => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setState({
      ...state,
      email: e,
      emailValid: emailRegex.test(e),
      emailIsEdited: true,
    });
  };

  const passwordChangeHandler = p => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    setState({
      ...state,
      password: p,
      passwordValid: passwordRegex.test(p),
      passwordIsEdited: true,
    });
  };

  return (
    <LoginDetailPresenter
      state={state}
      emailChangeHandler={emailChangeHandler}
      passwordChangeHandler={passwordChangeHandler}
    />
  );
};
