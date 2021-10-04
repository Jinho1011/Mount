import React from 'react';
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import styled from 'styled-components';
import {HeaderRight, HeaderTitle} from '../components/TransparentHeader';

import HomeMain from '../screens/Main/Home/Main';
import HomeDetail from '../screens/Main/Home/Detail';
import FoodSet from '../screens/Main/Detail/FoodSet/FoodSetPresenter';

const HomeNavigator = createStackNavigator();

const Homes = () => {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Group
        screenOptions={{
          headerTitle: () => <HeaderTitle title="Home" />,
          headerStyle: {
            backgroundColor: '#000000',
            height: 58,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerRight: () => <HeaderRight />,
        }}>
        <HomeNavigator.Screen name="HomeMain" component={HomeMain} />
        <HomeNavigator.Screen name="HomeDetail" component={HomeDetail} />
        <HomeNavigator.Screen name="FoodSet" component={FoodSet} />
      </HomeNavigator.Group>
    </HomeNavigator.Navigator>
  );
};

export default Homes;