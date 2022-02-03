import React from 'react';
import {useSelector} from 'react-redux';
import SignupMainPresenter from './SignupMainPresenter';
import {useNavigation} from '@react-navigation/native';
import {login, getProfile} from '@react-native-seoul/kakao-login';
//import {NaverLogin, getNaverProfile} from '@react-native-seoul/naver-login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AsyncStorage} from 'react-native';

export let KakaoBody = {
  accessToken: '',
  refreshToken: '',
  email: '',
  nickname: '',
};

export let GoogleBody = {
  accessToken: '',
  email: '',
  name: '',
};

export default () => {
  const users = useSelector(state => state.users);
  const navigation = useNavigation();
  const signupDetailPress = () => navigation.navigate('SignupDetail');
  const signupWithKakao = async () => {
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
  const signupWithGoogle = async () => {
    GoogleSignin.configure({});
    const token = await GoogleSignin.getTokens();
    const profile = await GoogleSignin.signIn();
    if (token) {
      GoogleBody = {
        accessToken: token.accessToken,
        email: profile.user.email,
        name: profile.user.name,
      };
      AsyncStorage.setItem(
        'userData',
        JSON.stringify({
          GoogleBody,
        }),
      );
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
