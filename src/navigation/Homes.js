import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Header} from '../components/Header/Header';

import TabBar from '../components/Header/TabBar';
import HomeMain from '../screens/Main/Home/Main';
import FoodDetail from '../screens/Main/Home/FoodDetail';
import RecDetail from '../screens/Main/Home/RecDetail';
import Tutorial from '../screens/Main/Home/Tutorial';

import useScroll from '../hooks/useScroll';
import global from '../global';

const HomeNavigator = createStackNavigator();

const HomeTab = createMaterialTopTabNavigator();

function HomeTabs(navigation) {
  return (
    <HomeTab.Navigator
      initialRouteName={navigation.route.params.initialRoute}
      tabBar={props => <TabBar {...props} />}>
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
  global.scroll = useScroll();

  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Group
        screenOptions={{
          header: ({navigation, route, options, back}) => (
            <Header
              navigation={navigation}
              route={route}
              options={options}
              back={back}
            />
          ),
          headerShadowVisible: false,
        }}>
        <HomeNavigator.Screen
          name="HomeMain"
          component={HomeMain}
          options={{tabBarLabel: '홈'}}
        />
        <HomeNavigator.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{tabBarLabel: '홈', headerShown: false}}
        />
        <HomeNavigator.Screen
          name="HomeTutorial"
          component={Tutorial}
          options={{tabBarLabel: '홈'}}
        />
      </HomeNavigator.Group>
    </HomeNavigator.Navigator>
  );
};

export default Homes;
