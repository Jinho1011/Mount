import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import FocusAwareStatusBar from '../../../../components/StatusBar';
import {LargeBox, SmallBox} from '../../../../components/Main/Box';

const screenWidth = Dimensions.get('window').width;

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
  padding-top: 20px;
  padding-left: 23px;
  padding-right: 23px;
`;

const SmallBoxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default ({foods}) => {
  return (
    <ScrollContainer>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      {
        // foods.map(food => {
        //   if (food.isLong) {
        //     return <LargeBox />;
        //   } else {
        //     return (
        //       <SmallBoxContainer>
        //         <SmallBox screenWidth={screenWidth} />
        //         <SmallBox screenWidth={screenWidth} />
        //       </SmallBoxContainer>
        //     );
        // }
      }
    </ScrollContainer>
  );
};
