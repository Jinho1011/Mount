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
        email: profile.email,
        pw: '',
        name: profile.nickname,
        access_token: token.accessToken,
        identifier: profile.id,
        platform: 'Kakaotalk',
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
        email: profile.user.email,
        pw: '',
        name: profile.user.name,
        access_token: token.accessToken,
        identifier: profile.user.id,
        platform: 'Google',
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
