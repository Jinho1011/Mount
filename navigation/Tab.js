import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HeaderRight, HeaderTitle} from '../components/Header';
import Homes from './Homes';
import Search from '../screens/Main/Search';
import Favorite from '../screens/Main/Favorite';
import My from '../screens/Main/My';

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator>
    <TabsNavigator.Screen
      name="Homes"
      component={Homes}
      options={{headerShown: false}}
    />
    <TabsNavigator.Group
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
      <TabsNavigator.Screen name="Search" component={Search} />
      <TabsNavigator.Screen name="Fav" component={Favorite} />
      <TabsNavigator.Screen name="MyPage" component={My} />
    </TabsNavigator.Group>
  </TabsNavigator.Navigator>
);

export default Tabs;
