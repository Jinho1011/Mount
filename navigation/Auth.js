import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupDetail from '../screens/Auth/signup/Detail';
import SignupMain from '../screens/Auth/signup/Main';
import LoginDetail from '../screens/Auth/login/Detail';
import LoginMain from '../screens/Auth/login/Main';
import Tutorial from '../screens/Auth/tutorial';

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
