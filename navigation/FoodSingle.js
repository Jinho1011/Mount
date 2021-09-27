import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const StackNavigator = createStackNavigator();

const Stack = () => {
    <StackNavigator.Navigator>
        <StackNavigator.Screen name="FoodSingle.js" component={FoodSingle}/>
    </StackNavigator.Navigator>
};

export default Stack;