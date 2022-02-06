import React, {useState, useEffect} from 'react';
import MyDetailPresenter from './MyDetailPresenter';
import {
  USER_KEY,
  getData,
  removeData,
  mergeData,
} from '../../../../api/storage';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logOut} from '../../../../store/actions/users';

export default () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      const value = await getData(USER_KEY);
      if (value) {
        setState({
          email: value.email,
          password: value.password,
          name: value.name,
        });
      }
    };
    init();
  }, []);

  const nicknameChangeHandler = e => {
    setState({
      ...state,
      name: e,
    });
  };
  const logOutPress = async () => {
    await removeData(USER_KEY);
    dispatch(logOut());
  };

  const savePress = async () => {
    const nickname = {
      name: state.name,
    };
    await mergeData(USER_KEY, nickname);
    navigation.navigate('MyMain');
  };

  return (
    <MyDetailPresenter
      state={state}
      logOutPress={logOutPress}
      savePress={savePress}
      nicknameChangeHandler={nicknameChangeHandler}
    />
  );
};
