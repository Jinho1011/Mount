import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {signupUser} from '../../../../store/actions/users';
import SignupDetailPresenter from './SignupDetailPresenter';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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

  const signupSuccessHandler = e => {
    e.preventDefault();
    let body = {
      email: state.email,
      password: state.password,
    };
    const signup = dispatch(signupUser(body));
    if (signup.payload === true) {
      console.log('success');
    } else {
      console.log('fail');
    }
  };

  const signupTosPress = () => navigation.navigate('SignupTos'); //다음으로 이동

  const onPressHandler = e => {
    signupSuccessHandler(e);
    signupTosPress();
  };

  return (
    <SignupDetailPresenter
      state={state}
      emailChangeHandler={emailChangeHandler}
      passwordChangeHandler={passwordChangeHandler}
      passwordCheckChangeHandler={passwordCheckChangeHandler}
      onPressHandler={onPressHandler}
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