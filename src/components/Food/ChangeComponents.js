/**
 * 플러스, 마이너스가 가능한 구성품 컴포넌트입니다.
 */
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
  justify-content: space-between;
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

  padding-left: 10px;
  padding-top: 5px;
`;

const MinusPressable = styled.Pressable`
  padding: 16px 0 16px 24px;
`;

const PlusPressable = styled.Pressable`
  padding: 11px 0 11px 6px;
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

const ItemLeft = styled.View`
  flex-direction: row;
`;

const ItemRight = styled.View`
  flex-direction: row;
`;

const Counter = styled.View`
  flex-direction: row;
  padding-right: 12px;
`;

const ComponentImage = styled(Image)`
  width: 32px;
  height: 32px;
`;

const ChangeComponents = ({state, setState, item}) => {
  console.log(item);
  const minusCount = () => {
    let items = state.items.map(_item => {
      if (item.id === _item.id) {
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
  };

  const plusCount = () => {
    let items = state.items.map(_item => {
      if (item.id === _item.id) {
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

  console.log(item);
  return (
    <ItemBox>
      <ItemSmallBox>
        <ItemLeft>
          <ComponentImage source={{uri: item?.image}} />
          <ItemName>{item?.title}</ItemName>
        </ItemLeft>
        <ItemRight>
          <Counter>
            <MinusPressable onPress={minusCount}>
              <Image source={require('../../../assets/minus.png')} />
            </MinusPressable>
            <ItemCountBlock>
              <ItemCount>{item?.count}</ItemCount>
            </ItemCountBlock>
            <PlusPressable onPress={plusCount}>
              <Image source={require('../../../assets/plus.png')} />
            </PlusPressable>
          </Counter>
          <SetItemPriceContainer>
            <SetItemize>{item.description}</SetItemize>
            <SetItemPrice>{item.price}원</SetItemPrice>
          </SetItemPriceContainer>
        </ItemRight>
      </ItemSmallBox>
      <SetBorderLine />
    </ItemBox>
  );
};

export default ChangeComponents;
