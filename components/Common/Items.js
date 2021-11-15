import React from 'react';
import {Image, Pressable} from 'react-native';
import styled from 'styled-components';

const ItemsContainer = styled.View`
  margin: 12px 16px 20px 16px;
`;

const ItemsBox = styled.View`
  flex-direction: row;
`;

const ItemName = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  margin-left: 10px;
  margin-top: 5px;
`;

const MinusPressable = styled.Pressable`
  margin: 16px 0 16px 24px;
`;

const PlusPressable = styled.Pressable`
  margin: 11px 0 11px 6px;
`;

const ItemsCountBlock = styled.View`
  background: #f3f3f3;
  border-radius: 12.5px;
  margin-top: 3px;
  margin-left: 6px;
  padding: 2px 16px 3px 16px;
`;

const ItemsCount = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const FoodSetItemPriceContainer = styled.View`
  flex-direction: column;
  margin-left: 12px;
`;

const FoodSetItemSize = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  text-align: right;
  color: #828282;
`;

const FoodSetItemPrice = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: right;

  margin-left: 12px;
`;

const FoodSetBorderLine = styled.View`
  border: 0.35px solid #eaeaea;

  margin-top: 14px;
`;

const Items = ({name, price, itemscount, onDecreaseItems, onIncreaseItems}) => {
  console.log(itemscount);
  return (
    <ItemsContainer>
      <ItemsBox>
        <Image source={require('../../assets/rec_set_item_image_sample.png')} />
        <ItemName>{name}</ItemName>
        <MinusPressable
          onPress={() => {
            onDecreaseItems();
          }}>
          <Image source={require('../../assets/minus.png')} />
        </MinusPressable>
        <ItemsCountBlock>
          <ItemsCount>{itemscount}</ItemsCount>
        </ItemsCountBlock>
        <PlusPressable
          onPress={() => {
            onIncreaseItems();
          }}>
          <Image source={require('../../assets/plus.png')} />
        </PlusPressable>
        <FoodSetItemPriceContainer>
          <FoodSetItemSize>4인 (800g)</FoodSetItemSize>
          <FoodSetItemPrice>{price}원</FoodSetItemPrice>
        </FoodSetItemPriceContainer>
      </ItemsBox>
      <FoodSetBorderLine />
    </ItemsContainer>
  );
};

export default Items;
