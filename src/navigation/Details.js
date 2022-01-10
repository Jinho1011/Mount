import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderRight, HeaderTitle} from '../components/Header/TransparentHeader';
import FoodSet from '../screens/Main/Detail/FoodSet';
import FoodSingle from '../screens/Main/Detail/FoodSingle';
import RecreationSet from '../screens/Main/Detail/RecreationSet';
import RecreationSingle from '../screens/Main/Detail/RecreationSingle';
import FoodSetChangeCount from '../screens/Main/ChangeCount/FoodSetChangeCount';
import FoodPlan from '../screens/Main/FoodPlan';
import RecPlan from '../screens/Main/RecPlan';

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
    <DetailNavigator.Screen name="RecSet" component={RecreationSet} />
    <DetailNavigator.Screen name="RecSingle" component={RecreationSingle} />
    <DetailNavigator.Screen
      name="FoodSetChangeCount"
      component={FoodSetChangeCount}
    />
    <DetailNavigator.Screen name="FoodPlan" component={FoodPlan} />
    <DetailNavigator.Screen name="RecPlan" component={RecPlan} />
    {/* <DetailNavigator.Screen name="FoodSingleChangeCount" component={FoodSingleChangeCount} />
    <DetailNavigator.Screen name="RecSetChangeCount" component={RecSetChangeCount} />
    <DetailNavigator.Screen name="RecSingleChangeCount" component={RecSingleChangeCount} /> */}
  </DetailNavigator.Navigator>
);

export default Details;
