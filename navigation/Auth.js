import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/login';
import Signup from '../screens/Auth/signup';
import Tutorial from '../screens/Auth/tutorial';

const AuthNavigator = createStackNavigator();

export const Details = () => {
  <AuthNavigator.Navigator>
    <AuthNavigator.Screen name="Login" component={Login} />
    <AuthNavigator.Screen name="Signup" component={Signup} />
    <AuthNavigator.Screen name="Tutorial" component={Tutorial} />
  </AuthNavigator.Navigator>;
};
