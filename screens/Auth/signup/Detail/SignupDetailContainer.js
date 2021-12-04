import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signupUser} from '../../../../store/actions/recommands';
import SignupDetailPresenter from './SignupDetailPresenter';

export default () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: [],
    emailIsEdited: false,
    emailValid: false,
    password: [],
    passwordIsEdited: false,
    passwordValid: false,
    passwordCheck: [],
    passwordCheckIsEdited: false,
    passwordCheckValid: false,
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
      passwordCheckValid: state.passwordCheck && state.passwordCheck === p,
    });
  };

  const passwordCheckChangeHandler = pc => {
    setState({
      ...state,
      passwordCheck: pc,
      passwordCheckIsEdited: true,
      passwordCheckValid: state.password && state.password === pc,
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    let body = {
      email: state.email,
      password: state.password,
    };
    dispatch(signupUser(body)); //디스패치 액션
  };

  return (
    <SignupDetailPresenter
      state={state}
      emailChangeHandler={emailChangeHandler}
      passwordChangeHandler={passwordChangeHandler}
      passwordCheckChangeHandler={passwordCheckChangeHandler}
      submitHandler={submitHandler}
    />
  );
};
//.then(response => {
//  if (response.payload.signupSuccess) {
//    console.log('success');
// } else {
//    console.log('fail');
//  }
//});
