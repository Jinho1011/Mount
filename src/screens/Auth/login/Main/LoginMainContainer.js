import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {login, getProfile} from '@react-native-seoul/kakao-login';
//import {NaverLogin, getNaverProfile} from '@react-native-seoul/naver-login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {USER_KEY, storeData} from '../../../../api/storage';
import LoginMainPresenter from './LoginMainPresenter';

export let KakaoLoginBody = {
  accessToken: '',
  refreshToken: '',
  email: '',
  nickname: '',
};

export let GoogleLoginBody = {
  accessToken: '',
  email: '',
  name: '',
};

export default () => {
  const navigation = useNavigation();
  const loginDetailPress = () => navigation.navigate('LoginDetail');
  const loginWithKakao = async () => {
    const token = await login();
    const profile = await getProfile();

    if (token) {
      KakaoLoginBody = {
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        email: profile.email,
        nickname: profile.nickname,
      };
      await storeData(USER_KEY, KakaoLoginBody);
      navigation.navigate('Tutorial');
    }
  };
  const loginWithGoogle = async () => {
    GoogleSignin.configure({});
    const token = await GoogleSignin.getTokens();
    const profile = await GoogleSignin.signIn();
    if (token) {
      GoogleLoginBody = {
        //accessToken: token.accessToken,
        email: profile.user.email,
        pw: 'test1234!',
        name: profile.user.name,
        birthday: null,
        platform: '',
      };

      await storeData(USER_KEY, GoogleLoginBody);

      navigation.navigate('Tutorial');
    }
  };

  return (
    <LoginMainPresenter
      loginDetailPress={loginDetailPress}
      loginWithKakao={loginWithKakao}
      loginWithGoogle={loginWithGoogle}
    />
  );
};
