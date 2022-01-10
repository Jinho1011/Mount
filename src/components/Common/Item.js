/**
 * 플러스, 마이너스가 불가능한 구성품 컴포넌트입니다.
 */
import {isEmptyStatement} from '@babel/types';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styled from 'styled-components';

// 구성품 + 구분선
const ItemBox = styled.View`
  padding-bottom: 14px;
`;

// 구성품
const ItemSmallBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
`;

const ItemName = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  padding-left: 10px;
  padding-top: 5px;
`;

const ItemCountBlock = styled.View`
  background: #f3f3f3;
  border-radius: 12.5px;
  height: 25px;
  margin-top: 3px;
  margin-left: 6px;
  padding: 2px 16px 3px 16px;
`;

// const ItemCountBlock = styled.View`
//   background: #f3f3f3;
//   border-radius: 12.5px;
//   padding: 2px 15px 3px 16px;
//   justify-content: center;
// `;

const ItemCount = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const SetItemPriceContainer = styled.View`
  padding-left: 28px;
  flex-direction: column;
  align-items: flex-end;
`;

const SetItemSize = styled.Text`
  font-family: 'NotoSansKR-Regular';
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

const ItemLeft = styled.View`
  flex-direction: row;
`;

const ItemRight = styled.View`
  flex-direction: row;
`;

const Counter = styled.View`
  flex-direction: row;
`;

const Item = ({state, setState, item}) => {
  return (
    <ItemBox>
      <ItemSmallBox>
        <ItemLeft>
          <Image
            source={require('../../../assets/rec_set_item_image_sample.png')}
          />
          <ItemName>{item.name}</ItemName>
        </ItemLeft>
        <ItemRight>
          <Counter>
            <ItemCountBlock>
              <ItemCount>{item.count}</ItemCount>
            </ItemCountBlock>
          </Counter>
          <SetItemPriceContainer>
            <SetItemSize>4인 (800g)</SetItemSize>
            <SetItemPrice>{item.price}원</SetItemPrice>
          </SetItemPriceContainer>
        </ItemRight>
      </ItemSmallBox>
      <SetBorderLine />
    </ItemBox>
  );
};

export default Item;
