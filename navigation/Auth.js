import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupDetail from '../screens/Auth/Signup/Detail';
import SignupMain from '../screens/Auth/Signup/Main';
import LoginDetail from '../screens/Auth/Login/Detail';
import LoginMain from '../screens/Auth/Login/Main';
import Tutorial from '../screens/Auth/Tutorial';

const AuthNavigator = createStackNavigator();

export default () => (
  <AuthNavigator.Navigator>
    <AuthNavigator.Group screenOptions={{headerShown: false}}>
      <AuthNavigator.Screen name="SignupMain" component={SignupMain} />
      <AuthNavigator.Screen name="SignupDetail" component={SignupDetail} />
    </AuthNavigator.Group>
    <AuthNavigator.Group screenOptions={{headerShown: false}}>
      <AuthNavigator.Screen name="LoginMain" component={LoginMain} />
      <AuthNavigator.Screen name="LoginDetail" component={LoginDetail} />
    </AuthNavigator.Group>
    <AuthNavigator.Screen
      name="Tutorial"
      component={Tutorial}
      options={{headerShown: false}}
    />
  </AuthNavigator.Navigator>
);
