import React, {useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import FocusAwareStatusBar from '../../../../components/StatusBar';
import Box from '../../../../components/Main/Box';

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

export default ({state}) => {
  return (
    <ScrollContainer>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      {state?.items.map(itemArr => {
        if (itemArr.length == 1) {
          const item = itemArr[0];
          return <Box item={item} key={item.type + item.id} />;
        } else {
          const item1 = itemArr[0];
          const item2 = itemArr[1];
          return (
            <SmallBoxContainer key={item1.type + item1.id}>
              <Box item={item1} key={item1.type + item1.id} />
              <Box item={item2} key={item2.type + item2.id} />
            </SmallBoxContainer>
          );
        }
      })}
    </ScrollContainer>
  );
};
