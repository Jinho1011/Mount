import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Main/Home';
import Search from '../screens/Main/Search';
import Favorite from '../screens/Main/Favorite';
import My from '../screens/Main/My';
import FoodSetPresenter from '../screens/Main/Detail/FoodSet/FoodSetPresenter';

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator>
    <TabsNavigator.Screen name="Home" component={Home} />
    <TabsNavigator.Screen name="Search" component={Search} />
    <TabsNavigator.Screen name="Fav" component={Favorite} />
    <TabsNavigator.Screen name="MyPage" component={My} />
  </TabsNavigator.Navigator>
);

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
