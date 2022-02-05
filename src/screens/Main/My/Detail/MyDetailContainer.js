import React, {useState, useEffect} from 'react';
import MyDetailPresenter from './MyDetailPresenter';
import {AsyncStorage} from 'react-native';
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
    AsyncStorage.getItem('userData', (err, result) => {
      const value = JSON.parse(result);
      if (value) {
        setState({
          email: value.email,
          password: value.password,
          name: value.name,
        });
      }
    });
  }, []);
  const logOutPress = () => {
    AsyncStorage.removeItem('userData');
  };
  return (
    <MyDetailPresenter
      state={state}
      logOutPress={logOutPress}
      myMainPress={myMainPress}
    />
  );
};
