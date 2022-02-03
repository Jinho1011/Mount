import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SignupMainPresenter from './SignupMainPresenter';
import {useNavigation} from '@react-navigation/native';
import {login, getProfile} from '@react-native-seoul/kakao-login';
//import {NaverLogin, getNaverProfile} from '@react-native-seoul/naver-login';
import {AsyncStorage} from 'react-native';

export let KakaoBody = {
  accessToken: '',
  refreshToken: '',
  email: '',
  nickname: '',
};

export default () => {
  const users = useSelector(state => state.users);
  const navigation = useNavigation();
  const signupDetailPress = () => navigation.navigate('SignupDetail');
  const signInWithKakao = async () => {
    const token = await login();
    const profile = await getProfile();

    if (token) {
      KakaoBody = {
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        email: profile.email,
        nickname: profile.nickname,
      };
      AsyncStorage.setItem(
        'userData',
        JSON.stringify({
          KakaoBody,
        }),
      );
      navigation.navigate('Tutorial');
    }
  };
  return (
    <SignupMainPresenter
      signupDetailPress={signupDetailPress}
      signInWithKakao={signInWithKakao}
    />
  );
};
