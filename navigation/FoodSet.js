import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FoodSet from '../screens/Detail/FoodSet';

const StackNavigator = createStackNavigator();

const Stack = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="FoodSet" component={FoodSet}/>
        </StackNavigator.Navigator>
    );    
};

export default Stack;