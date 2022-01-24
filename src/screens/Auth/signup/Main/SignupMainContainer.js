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
  const [result, setResult] = useState('');

  const signInWithKakao = async () => {
    const token = await login();

    setResult(JSON.stringify(token));
    console.log(token);
  };

  const getKakaoProfile = async () => {
    const profile = await getProfile();

    setResult(JSON.stringify(profile));

    const signup = dispatch(kakaoSignup(profile));
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
      getKakaoProfile={getKakaoProfile}
    />
  );
};
