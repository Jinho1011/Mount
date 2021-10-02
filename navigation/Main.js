import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tab';
import FoodSetPresenter from '../screens/Main/Detail/FoodSet/FoodSetPresenter';

const MainNavigator = createStackNavigator();

export default () => (
  <MainNavigator.Navigator>
    <MainNavigator.Screen
      name="Tabs"
      component={Tabs}
      options={{headerShown: false}}
    />
    <MainNavigator.Screen name="Detail" component={FoodSetPresenter} />
  </MainNavigator.Navigator>
);
