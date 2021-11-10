import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import FocusAwareStatusBar from '../../../../components/StatusBar';

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <Text>HomeFoodDetailPresenter</Text>
    </View>
  );
};