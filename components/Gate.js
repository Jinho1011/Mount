import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from '../navigation/Auth';
import Main from '../navigation/Main';
import config from './config';

export default () => {
  var isLoggedIn = config;

  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
