import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import SignupMainPresenter from './SignupMainPresenter';
import {useNavigation} from '@react-navigation/native';
import {kakaoSignup} from '../../../../store/actions/users';
import {login, getProfile} from '@react-native-seoul/kakao-login';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const signupDetailPress = () => navigation.navigate('SignupDetail');
  const [state, setState] = useState({
    accessToken: '',
    refreshToken: '',
    email: '',
    nickname: '',
  });

  const signInWithKakao = async () => {
    console.log(state);
    const token = await login();
    const profile = await getProfile();
    setState({
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
      email: profile.email,
      nickname: profile.nickname,
    });

    let body = {
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
      email: profile.email,
      nickname: profile.nickname,
    };
    const signup = dispatch(kakaoSignup(body));
    if (signup.payload === true) {
      console.log('success');
    } else {
      console.log('fail');
    }
  };

  return (
    <SignupMainPresenter
      signupDetailPress={signupDetailPress}
      signInWithKakao={signInWithKakao}
    />
  );
};
