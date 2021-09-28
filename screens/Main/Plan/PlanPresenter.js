import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Plan</Text>
    </View>
  );
};
