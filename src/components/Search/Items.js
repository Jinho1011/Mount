import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import Box from '../Main/Box';

const SmallBoxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Padding = styled.View`
    padding-top:: 115px;
`;

const Items = ({items}) => {
  return (
    <>
      {items.map(itemArr => {
        if (itemArr.length === 1) {
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
      <Padding />
    </>
  );
};

export default Items;
