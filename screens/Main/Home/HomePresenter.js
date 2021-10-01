import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Button } from 'react-native';

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button 
      title="detail"
      onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};
