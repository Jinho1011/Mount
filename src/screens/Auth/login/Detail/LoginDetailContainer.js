import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LoginDetailPresenter from './LoginDetailPresenter';
import {USER_KEY, setData} from '../../../../api/storage';

export let EtcLoginBody = {email: '', password: ''};

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [state, setState] = useState({
    email: [],
    emailBlank: false,
    emailValid: false,
    password: [],
    passwordBlank: false,
    passwordValid: false,
    passwordCheck: [],
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

  const loginSuccessHandler = async e => {
    e.preventDefault();
    EtcLoginBody = {
      email: state.email,
      password: state.password,
    };

    await setData(USER_KEY, EtcLoginBody);

    navigation.navigate('Tutorial');
  };

  return (
    <LoginDetailPresenter
      state={state}
      emailChangeHandler={emailChangeHandler}
      passwordChangeHandler={passwordChangeHandler}
      loginSuccessHandler={loginSuccessHandler}
    />
  );
};
