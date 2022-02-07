import React, {useEffect} from 'react';
import TutorialPresenter from './tutorialPresenter';
import {
  socialMediaSignup,
  signupUser,
  loginUser,
} from '../../../store/actions/users';
import {KakaoBody, GoogleBody} from '../signup/Main/SignupMainContainer';
import {EtcSignBody} from '../signup/Detail/SignupDetailContainer';
import {EtcLoginBody} from '../login/Detail/LoginDetailContainer';
import {useDispatch} from 'react-redux';
import {BackHandler} from 'react-native';

export default () => {
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const dispatch = useDispatch();
  const startPress = () => {
    if (KakaoBody.accessToken !== '') {
      dispatch(socialMediaSignup(KakaoBody));
    } else if (GoogleBody.accessToken !== '') {
      dispatch(socialMediaSignup(GoogleBody));
    } else if (EtcSignBody.email !== '') {
      dispatch(signupUser(EtcSignBody));
    } else if (EtcLoginBody.email !== '') {
      dispatch(loginUser(EtcLoginBody));
    }
  };
  return <TutorialPresenter startPress={startPress} />;
};
