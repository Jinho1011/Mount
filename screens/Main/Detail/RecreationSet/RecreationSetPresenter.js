import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const ScrollContainer = styled.ScrollView`
  background-color: #e5e5e5;
`;

const RecImage = styled.Image`
  width: 100%;
  height: 254px;
`;

const RecSetHeader = styled.View`
  padding: 16px 20px 20px 20px;
  justify-content: space-between;
  background-color: #fff;
`;

const RecSetTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
`;

const RecSetInfo = styled.View`
  flex-direction: row;
`;

const RecSetLabelContainer = styled.View`
  padding: 2px 4px 1px 4px;
  background-color: #F3F3F3;
  border-radius: 6px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const RecSetLabel = styled.Text`
  font-family: Noto Sans KR;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
`;

const RecSetElements = styled.Text`
  font-family: Noto Sans KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  color: #777777;
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
  background-color: #E2F955;
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
  border: 1px solid #EAEAEA;
  border-radius: 8px;
`;

const RecTeamsBox = styled.View`
  width: 50%;
  border: 1px solid #EAEAEA;
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
  background: #E2F955;
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
  background: #E2F955;
  width: 48px;
  height: 10px;
  margin-left: 10px;
  margin-top: 24px;
`;

/* 레크레이션 세트 리스트 */
const RecSetListContainer = styled.View`
  margin-top: 4px;
  padding: 20px 20px 20px 20px;
  justify-content: space-between;
  background-color: #fff;
`;

export default () => {
  const navigation = useNavigation();
  return (
    <ScrollContainer>
      <RecImage 
        source={require('../../../../assets/recreation_set_sample.png')}
      />
      <RecSetHeader>
        <View>
          <RecSetTitle>제목몇글자들어가나요</RecSetTitle>
          <RecSetInfo>
            <RecSetLabelContainer>
              <RecSetLabel>세트</RecSetLabel>
            </RecSetLabelContainer>
            <RecSetElements>
                구성품1, 구성품2, 구성품3, 구성품4, 구성품5 ...
            </RecSetElements>
          </RecSetInfo>
          <RecElementsRecoContainer>
            <RecMemberResultBlock>
              <RecMemberResult>
                0명이 한 팀으로 총 0팀이 만들어져요!
              </RecMemberResult>
            </RecMemberResultBlock>
            <RecMemberOptionContainer>
              <RecMembersBox>
                <RecMembersQueHighlight />
                <RecMembersQue>
                  총 몇 명이{"\n"}함께 하나요?
                </RecMembersQue>
              </RecMembersBox>
              <RecTeamsBox>
                <RecTeamsQueHighlight />
                <RecTeamsQue>
                  몇 팀으로{"\n"}나누고 싶나요?
                </RecTeamsQue>
              </RecTeamsBox>
            </RecMemberOptionContainer>
          </RecElementsRecoContainer>
        </View>       
      </RecSetHeader>
      <RecSetListContainer>

      </RecSetListContainer>
    </ScrollContainer>
  );
};
