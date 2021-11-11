import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import styled from 'styled-components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HeaderRight, HeaderTitle} from '../components/Header';

import HomeMain from '../screens/Main/Home/Main';
import FoodDetail from '../screens/Main/Home/FoodDetail';
import RecDetail from '../screens/Main/Home/RecDetail';

const HomeNavigator = createStackNavigator();

const HomeTab = createMaterialTopTabNavigator();

function HomeTabs(navigation) {
  return (
    <HomeTab.Navigator
      initialRouteName={navigation.route.params.initialRoute}
      screenOptions={{
        tabBarActiveTintColor: '#E2F955',
        tabBarInactiveTintColor: '#8B8B8B',
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: 'NotoSansKR-Bold',
          lineHeight: 24,
        },
        tabBarStyle: {
          shadowColor: '#fff',
          backgroundColor: '#000000',
          paddingLeft: 22,
          paddingRight: 22,
        },
        tabBarItemStyle: {width: 60},
        tabBarIndicatorContainerStyle: {
          marginLeft: 27,
          width: 100,
        },
        tabBarIndicatorStyle: {
          paddingLeft: 22,
          backgroundColor: '#E2F955',
          height: 4,
          elevation: 0,
        },
      }}>
      <HomeTab.Screen
        name="HomeFoodDetail"
        component={FoodDetail}
        options={{title: '음식'}}
      />
      <HomeTab.Screen
        name="HomeRecDetail"
        component={RecDetail}
        options={{title: '레크'}}
      />
    </HomeTab.Navigator>
  );
}

const Homes = () => {
  return (
    <HomeNavigator.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeNavigator.Group
        screenOptions={{
          headerTitle: () => <HeaderTitle title="Home" />,
          headerStyle: {
            backgroundColor: '#000000',
            height: 58,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
        }}>
        <HomeNavigator.Screen name="HomeMain" component={HomeMain} />
        <HomeNavigator.Screen name="HomeTabs" component={HomeTabs} />
      </HomeNavigator.Group>
    </HomeNavigator.Navigator>
  );
};

export default Homes;
