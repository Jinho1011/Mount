import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Header} from '../components/Header/Header';

import MyMain from '../screens/Main/My/Main';
import MyDetail from '../screens/Main/My/Detail';

const MyNavigator = createStackNavigator();

const My = () => {
  return (
    <MyNavigator.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <MyNavigator.Group
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
        <MyNavigator.Screen
          name="MyMain"
          component={MyMain}
          options={{tabBarLabel: '마이페이지', headerShown: false}}
        />
        <MyNavigator.Screen
          name="MyDetail"
          component={MyDetail}
          options={{tabBarLabel: '마이페이지', headerShown: false}}
        />
      </MyNavigator.Group>
    </MyNavigator.Navigator>
  );
};

export default My;
