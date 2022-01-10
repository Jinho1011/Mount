import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="navigate to FoodSet"
        onPress={() => {
          navigation.navigate('Details', {screen: 'FoodSet'});
        }}
      />
      <Button
        title="navigate to FoodSingle"
        onPress={() => {
          navigation.navigate('Details', {screen: 'FoodSingle'});
        }}
      />
      <Button
        title="navigate to RecreationSet"
        onPress={() => {
          navigation.navigate('Details', {screen: 'RecreationSet'});
        }}
      />
      <Button
        title="navigate to RecreationSingle"
        onPress={() => {
          navigation.navigate('Details', {screen: 'RecreationSingle'});
        }}
      />
      <Button
        title="음식 직접"
        onPress={() => {
          navigation.navigate('Details', {screen: 'FoodPlan'});
        }}
      />
      <Button
        title="레크 직접"
        onPress={() => {
          navigation.navigate('Details', {screen: 'RecPlan'});
        }}
      />
    </View>
  );
};
