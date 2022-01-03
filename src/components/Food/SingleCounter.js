import React from 'react';
import {Pressable, Image} from 'react-native';
import styled from 'styled-components';

const CounterContainer = styled.View`
  padding: 16px 20px 20px 20px;
  background-color: #fff;
  justify-content: space-between;
`;

const CounterBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 14px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
`;

const CounterTitle = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: 'NotoSansKR-Bold';
  line-height: 20px;
`;

const CouterAdjustBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CouterNumberBox = styled.View`
  margin: 0 14px;
  padding: 0 22px;
  border-radius: 6px;
  border: 1px solid #f3f3f3;
`;

const CounterNumber = styled.Text`
  color: #000;
  font-size: 16px;
  line-height: 24px;
  font-family: 'NotoSansKR-Bold';
`;

const SingleCounter = ({state, setState}) => {
  return (
    <CounterContainer>
      <CounterBox>
        <CounterTitle>총 인원 수</CounterTitle>
        <CouterAdjustBox>
          <Pressable
            onPress={() => {
              let memCnt = state.memberCnt;
              setState(prev => ({
                ...prev,
                memberCnt: Math.max(1, memCnt - 1),
              }));
            }}>
            <Image source={require('../../../assets/minus_dis.png')} />
          </Pressable>
          <CouterNumberBox>
            <CounterNumber>{state?.memberCnt}</CounterNumber>
          </CouterNumberBox>
          <Pressable
            onPress={() => {
              let memCnt = state.memberCnt;
              setState(prev => ({
                ...prev,
                memberCnt: Math.max(1, memCnt + 1),
              }));
            }}>
            <Image source={require('../../../assets/plus_dis.png')} />
          </Pressable>
        </CouterAdjustBox>
      </CounterBox>
    </CounterContainer>
  );
};

export default SingleCounter;
