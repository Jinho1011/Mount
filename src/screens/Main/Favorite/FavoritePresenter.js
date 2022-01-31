import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FocusAwareStatusBar from '../../../../components/StatusBar';

import Box from '../../../components/Main/Box';

const FavContainer = styled.View`
  padding: 24px 23px 95px 23px;
`;

const SmallBoxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default ({state}) => {
  const navigation = useNavigation();
  const [itemArr, setItemArr] = useState([]);

  useEffect(() => {
    if (state.isReady) {
      for (let i = 0; i < state.items.length; i++) {
        let arr = [];
        let item1 = state.items[i];
        item1.displayType = 'short';
        arr.push(item1);
        if (i + 1 < state.items.length) {
          let item2 = state.items[i + 1];
          item2.displayType = 'short';
          arr.push(item2);
          i += 1;
        }
        setItemArr(prev => [...prev, arr]);
      }
    }
  }, [state]);

  return (
    <FavContainer>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {itemArr.map(item => {
        if (item.length === 2) {
          return (
            <SmallBoxContainer key={item[0].title + item[0].id}>
              <Box item={item[0]} />
              <Box item={item[1]} />
            </SmallBoxContainer>
          );
        } else {
          return (
            <SmallBoxContainer key={item[0].title + item[0].id}>
              <Box item={item[0]} />
              <></>
            </SmallBoxContainer>
          );
        }
      })}
    </FavContainer>
  );
};
