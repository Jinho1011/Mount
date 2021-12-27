import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tab';
import Details from './Details';
import Plan from '../screens/Main/Plan';

const MainNavigator = createStackNavigator();

export default () => (
  <MainNavigator.Navigator>
    <MainNavigator.Screen
      name="Tabs"
      component={Tabs}
      options={{headerShown: false}}
    />
    <MainNavigator.Screen
      name="Details"
      component={Details}
      options={{headerShown: false}}
    />
    <MainNavigator.Screen
      name="Planner"
      component={Plan}
      options={{headerShown: false}}
    />
  </MainNavigator.Navigator>
);
