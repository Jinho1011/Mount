import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {loginUser} from '../../../../store/actions/users';
import LoginDetailPresenter from './LoginDetailPresenter';

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

  const tutorialPress = () => navigation.navigate('Tutorial'); //다음으로 이동

  const onPressHandler = e => {
    loginSuccessHandler(e);
    tutorialPress();
  };

  return (
    <LoginDetailPresenter
      state={state}
      emailChangeHandler={emailChangeHandler}
      passwordChangeHandler={passwordChangeHandler}
      onPressHandler={onPressHandler}
    />
  );
};
