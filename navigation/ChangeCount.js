import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FoodSetChangeCount from '../screens/Main/ChangeCount/FoodSetChangeCount';

const ChangeCountNavigator = createStackNavigator();

const ChangeCount = () => {
    <ChangeCountNavigator.Navigator>
        <ChangeCountNavigator.Screen name="FoodSetChangeCount" component={FoodSetChangeCount} />
    </ChangeCountNavigator.Navigator>
};

export default ChangeCount;
