import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SignupMainPresenter from './SignupMainPresenter';
import {useNavigation} from '@react-navigation/native';
import {kakaoSignup} from '../../../../store/actions/users';
import {login, getProfile} from '@react-native-seoul/kakao-login';

export default () => {
  const users = useSelector(state => state.users);
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
    const token = await login();
    const profile = await getProfile();

    if (token) {
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

      dispatch(kakaoSignup(body));
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
