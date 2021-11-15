import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderRight, HeaderTitle} from '../components/Header/TransparentHeader';
import FoodSet from '../screens/Main/Detail/FoodSet';
import FoodSingle from '../screens/Main/Detail/FoodSingle';
import RecreationSet from '../screens/Main/Detail/RecreationSet';
import RecreationSingle from '../screens/Main/Detail/RecreationSingle';

const DetailNavigator = createStackNavigator();

const Details = () => (
  <DetailNavigator.Navigator
    screenOptions={{
      headerTitle: () => <HeaderTitle title="Home" />,
      headerRight: () => <HeaderRight />,
      headerMode: 'float',
      headerStyle: {
        height: 54,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTransparent: true,
    }}>
    <DetailNavigator.Screen name="FoodSet" component={FoodSet} />
    <DetailNavigator.Screen name="FoodSingle" component={FoodSingle} />
    <DetailNavigator.Screen name="RecreationSet" component={RecreationSet} />
    <DetailNavigator.Screen
      name="RecreationSingle"
      component={RecreationSingle}
    />
  </DetailNavigator.Navigator>
);

export default Details;
