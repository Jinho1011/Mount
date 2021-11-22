import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Select from '../screens/Auth/select';
import SignupDetail from '../screens/Auth/signup/Detail';
import SignupMain from '../screens/Auth/signup/Main';
import SignupTos from '../screens/Auth/signup/Tos';
import LoginDetail from '../screens/Auth/login/Detail';
import LoginMain from '../screens/Auth/login/Main';
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
      <AuthNavigator.Screen
        name="Tutorial"
        component={Tutorial}
        options={{headerShown: false}}
      />
    </AuthNavigator.Group>
  </AuthNavigator.Navigator>
);
