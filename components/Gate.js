import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from '../navigation/Auth';
import Main from '../navigation/Main';

export default () => {
  var isLoggedIn = false;

  return (
    <NavigationContainer>
      {/* {isLoggedIn ? <Main /> : <Auth />} */}
      <Main></Main>
    </NavigationContainer>
  );
};
