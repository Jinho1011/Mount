import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SignupDetailPresenter from './SignupDetailPresenter';
import {AsyncStorage} from 'react-native';

export let EtcSignBody = {email: '', password: ''};
export default () => {
  const navigation = useNavigation();

  const [state, setState] = useState({
    email: [],
    emailBlank: false,
    emailValid: false,
    password: [],
    passwordBlank: false,
    passwordValid: false,
    passwordCheck: [],
    passwordCheckBlank: false,
    passwordCheckValid: false,
  });

  const emailChangeHandler = e => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setState({
      ...state,
      email: e,
      emailBlank: e.trim() !== '',
      emailValid: emailRegex.test(e),
    });
  };

  const passwordChangeHandler = p => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    setState({
      ...state,
      password: p,
      passwordBlank: p.trim() !== '',
      passwordValid: passwordRegex.test(p),
      passwordCheckValid: state.passwordCheck && state.passwordCheck === p,
    });
  };

  const passwordCheckChangeHandler = pc => {
    setState({
      ...state,
      passwordCheck: pc,
      passwordCheckBlank: pc.trim() !== '',
      passwordCheckValid: state.password && state.password === pc,
    });
  };

  const signupSuccessHandler = e => {
    e.preventDefault();
    EtcSignBody = {
      email: state.email,
      password: state.password,
    };
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    );
    navigation.navigate('SignupTos');
  };

  return (
    <SignupDetailPresenter
      state={state}
      emailChangeHandler={emailChangeHandler}
      passwordChangeHandler={passwordChangeHandler}
      passwordCheckChangeHandler={passwordCheckChangeHandler}
      signupSuccessHandler={signupSuccessHandler}
    />
  );
};
