import React from 'react';
import TutorialPresenter from './tutorialPresenter';
import {kakaoSignup, signupUser, loginUser} from '../../../store/actions/users';
import {KakaoBody} from '../signup/Main/SignupMainContainer';
import {EtcSignBody} from '../signup/Detail/SignupDetailContainer';
import {EtcLoginBody} from '../login/Detail/LoginDetailContainer';
import {useDispatch} from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const startPress = () => {
    if (KakaoBody.accessToken !== '') {
      dispatch(kakaoSignup(KakaoBody));
    } else if (EtcSignBody.email !== '') {
      dispatch(signupUser(EtcSignBody));
    } else if (EtcLoginBody.email !== '') {
      dispatch(loginUser(EtcLoginBody));
    }
  };

  return <TutorialPresenter startPress={startPress} />;
};
