import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tab';

const MainNavigator = createStackNavigator();

export default () => (
  <MainNavigator.Navigator>
    <MainNavigator.Screen
      name="Tabs"
      component={Tabs}
      options={{headerShown: false}}
    />
  </MainNavigator.Navigator>
);
