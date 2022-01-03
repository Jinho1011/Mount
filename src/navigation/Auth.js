import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Select from '../screens/Auth/select';
import SignupDetail from '../screens/Auth/signup/Detail';
import SignupMain from '../screens/Auth/signup/Main';
import SignupTos from '../screens/Auth/signup/Tos';
import LoginDetail from '../screens/Auth/login/Detail';
import LoginMain from '../screens/Auth/login/Main';
import PwdFindDetail from '../screens/Auth/pwdFind/Detail';
import PwdFindMain from '../screens/Auth/pwdFind/Main';
import Tutorial from '../screens/Auth/tutorial';

const AuthNavigator = createStackNavigator();

export default () => (
  <AuthNavigator.Navigator>
    <AuthNavigator.Group screenOptions={{headerShown: false}}>
      <AuthNavigator.Screen name="Select" component={Select} />
      <AuthNavigator.Screen name="SignupMain" component={SignupMain} />
      <AuthNavigator.Screen name="SignupDetail" component={SignupDetail} />
      <AuthNavigator.Screen name="SignupTos" component={SignupTos} />
      <AuthNavigator.Screen name="LoginMain" component={LoginMain} />
      <AuthNavigator.Screen name="LoginDetail" component={LoginDetail} />
      <AuthNavigator.Screen name="PwdFindMain" component={PwdFindMain} />
      <AuthNavigator.Screen name="PwdFindDetail" component={PwdFindDetail} />
      <AuthNavigator.Screen name="Tutorial" component={Tutorial} />
    </AuthNavigator.Group>
  </AuthNavigator.Navigator>
);
