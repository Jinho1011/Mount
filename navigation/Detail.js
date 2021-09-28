import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FoodSet from '../screens/Main/Detail/FoodSet';
import FoodSingle from '../screens/Main/Detail/FoodSingle';
import RecreationSet from '../screens/Main/Detail/RecreationSet';
import RecreationSingle from '../screens/Main/Detail/RecreationSingle';

const MainNavigator = createStackNavigator();

const DetailNavigator = createStackNavigator();

const Details = () => {
    <DetailNavigator.Navigator>
        <DetailNavigator.Screen name="FoodSet" component={FoodSet}/>
        <DetailNavigator.Screen name="FoodSingle" component={FoodSingle}/>
        <DetailNavigator.Screen name="RecreationSet" component={RecreationSet}/>
        <DetailNavigator.Screen name="RecreationSingle" component={RecreationSingle}/>
    </DetailNavigator.Navigator>
};

export default () => {
    <MainNavigator.Navigator>
        <MainNavigator.Screen name="Detail" component={Details}/>
    </MainNavigator.Navigator>
};