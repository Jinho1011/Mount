import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header} from '../components/Header/Header';

import Homes from './Homes';
import Search from '../screens/Main/Search';
import Favorite from '../screens/Main/Favorite';
import My from '../screens/Main/My';
import Test from '../screens/Test';

import {
  Mount_icon_gnb_hambugerSvg,
  Mount_icon_gnb_hambuger_Svg,
  Mount_icon_gnb_homeSvg,
  Mount_icon_gnb_home_Svg,
  Mount_icon_gnb_likeSvg,
  Mount_icon_gnb_like_Svg,
  Mount_icon_gnb_searchSvg,
  Mount_icon_gnb_search_Svg,
} from '../components/assets';

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let source;
        const focusedColor = '#000000';
        const unfocusedColor = '#8b8b8b';

        if (route.name === 'Homes') {
          source = focused ? (
            <Mount_icon_gnb_home_Svg
              width={24}
              height={24}
              fill={focusedColor}
            />
          ) : (
            <Mount_icon_gnb_homeSvg
              width={24}
              height={24}
              fill={unfocusedColor}
            />
          );
        } else if (route.name === 'Search') {
          source = focused ? (
            <Mount_icon_gnb_search_Svg
              width={24}
              height={24}
              fill={focusedColor}
            />
          ) : (
            <Mount_icon_gnb_searchSvg
              width={24}
              height={24}
              fill={unfocusedColor}
            />
          );
        } else if (route.name === 'Fav') {
          source = focused ? (
            <Mount_icon_gnb_like_Svg
              width={24}
              height={24}
              fill={focusedColor}
            />
          ) : (
            <Mount_icon_gnb_likeSvg
              width={24}
              height={24}
              fill={unfocusedColor}
            />
          );
        } else if (route.name === 'MyPage') {
          source = focused ? (
            <Mount_icon_gnb_hambuger_Svg
              width={24}
              height={24}
              fill={focusedColor}
            />
          ) : (
            <Mount_icon_gnb_hambugerSvg
              width={24}
              height={24}
              fill={unfocusedColor}
            />
          );
        }

        return source;
      },
      tabBarActiveTintColor: '#373737',
      tabBarInactiveTintColor: '#8b8b8b',
      tabBarStyle: {
        height: 63,
        paddingBottom: 7,
      },
      tabBarLabelStyle: {
        fontSize: 10,
        fontFamily: 'NotoSansKR-Normal',
        lineHeight: 15,
      },
    })}>
    <TabsNavigator.Screen
      name="Homes"
      component={Homes}
      options={{headerShown: false, tabBarLabel: '홈'}}
    />
    <TabsNavigator.Screen
      name="Search"
      component={Search}
      options={{headerShown: false, tabBarLabel: '검색'}}
    />
    <TabsNavigator.Group
      screenOptions={{
        header: ({navigation, route, options, back}) => (
          <Header
            navigation={navigation}
            route={route}
            options={options}
            back={back}
          />
        ),
      }}>
      <TabsNavigator.Screen
        name="Fav"
        component={Favorite}
        options={{
          tabBarLabel: '찜',
        }}
      />
      <TabsNavigator.Screen
        name="MyPage"
        component={My}
        options={{
          tabBarLabel: '마이페이지',
        }}
      />
    </TabsNavigator.Group>
    <TabsNavigator.Screen name="Test" component={Test} />
  </TabsNavigator.Navigator>
);

export default Tabs;
