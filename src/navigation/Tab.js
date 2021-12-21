import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HeaderRight, HeaderTitle} from '../components/Header/Header';

import Homes from './Homes';
import Search from '../screens/Main/Search';
import Favorite from '../screens/Main/Favorite';
import My from '../screens/Main/My';
import Test from '../screens/Test';

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let source;

        if (route.name === 'Homes') {
          source = focused
            ? require('../../assets/tabs/home_.png')
            : require('../../assets/tabs/home.png');
        } else if (route.name === 'Search') {
          source = focused
            ? require('../../assets/tabs/search_.png')
            : require('../../assets/tabs/search.png');
        } else if (route.name === 'Fav') {
          source = focused
            ? require('../../assets/tabs/like_.png')
            : require('../../assets/tabs/like.png');
        } else if (route.name === 'MyPage') {
          source = focused
            ? require('../../assets/tabs/hamburger_.png')
            : require('../../assets/tabs/hamburger.png');
        }

        return <Image source={source} />;
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
        headerStyle: {
          backgroundColor: '#000000',
          height: 58,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerRight: () => <HeaderRight />,
      }}>
      <TabsNavigator.Screen
        name="Fav"
        component={Favorite}
        options={{
          headerTitle: () => <HeaderTitle title="찜한 목록" />,
          tabBarLabel: '찜',
        }}
      />
      <TabsNavigator.Screen
        name="MyPage"
        component={My}
        options={{
          headerTitle: () => <HeaderTitle title="마이페이지" />,
          tabBarLabel: '마이페이지',
        }}
      />
    </TabsNavigator.Group>
    <TabsNavigator.Screen name="Test" component={Test} />
  </TabsNavigator.Navigator>
);

export default Tabs;
