import React, {useEffect} from 'react';
import TutorialPresenter from './tutorialPresenter';
import {auth} from '../../../store/actions/users';
import {useDispatch} from 'react-redux';
import {BackHandler} from 'react-native';
import {USER_KEY, getData} from '../../../api/storage';
import {getJWT} from '../../../api/api';

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
  const startPress = async () => {
    const value = await getData(USER_KEY);
    const jwt = await getJWT(value);

    dispatch(auth(value, jwt));
  };
  return <TutorialPresenter startPress={startPress} />;
};
