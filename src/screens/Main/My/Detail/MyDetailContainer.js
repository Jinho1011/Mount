import React, {useState, useEffect} from 'react';
import MyDetailPresenter from './MyDetailPresenter';
import {USER_KEY, getData, removeData} from '../../../../api/storage';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
  });
  const navigation = useNavigation();
  const myMainPress = () => navigation.navigate('MyMain');
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

  const logOutPress = async () => {
    await removeData(USER_KEY);
  };

  return (
    <MyDetailPresenter
      state={state}
      logOutPress={logOutPress}
      myMainPress={myMainPress}
    />
  );
};
