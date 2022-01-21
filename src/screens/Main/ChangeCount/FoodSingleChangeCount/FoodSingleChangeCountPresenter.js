import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';
import Item from '../../../../components/Common/ItemMuttable';
const ScrollContainer = styled(ScrollView)`
  background: #fff;
  padding: 20px 20px 0px 20px;
`;
const CountContainer = styled(View)`
  padding: 23px 35px 25px 35px;
  border: 1px solid #eaeaea;
  border-radius: 7px;
`;
const CountTitleBox = styled(View)``;
const CountTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;
const HighLighter = styled(View)`
  width: 58px;
  height: 10px;
  background: #e2f955;
  margin-top: -10px;
  z-index: -1;
`;

const CounterContainer = styled.View`
  flex-direction: row;
  margin-top: 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MinusPressable = styled(Pressable)``;

const PlusPressable = styled(Pressable)``;

const CounterNumberBox = styled.View`
  background: #f3f3f3;
  border-radius: 5px;
  padding: 0px 45px 0px 45px;
  margin-left: 18px;
  margin-right: 18px;
`;

const CounterNumber = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 23px;
  color: #000000;
`;

const ItemContainer = styled(View)`
  padding: 18px 15px 0px 15px;
`;

const ItemContainerTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 17px;
  color: #000;
  padding-top: 26px;
  padding-left: 3px;
`;

export default function FoodSingleChnageCountPresenter({state, setState}) {
  console.log(state);
  return (
    <>
      <ScrollContainer>
        <CountContainer>
          <CountTitleBox>
            <CountTitle>총 인원 수를 입력해주세요</CountTitle>
            <HighLighter />
          </CountTitleBox>
          <CounterContainer>
            <MinusPressable
              onPress={() => {
                let memCnt = state.memberCnt;
                let items = state.items.map(item => {
                  item.count = Math.max(1, memCnt - 1);
                  return item;
                });
                setState(prev => ({
                  ...prev,
                  memberCnt: Math.max(1, memCnt - 1),
                  items,
                }));
              }}>
              <Image source={require('../../../../../assets/minus_dis.png')} />
            </MinusPressable>
            <CounterNumberBox>
              <CounterNumber>{state?.memberCnt}</CounterNumber>
            </CounterNumberBox>
            <PlusPressable
              onPress={() => {
                let memCnt = state.memberCnt;
                let items = state.items.map(item => {
                  item.count = Math.max(1, memCnt + 1);
                  return item;
                });
                setState(prev => ({
                  ...prev,
                  memberCnt: Math.max(1, memCnt + 1),
                  items,
                }));
              }}>
              <Image source={require('../../../../../assets/plus_.png')} />
            </PlusPressable>
          </CounterContainer>
        </CountContainer>
        <ItemContainerTitle>구성품</ItemContainerTitle>
        <ItemContainer>
          <Item state={state} setState={setState} item={state?.foodSingle} />
        </ItemContainer>
      </ScrollContainer>
    </>
  );
}
