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
          navigation.navigate('FoodSet');
        }}
      />
    </View>
  );
};
