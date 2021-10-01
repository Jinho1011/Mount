import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeMain from '../screens/Main/Home/Main';

const HomeNavigator = createStackNavigator();

const Homes = () => {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen name="HomeMain" component={HomeMain} />
      {/* <HomeNavigator.Screen name="HomeDetail" component={HomeMain} /> */}
    </HomeNavigator.Navigator>
  );
};

export default Homes;
