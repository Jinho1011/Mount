import React from 'react';
import {View, Pressable, Image} from 'react-native';
import styled from 'styled-components';

const RecSetHeader = styled.View`
  padding: 16px 20px 20px 20px;
  justify-content: space-between;
  background-color: #fff;
`;

const RecElementsRecoContainer = styled.View`
  width: 100%;
  height: 172px;
  margin-top: 16px;
  justify-content: space-between;
`;

const RecMemberResultBlock = styled.View`
  height: 52px;
  border-radius: 8px;
  background-color: #e2f955;
`;

const RecMemberResult = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-left: 22px;
  margin-top: 14px;
  color: #000000;
`;

const RecMemberOptionContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-right: 10px;
  height: 110px;
`;

const RecMembersBox = styled.View`
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

const RecMembersQue = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  margin-left: 12px;
  margin-top: -21px;
`;

const RecMembersQueHighlight = styled.View`
  background: #e2f955;
  width: 48px;
  height: 10px;
  margin-left: 10px;
  margin-top: 24px;
`;

const RecTeamsQue = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  margin-left: 12px;
  margin-top: -21px;
`;

const RecTeamsQueHighlight = styled.View`
  background: #e2f955;
  width: 48px;
  height: 10px;
  margin-left: 10px;
  margin-top: 24px;
`;

const DetailAdjustMembers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 18px 12px 16px 12px;
`;

const DetailMemberCounter = styled.View`
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

const Counter = ({state, setState}) => {
  return (
    <RecSetHeader>
      <View>
        <RecElementsRecoContainer>
          <RecMemberResultBlock>
            <RecMemberResult>
              0명이 한 팀으로 총 0팀이 만들어져요!
            </RecMemberResult>
          </RecMemberResultBlock>
          <RecMemberOptionContainer>
            <RecMembersBox>
              <RecMembersQueHighlight />
              <RecMembersQue>총 몇 명이{'\n'}함께 하나요?</RecMembersQue>
              <DetailAdjustMembers>
                <Pressable
                  onPress={() => {
                    let memCnt = state.memberCnt;
                    setState(prev => ({
                      ...prev,
                      memberCnt: Math.max(0, memCnt - 1),
                    }));
                  }}>
                  <Image source={require('../../../assets/minus_dis.png')} />
                </Pressable>
                <DetailMemberCounter>
                  <CounterNumber>{state?.memberCnt}</CounterNumber>
                </DetailMemberCounter>
                <Pressable
                  onPress={() => {
                    let memCnt = state.memberCnt;
                    setState(prev => ({
                      ...prev,
                      memberCnt: Math.max(0, memCnt + 1),
                    }));
                  }}>
                  <Image source={require('../../../assets/plus_dis.png')} />
                </Pressable>
              </DetailAdjustMembers>
            </RecMembersBox>
            <RecTeamsBox>
              <RecTeamsQueHighlight />
              <RecTeamsQue>몇 팀으로{'\n'}나누고 싶나요?</RecTeamsQue>
              <DetailAdjustMembers>
                <Pressable
                  onPress={() => {
                    let teamCnt = state.teamCnt;
                    setState(prev => ({
                      ...prev,
                      teamCnt: Math.max(0, teamCnt - 1),
                    }));
                  }}>
                  <Image source={require('../../../assets/minus_dis.png')} />
                </Pressable>
                <DetailMemberCounter>
                  <CounterNumber>{state.teamCnt}</CounterNumber>
                </DetailMemberCounter>
                <Pressable
                  onPress={() => {
                    let teamCnt = state.teamCnt;
                    setState(prev => ({
                      ...prev,
                      teamCnt: Math.max(0, teamCnt + 1),
                    }));
                  }}>
                  <Image source={require('../../../assets/plus_dis.png')} />
                </Pressable>
              </DetailAdjustMembers>
            </RecTeamsBox>
          </RecMemberOptionContainer>
        </RecElementsRecoContainer>
      </View>
    </RecSetHeader>
  );
};

export default Counter;
