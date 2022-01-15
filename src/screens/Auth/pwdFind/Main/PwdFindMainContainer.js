import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {loginUser} from '../../../../store/actions/users';
import PwdFindMainPresenter from './PwdFindMainPresenter';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [state, setState] = useState({
    email: [],
    emailBlank: false,
    emailValid: false,
  });

  const emailChangeHandler = e => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setState({
      email: e,
      emailBlank: e.trim() !== '',
      emailValid: emailRegex.test(e),
    });
  };
  const loginSuccessHandler = e => {
    e.preventDefault();
    let body = {
      email: state.email,
      password: state.password,
    };
    const login = dispatch(loginUser(body));
    if (login.payload === true) {
      console.log('success');
    } else {
      console.log('fail');
    }
  };

  const pwdFindDetailPress = () => navigation.navigate('PwdFindDetail'); //다음으로 이동

  const onPressHandler = e => {
    loginSuccessHandler(e);
    pwdFindDetailPress();
  };

  return (
    <PwdFindMainPresenter
      state={state}
      emailChangeHandler={emailChangeHandler}
      onPressHandler={onPressHandler}
    />
  );
};
