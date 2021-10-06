import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderRight, HeaderTitle} from '../components/TransparentHeader';
import FoodSet from '../screens/Main/Detail/FoodSet';
import FoodSingle from '../screens/Main/Detail/FoodSingle';
import RecreationSet from '../screens/Main/Detail/RecreationSet';
import RecreationSingle from '../screens/Main/Detail/RecreationSingle';

const DetailNavigator = createStackNavigator();

const Details = () => (
  <DetailNavigator.Navigator>
    <DetailNavigator.Group
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
    </DetailNavigator.Group>
  </DetailNavigator.Navigator>
);

export default Details;
