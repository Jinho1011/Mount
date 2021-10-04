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
        title="navigate to detail"
        onPress={() => {
          navigation.navigate('FoodSet');
        }}
      />
      <Button
        title="navigate to detail"
        onPress={() => {
          navigation.navigate('FoodSingle');
        }}
      />
      <Button
        title="navigate to detail"
        onPress={() => {
          navigation.navigate('RecreationSet');
        }}
      />
      <Button
        title="navigate to detail"
        onPress={() => {
          navigation.navigate('RecreationSingle');
        }}
      />
    </View>
  );
};
