/**
 * 플러스, 마이너스가 불가능한 구성품 컴포넌트입니다.
 */
import {isEmptyStatement} from '@babel/types';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styled from 'styled-components';

// 구성품 + 구분선
const ItemBox = styled.View`
  margin-top: 14px;
  flex: 1;
  width: 100%;
  height: 46px;
`;

// 구성품
const ItemSmallBox = styled.View`
  position: relative;
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

  position: absolute;
  left: 14.48%;
  right: 58.97%;
  top: 15.62%;
  bottom: 21.88%;
`;

const ItemCountBlock = styled.View`
  position: absolute;
  left: 54.14%;
  right: 32.41%;
  top: 9.38%;
  bottom: 12.5%;
  
  background: #f3f3f3;
  border-radius: 12.5px;
  height: 25px;
  padding: 2px 16px 3px 17px;
`;

const ItemCount = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const SetItemPriceContainer = styled.View`
  position: absolute;
  left: 77.24%;
  right: 0.07%;
  top: 0%;
  bottom: -1.04%;
  flex-direction: column;
  align-items: flex-end;
`;

const SetItemize = styled.Text`
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

const Item = ({state, setState, item}) => {
  return (
    <ItemBox>
      <ItemSmallBox>
        <Image source={require('../../assets/rec_set_item_image_sample.png')} />
        <ItemName>{item.name}</ItemName>
        <ItemCountBlock>
          <ItemCount>{item.count}</ItemCount>
        </ItemCountBlock>
        <SetItemPriceContainer>
          <SetItemize>4인 (800g)</SetItemize>
          <SetItemPrice>{item.price}원</SetItemPrice>
        </SetItemPriceContainer>
      </ItemSmallBox>
      <SetBorderLine />
    </ItemBox>
  );
};

export default Item;
