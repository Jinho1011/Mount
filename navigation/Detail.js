import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FoodSet from '../screens/Detail/FoodSet';

const DetailNavigator = createStackNavigator();

const Details = () => {
    <DetailNavigator.Navigator>
        <DetailNavigator.Screen name="FoodSet" component={FoodSet}/>
        <DetailNavigator.Screen name="FoodSingle" component={FoodSingle}/>
        <DetailNavigator.Screen name="RecreationSet" component={RecreationSet}/>
        <DetailNavigator.Screen name="RecreationSingle" component={RecreationSingle}/>
    </DetailNavigator.Navigator>
};

export default Details;