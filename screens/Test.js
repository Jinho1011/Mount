import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="navigate to home detail"
        onPress={() => {
          navigation.navigate('HomeDetail');
        }}
      />
      <Button
        title="navigate to FoodSet"
        onPress={() => {
          navigation.navigate('FoodSet');
        }}
      />
      <Button
        title="navigate to FoodSingle"
        onPress={() => {
          navigation.navigate('FoodSingle');
        }}
      />
      <Button
        title="navigate to RecreationSet"
        onPress={() => {
          navigation.navigate('RecreationSet');
        }}
      />
      <Button
        title="navigate to RecreationSingle"
        onPress={() => {
          navigation.navigate('RecreationSingle');
        }}
      />
    </View>
  );
};
