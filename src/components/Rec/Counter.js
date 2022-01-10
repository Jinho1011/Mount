import React from 'react';
import {View, Pressable, Image} from 'react-native';
import styled from 'styled-components';

const Base = styled.View`
  justify-content: space-between;
  background-color: #fff;
`;

const ResultBlock = styled.View`
  padding: 14px 22px;
  border-radius: 8px;
  background-color: #e2f955;
`;

const ResultText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const OptionContainer = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-right: 10px;
  height: 110px;
`;

const MembersBox = styled.View`
  width: 50%;
  margin-right: 10px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
`;

const RecTeamsBox = styled.View`
  width: 50%;
  border: 1px solid #eaeaea;
  border-radius: 8px;
`;

const MembersText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  padding-left: 12px;
  margin-top: -21px;
`;

const MembersHighlight = styled.View`
  background: #e2f955;
  width: 48px;
  height: 10px;
  margin-left: 10px;
  margin-top: 24px;
`;

const RecTeamsQue = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin-left: 12px;
  margin-top: -21px;
`;

const RecTeamsQueHighlight = styled.View`
  background: #e2f955;
  width: 32px;
  height: 10px;
  margin-left: 10px;
  margin-top: 24px;
`;

const AdjustMembers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 18px 12px 16px 12px;
`;

const MemberCounter = styled.View`
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

const getRemainder = (memberCnt, teamCnt) => {
  return memberCnt % teamCnt;
};

// const getRemainder = (memberCnt, teamCnt) => {
//   let remainder = memberCnt % teamCnt;
//   let _memberCnt = memberCnt / teamCnt;
//   for (let i = 0; i < remainder; i++) {
//   }
// }

const Counter = ({state, setState}) => {
  let quotient = state?.memberCnt / state?.teamCnt;
  let remainder = getRemainder(state?.memberCnt, state?.teamCnt);
  let totalTeam = state?.teamCnt;
  return (
    <Base>
      <ResultBlock>
        <ResultText>
          {remainder === 0
            ? `${quotient}명이 한 팀으로 총 ${totalTeam} 팀이 만들어져요!`
            : `${parseInt(quotient, 10) + 1}명 ${remainder}팀, ${parseInt(
                quotient,
                10,
              )}명 ${
                totalTeam - remainder
              }팀으로 총 ${totalTeam} 팀이 만들어져요!`}
        </ResultText>
      </ResultBlock>
      <OptionContainer>
        <MembersBox>
          <MembersHighlight />
          <MembersText>총 몇 명이{'\n'}함께 하나요?</MembersText>
          <AdjustMembers>
            <Pressable
              onPress={() => {
                let memCnt = state.memberCnt;
                let items = state.items.map(item => {
                  item.count = Math.max(1, item.count - 1);
                  return item;
                });
                setState(prev => ({
                  ...prev,
                  memberCnt: Math.max(1, memCnt - 1),
                  items,
                }));
              }}>
              <Image source={require('../../../assets/minus_dis.png')} />
            </Pressable>
            <MemberCounter>
              <CounterNumber>{state?.memberCnt}</CounterNumber>
            </MemberCounter>
            <Pressable
              onPress={() => {
                let memCnt = state.memberCnt;
                let items = state.items.map(item => {
                  item.count = Math.max(1, item.count + 1);
                  return item;
                });
                setState(prev => ({
                  ...prev,
                  memberCnt: Math.max(1, memCnt + 1),
                  items,
                }));
              }}>
              <Image source={require('../../../assets/plus_dis.png')} />
            </Pressable>
          </AdjustMembers>
        </MembersBox>
        <RecTeamsBox>
          <RecTeamsQueHighlight />
          <RecTeamsQue>몇 팀으로{'\n'}나누고 싶나요?</RecTeamsQue>
          <AdjustMembers>
            <Pressable
              onPress={() => {
                let teamCnt = state.teamCnt;
                setState(prev => ({
                  ...prev,
                  teamCnt: Math.max(1, teamCnt - 1),
                }));
              }}>
              <Image source={require('../../../assets/minus_dis.png')} />
            </Pressable>
            <MemberCounter>
              <CounterNumber>{state.teamCnt}</CounterNumber>
            </MemberCounter>
            <Pressable
              onPress={() => {
                let teamCnt = state.teamCnt;
                setState(prev => ({
                  ...prev,
                  teamCnt: Math.max(1, teamCnt + 1),
                }));
              }}>
              <Image source={require('../../../assets/plus_dis.png')} />
            </Pressable>
          </AdjustMembers>
        </RecTeamsBox>
      </OptionContainer>
    </Base>
  );
};

export default Counter;
