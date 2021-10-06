import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FoodSet from '../screens/Main/Detail/FoodSet';
import FoodSingle from '../screens/Main/Detail/FoodSingle';
import RecreationSet from '../screens/Main/Detail/RecreationSet';
import RecreationSingle from '../screens/Main/Detail/RecreationSingle';

const DetailNavigator = createStackNavigator();

export const Details = () => {
  <DetailNavigator.Navigator>
    <DetailNavigator.Screen
      name="FoodSet"
      component={FoodSet}
      options={{
        headerTransparent: true,
      }}
    />
    <DetailNavigator.Screen name="FoodSingle" component={FoodSingle} />
    <DetailNavigator.Screen name="RecreationSet" component={RecreationSet} />
    <DetailNavigator.Screen
      name="RecreationSingle"
      component={RecreationSingle}
    />
  </DetailNavigator.Navigator>;
};
