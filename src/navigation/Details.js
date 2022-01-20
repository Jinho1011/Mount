import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {TransparentHeader} from '../components/Header/TransparentHeader';
import {Header} from '../components/Header/Header';
import TabBar from '../components/Header/PlanTabBar';
import FoodSet from '../screens/Main/Detail/FoodSet';
import FoodSingle from '../screens/Main/Detail/FoodSingle';
import RecreationSet from '../screens/Main/Detail/RecreationSet';
import RecreationSingle from '../screens/Main/Detail/RecreationSingle';
import FoodSetChangeCount from '../screens/Main/ChangeCount/FoodSetChangeCount';
import FoodPlan from '../screens/Main/FoodPlan';
import RecPlan from '../screens/Main/RecPlan';
import FoodPlanChange from '../screens/Main/FoodPlanChange';
import RecPlanChange from '../screens/Main/RecPlanChange';
import RecSetChangeCount from '../screens/Main/ChangeCount/RecSetChangeCount';

const DetailNavigator = createStackNavigator();

const DetailTab = createMaterialTopTabNavigator();

const DetailTabs = navigation => {
  return (
    <DetailTab.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName={navigation.route.params.initialRoute}>
      <DetailNavigator.Screen
        name="FoodPlan"
        component={FoodPlan}
        options={{title: '음식'}}
      />
      <DetailNavigator.Screen
        name="RecPlan"
        component={RecPlan}
        options={{title: '레크'}}
      />
    </DetailTab.Navigator>
  );
};

const Details = () => (
  <DetailNavigator.Navigator>
    <DetailNavigator.Group
      screenOptions={{
        headerShown: false,
      }}>
      <DetailNavigator.Screen name="FoodSet" component={FoodSet} />
      <DetailNavigator.Screen name="FoodSingle" component={FoodSingle} />
      <DetailNavigator.Screen name="RecSet" component={RecreationSet} />
      <DetailNavigator.Screen name="RecSingle" component={RecreationSingle} />
    </DetailNavigator.Group>

    <DetailNavigator.Group
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
      <DetailNavigator.Screen
        name="FoodSetChangeCount"
        component={FoodSetChangeCount}
        options={{tabBarLabel: '수량 변경'}}
      />
      <DetailNavigator.Screen
        name="RecSetChangeCount"
        component={RecSetChangeCount}
        options={{tabBarLabel: '수량 변경'}}
      />
      <DetailNavigator.Screen
        name="DetailTabs"
        component={DetailTabs}
        options={{tabBarLabel: '직접 기획', headerShown: false}}
      />
      <DetailNavigator.Screen
        name="FoodPlanChange"
        component={FoodPlanChange}
        options={{tabBarLabel: '수량 변경', headerShown: true}}
      />
      <DetailNavigator.Screen
        name="RecPlanChange"
        component={RecPlanChange}
        options={{tabBarLabel: '수량 변경', headerShown: true}}
      />
    </DetailNavigator.Group>

    {/* <DetailNavigator.Screen name="FoodSingleChangeCount" component={FoodSingleChangeCount} />
    <DetailNavigator.Screen name="RecSetChangeCount" component={RecSetChangeCount} />
    <DetailNavigator.Screen name="RecSingleChangeCount" component={RecSingleChangeCount} /> */}
  </DetailNavigator.Navigator>
);

export default Details;
