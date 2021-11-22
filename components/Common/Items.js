import React from 'react';
import {Image, Pressable} from 'react-native';
import styled from 'styled-components';

// 구성품 + 구분선
const ItemsBox = styled.View`
  margin-top: 14px;
  flex: 1;
  padding: 0px 35px 0px 35px;
  width:100%;
  height: 46px;
`;

// 구성품
const ItemsSmallBox = styled.View`
  flex-direction: row;
  margin-bottom: 14px;
  height: 32px;
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
  height:25px;
  margin-top: 3px;
  margin-left: 6px;
  padding: 2px 16px 3px 16px;
`;

const ItemsCount = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const SetItemPriceContainer = styled.View`
  flex-direction: column;
  alignItems: flex-end;
  margin-left: 12px;
`;

const SetItemSize = styled.Text`
  font-family: 'NotoSansKR-Normal';
  font-size: 10px;
  line-height: 15px;
  text-align: right;
  color: #828282;
`;

const SetItemPrice = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 14px;
  line-height: 20px;
  text-align: right;
`;

const SetBorderLine = styled.View`
  border: 0.35px solid #eaeaea;
`;

const Items = ({state, setState, name, price}) => {
  return (
    <ItemsBox>
      <ItemsSmallBox>
        <Image source={require('../../assets/rec_set_item_image_sample.png')} />
        <ItemName>{name}</ItemName>
        <MinusPressable
          onPress={() => {
            let itemCnt = state.itemCnt;
            setState(prev => ({
              ...prev,
              itemCnt: Math.max(0, itemCnt - 1),
            }));
          }}>
          <Image source={require('../../assets/minus.png')} />
        </MinusPressable>
        <ItemsCountBlock>
          <ItemsCount>{state?.itemCnt}</ItemsCount>
        </ItemsCountBlock>
        <PlusPressable
          onPress={() => {
            let itemCnt = state.itemCnt;
            setState(prev => ({
              ...prev,
              itemCnt: Math.max(0, itemCnt + 1),
            }));
          }}>
          <Image source={require('../../assets/plus.png')} />
        </PlusPressable>
        <SetItemPriceContainer>
          <SetItemSize>4인 (800g)</SetItemSize>
          <SetItemPrice>{price}원</SetItemPrice>
        </SetItemPriceContainer>
      </ItemsSmallBox>
      <SetBorderLine />
    </ItemsBox>
  );
};

export default Items;
