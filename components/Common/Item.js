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

const ItemCountBlock = styled.View`
  background: #f3f3f3;
  border-radius: 12.5px;
  height: 25px;
  margin-top: 3px;
  margin-left: 6px;
  padding: 2px 16px 3px 16px;
`;

const ItemCount = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const SetItemPriceContainer = styled.View`
  flex-direction: column;
  align-items: flex-end;
  margin-left: 12px;
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
  const minusCount = () => {
    if (item.count > 0) {
      let items = state.items.map(_item => {
        if (item.id == _item.id) {
          return {
            ..._item,
            count: _item.count - 1,
          };
        } else {
          return _item;
        }
      });

      setState(prev => ({
        ...prev,
        items,
      }));
    }
  };

  const plusCount = () => {
    let items = state.items.map(_item => {
      if (item.id == _item.id) {
        return {
          ..._item,
          count: _item.count + 1,
        };
      } else {
        return _item;
      }
    });

    setState(prev => ({
      ...prev,
      items,
    }));
  };

  return (
    <ItemBox>
      <ItemSmallBox>
        <Image source={require('../../assets/rec_set_item_image_sample.png')} />
        <ItemName>{item.name}</ItemName>
        <MinusPressable onPress={minusCount}>
          <Image source={require('../../assets/minus.png')} />
        </MinusPressable>
        <ItemCountBlock>
          <ItemCount>{item.count}</ItemCount>
        </ItemCountBlock>
        <PlusPressable onPress={plusCount}>
          <Image source={require('../../assets/plus.png')} />
        </PlusPressable>
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
