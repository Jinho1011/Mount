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

const ItemPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px 0 35px;
`;

const ItemPriceLabel = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Bold';
  line-height: 20px;
`;

const ItemPrice = styled.Text`
  color: #000000;
  font-size: 16px;
  font-family: 'NotoSansKR-Bold';
  line-height: 24px;
`;

const PlanItemsContainer = ({items}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleContainer>
        <Title>레크</Title>
        <Subtitle>구성품</Subtitle>
      </TitleContainer>
      <ItemContainer>
        {items.map((item, i, items) => {
          if (i + 1 === items.length) {
            return <Item item={item} key={item.id} />;
          } else {
            return (
              <View key={item.id}>
                <Item item={item} />
                <ItemDivider />
              </View>
            );
          }
        })}
      </ItemContainer>
      <ItemPriceContainer>
        <ItemPriceLabel>레크 합계금액</ItemPriceLabel>
        <ItemPrice>84,560원</ItemPrice>
      </ItemPriceContainer>
    </Container>
  );
};

export default PlanItemsContainer;