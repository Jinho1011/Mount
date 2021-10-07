import React from 'react';
import {View, Text, ScrollView, Image, Pressable, TouchableOpacity} from 'react-native';
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

/* 레크레이션 세트 리스트 */
const RecSetListContainer = styled.View`
  margin-top: 4px;
  padding: 20px 20px 20px 20px;
  justify-content: space-between;
  background-color: #fff;
`;

const RecSetListTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

const RecSetListItemBigContainer = styled.View`
  border: 1px solid #EAEAEA;
  border-radius: 12px;

  margin-top: 18px;
`;

const RecSetListName = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  margin-top: 14px;
  margin-left: 14px;
`;

const RecSetListItemTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  color: #000000;

  margin-top: 14px;
  margin-left: 16px;
`;

const RecSetListItemContainer = styled.View`
  margin: 12px 16px 20px 16px;
`;

const RecSetItem = styled.View`
  flex-direction: row;
`;

const RecSetItemName = styled.Text`
  font-family: Noto Sans KR;
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

const RecSetItemCountBlock = styled.View`
  background: #F3F3F3;
  border-radius: 12.5px;
  margin-top: 3px;
  margin-left: 6px;
  padding: 2px 16px 3px 16px;
`;

const RecSetItemCount = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const RecSetItemPriceContainer = styled.View`
  flex-direction: column;
  margin-left: 12px;
`;

const RecSetItemSize = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  text-align: right;
  color: #828282;
`;

const RecSetItemPrice = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: right;

  margin-left: 12px;
`;

const RecSetBorderLine = styled.View`
  border: 0.35px solid #EAEAEA;

  margin-top: 14px;
`;

const MoreRecButton = styled.TouchableOpacity`
  padding: 12px 76px;
  margin: 24px 28px 22px 28px;
  background: #E2F955;
  border-radius: 5px;
`;

const MoreRecButtonText = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

const RecSetTotalPriceContainer = styled.View`

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
                <DetailAdjustMembers>
                  <Pressable
                    onPress={() => {
                      console.log('minus');
                    }}>
                    <Image source={require('../../../../assets/minus_dis.png')} />
                  </Pressable>
                  <DetailMemberCounter>
                    <CounterNumber>0</CounterNumber>
                  </DetailMemberCounter>
                  <Pressable
                    onPress={() => {
                      console.log('plus');
                    }}>
                    <Image source={require('../../../../assets/plus_dis.png')} />
                  </Pressable>
                </DetailAdjustMembers>
              </RecMembersBox>
              <RecTeamsBox>
                <RecTeamsQueHighlight />
                <RecTeamsQue>
                  몇 팀으로{"\n"}나누고 싶나요?
                </RecTeamsQue>
                <DetailAdjustMembers>
                  <Pressable
                    onPress={() => {
                      console.log('minus');
                    }}>
                    <Image source={require('../../../../assets/minus_dis.png')} />
                  </Pressable>
                  <DetailMemberCounter>
                    <CounterNumber>0</CounterNumber>
                  </DetailMemberCounter>
                  <Pressable
                    onPress={() => {
                      console.log('plus');
                    }}>
                    <Image source={require('../../../../assets/plus_dis.png')} />
                  </Pressable>
                </DetailAdjustMembers>
              </RecTeamsBox>
            </RecMemberOptionContainer>
          </RecElementsRecoContainer>
        </View>       
      </RecSetHeader>
      <RecSetListContainer>
        <RecSetListTitle>세트 리스트</RecSetListTitle>
        <RecSetListItemBigContainer>
          <RecSetListName>레크 이름 텍스트</RecSetListName>
          <RecSetListItemTitle>구성품</RecSetListItemTitle>
          <RecSetListItemContainer>
            <RecSetItem>
              <Image source={require('../../../../assets/rec_set_item_image_sample.png')} />
              <RecSetItemName>상품이름이...</RecSetItemName>
              <MinusPressable
                    onPress={() => {
                      console.log('plus');
                    }}>
                    <Image source={require('../../../../assets/minus.png')} />
              </MinusPressable>
              <RecSetItemCountBlock>
                <RecSetItemCount>3</RecSetItemCount>
              </RecSetItemCountBlock>
              <PlusPressable
                    onPress={() => {
                      console.log('plus');
                    }}>
                    <Image source={require('../../../../assets/plus.png')} />
              </PlusPressable>
              <RecSetItemPriceContainer>
                <RecSetItemSize>4인 (800g)</RecSetItemSize>
                <RecSetItemPrice>16,000원</RecSetItemPrice>
              </RecSetItemPriceContainer>          
            </RecSetItem>
            <RecSetBorderLine />
            <MoreRecButton>
              <MoreRecButtonText>레크 정보 더보기</MoreRecButtonText>
            </MoreRecButton>
          </RecSetListItemContainer>
        </RecSetListItemBigContainer>
        <RecSetTotalPriceContainer>

        </RecSetTotalPriceContainer>      
      </RecSetListContainer>
    </ScrollContainer>
  );
};
