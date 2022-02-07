import React from 'react';
import SignupMainPresenter from './SignupMainPresenter';
import {useNavigation} from '@react-navigation/native';
import {login, getProfile} from '@react-native-seoul/kakao-login';
//import {NaverLogin, getNaverProfile} from '@react-native-seoul/naver-login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {USER_KEY, storeData} from '../../../../api/storage';

export let KakaoSignupBody = {
  accessToken: '',
  refreshToken: '',
  email: '',
  nickname: '',
};

export let GoogleSignupBody = {
  accessToken: '',
  email: '',
  name: '',
};

export default () => {
  const navigation = useNavigation();
  const signupDetailPress = () => navigation.navigate('SignupDetail');
  const signupWithKakao = async () => {
    const token = await login();
    const profile = await getProfile();

    if (token) {
      KakaoSignupBody = {
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        email: profile.email,
        nickname: profile.nickname,
      };
      await storeData(USER_KEY, KakaoSignupBody);
      navigation.navigate('Tutorial');
    }
  };
  const signupWithGoogle = async () => {
    GoogleSignin.configure({});
    const token = await GoogleSignin.getTokens();
    const profile = await GoogleSignin.signIn();
    if (token) {
      GoogleSignupBody = {
        //accessToken: token.accessToken,
        email: profile.user.email,
        pw: 'test1234!',
        name: profile.user.name,
        birthday: null,
        platform: '',
      };

      await storeData(USER_KEY, GoogleSignupBody);

      navigation.navigate('Tutorial');
    }
  };
  return (
    <SignupMainPresenter
      signupDetailPress={signupDetailPress}
      signupWithKakao={signupWithKakao}
      signupWithGoogle={signupWithGoogle}
    />
  );
};
