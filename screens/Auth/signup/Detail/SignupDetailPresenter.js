import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ButtonText: {
    textAlign: 'center',
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.ButtonText}>기타 아이디 회원가입 화면</Text>
    </View>
  );
};
