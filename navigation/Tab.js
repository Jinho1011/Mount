import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homes from './Homes';
import Search from '../screens/Main/Search';
import Favorite from '../screens/Main/Favorite';
import My from '../screens/Main/My';

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator>
    <TabsNavigator.Screen name="Homes" component={Homes} />
    <TabsNavigator.Screen name="Search" component={Search} />
    <TabsNavigator.Screen name="Fav" component={Favorite} />
    <TabsNavigator.Screen name="MyPage" component={My} />
  </TabsNavigator.Navigator>
);

export default Tabs;
