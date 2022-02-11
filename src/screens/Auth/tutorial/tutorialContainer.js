
import React, {useState, useEffect} from 'react';
import TutorialPresenter from './tutorialPresenter';
import {auth} from '../../../store/actions/users';
import {useDispatch} from 'react-redux';
import {BackHandler} from 'react-native';
import {USER_KEY, getData} from '../../../api/storage';
import {getJWT} from '../../../api/api';

export default () => {

  const [state, setState] = useState({
    jwt: {},
    value: {},
  });

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    const init = async () => {
      const value = await getData(USER_KEY);
      let jwt = await getJWT(value);
      jwt = jwt === undefined ? {} : jwt;
      setState({value, jwt});
    };
    init();


    return () => backHandler.remove();
  }, []);

  const dispatch = useDispatch();
  const startPress = async () => {

    dispatch(auth(state.value, state.jwt));
  };
  return <TutorialPresenter startPress={startPress} state={state} />;

};
