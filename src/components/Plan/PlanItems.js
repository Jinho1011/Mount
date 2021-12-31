import React from 'react';
import {View, Text, Dimensions, LogBox} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import Item from './Item';

const Container = styled.View`
  padding-top: 24px;
  padding-bottom: 34px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-bottom: 18px;
`;

const Title = styled.Text`
  color: #000000;
  font-size: 18px;
  font-family: 'NotoSansKR-Bold';
  line-height: 26px;
  padding-right: 17px;
`;

const Subtitle = styled.Text`
  color: #8b8b8b8b;
  font-size: 12px;
  font-family: 'NotoSansKR-Bold';
  line-height: 16px;
`;

const ItemContainer = styled.View`
  padding-left: 35px;
  padding-right: 35px;
`;

const ItemDivider = styled.View`
  margin-top: 14px;
  margin-bottom: 14px;
  height: 0.35px;
  background-color: #f3f3f3;
`;

const PlanItemsContainer = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleContainer>
        <Title>레크</Title>
        <Subtitle>구성품</Subtitle>
      </TitleContainer>
      <ItemContainer>
        <Item />
        <ItemDivider />
        <Item />
        <ItemDivider />
        <Item />
        <ItemDivider />
        <Item />
      </ItemContainer>
    </Container>
  );
};

export default PlanItemsContainer;
