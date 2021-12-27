import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tab';
import Details from './Details';
import Plan from '../screens/Main/Plan';
import {Header} from '../components/Header/Header';

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
      options={{
        header: ({navigation, route, options, back}) => (
          <Header
            navigation={navigation}
            route={route}
            options={options}
            back={back}
          />
        ),
        tabBarLabel: '기획서',
      }}
    />
  </MainNavigator.Navigator>
);
