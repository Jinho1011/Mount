import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

import FocusAwareStatusBar from '../../../../components/StatusBar';

const PageWrap = styled.View``;

const ScrollContainer = styled.ScrollView`
  background-color: #e5e5e5;
`;

const FoodImage = styled.Image`
  width: 100%;
  height: 254px;
`;

const DetailHeader = styled.View`
  padding: 16px 20px 20px 20px;
  background-color: #fff;
  justify-content: space-between;
`;

const DetailTitleContainer = styled.View`
  margin-bottom: 26px;
`;

const DetailTitle = styled.Text`
  color: #000;
  font-size: 18px;
  line-height: 26px;
  font-family: 'NotoSansKR-Bold';
  margin-bottom: 4px;
`;

const DetailSetInfo = styled.View`
  flex-direction: row;
`;

const DetailSetLabelContainer = styled.View`
  padding: 2px 4px 1px 4px;
  background-color: #f3f3f3;
  border-radius: 6px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const DetailSetLabel = styled.Text`
  color: #8b8b8b;
  font-size: 8px;
  font-family: 'NotoSansKR-Regular';
  line-height: 12px;
`;

const DetailSetElements = styled.Text`
  color: #777777;
  font-size: 10px;
  font-family: 'NotoSansKR-Regular';
  line-height: 15px;
`;

const DetailMembers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 14px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
`;

const DetailMemberText = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: 'NotoSansKR-Bold';
  line-height: 20px;
`;

const DetailAdjustMembers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
const FoodSetListContainer = styled.View`
  margin-top: 4px;
  padding: 20px 20px 20px 20px;
  justify-content: space-between;
  background-color: #fff;
`;

const FoodSetListTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

const FoodSetListItemBigContainer = styled.View`
  margin-top: 18px;
`;

const FoodSetListItemContainer = styled.View`
  margin: 12px 16px 20px 16px;
`;

const FoodSetItem = styled.View`
  flex-direction: row;
`;

const FoodSetItemName = styled.Text`
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

const FoodSetItemCountBlock = styled.View`
  background: #f3f3f3;
  border-radius: 12.5px;
  margin-top: 3px;
  margin-left: 6px;
  padding: 2px 16px 3px 16px;
`;

const FoodSetItemCount = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const FoodSetItemPriceContainer = styled.View`
  flex-direction: column;
  margin-left: 12px;
`;

const FoodSetItemSize = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  text-align: right;
  color: #828282;
`;

const FoodSetItemPrice = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: right;

  margin-left: 12px;
`;

const FoodSetBorderLine = styled.View`
  border: 0.35px solid #eaeaea;

  margin-top: 14px;
`;

const MoreRecButton = styled.TouchableOpacity`
  padding: 12px 76px;
  margin: 24px 28px 22px 28px;
  background: #e2f955;
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

const FoodSetTotalPriceTitle = styled.Text`
  margin-top: 26px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const FoodSetTotalCalculatorContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 20px;
  padding-left: 14px;
`;

const PriceForPersonBox = styled.View`
  flex-direction: column;
`;

const PriceForPersonTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

const PriceForPersonPrice = styled.Text`
  margin-top: -5px;
  margin-bottom: 1px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

const CloseImageContainer = styled.View`
  margin-top: 15px;
  margin-left: 56px;
  margin-bottom: 6px;
`;

const FoodSetTotalCount = styled.Text`
  margin: 9px 0 2px 14px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

const FoodSetTotalResultBox = styled.View`
  flex-direction: column;
  margin-left: 70px;
`;

const ResultTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #8b8b8b;
`;

const ResultPrice = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #ff5151;
`;

/* 주의사항 */
const CautionContainer = styled.View`
  margin-top: -10px;
  padding: 24px 20px 92px 20px;
  background: #ffffff;
`;

const CautionTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #9e9e9e;
`;

const CautionDetailContainer = styled.View`
  margin-top: 10px;
  padding: 14px 12px 12px 12px;

  background: #f3f3f3;
`;

const CautionDetail = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

/* bottom button container */
const BottomConatiner = styled.View`
  flex-direction: row;
  background: #ffffff;
  border: 0.3px solid #b4b4b4;

  padding: 8px 21px 8px 23px;
`;

const ChangeCountButton = styled.TouchableOpacity`
  padding: 12px 118px;

  background: #e2f955;
  border-radius: 5px;

  height: 48px;
`;

const ChangeCountText = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

const LikeButton = styled.TouchableOpacity`
  margin: 14.5px 0 14.5px 13px;
`;

const LikeCount = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #8b8b8b;

  margin-top: 11px;
  margin-left: 3px;
`;

export default () => {
  const navigation = useNavigation();
  return (
    <PageWrap style={{flex: 1}}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />

      <ScrollContainer>
        <FoodImage
          source={require('../../../../assets/food_detail_sample.png')}
        />
        <DetailHeader>
          <DetailTitleContainer>
            <DetailTitle>제목몇글자들어가나요</DetailTitle>
            <DetailSetInfo>
              <DetailSetLabelContainer>
                <DetailSetLabel>세트</DetailSetLabel>
              </DetailSetLabelContainer>
              <DetailSetElements>
                구성품1, 구성품2, 구성품3, 구성품4
              </DetailSetElements>
            </DetailSetInfo>
          </DetailTitleContainer>
          <DetailMembers>
            <DetailMemberText>총 인원 수</DetailMemberText>
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
          </DetailMembers>
        </DetailHeader>
        <FoodSetListContainer>
          <FoodSetListTitle>구성품</FoodSetListTitle>
          <FoodSetListItemBigContainer>
            <FoodSetListItemContainer>
              <FoodSetItem>
                <Image
                  source={require('../../../../assets/rec_set_item_image_sample.png')}
                />
                <FoodSetItemName>상품이름이...</FoodSetItemName>
                <MinusPressable
                  onPress={() => {
                    console.log('plus');
                  }}>
                  <Image source={require('../../../../assets/minus.png')} />
                </MinusPressable>
                <FoodSetItemCountBlock>
                  <FoodSetItemCount>3</FoodSetItemCount>
                </FoodSetItemCountBlock>
                <PlusPressable
                  onPress={() => {
                    console.log('plus');
                  }}>
                  <Image source={require('../../../../assets/plus.png')} />
                </PlusPressable>
                <FoodSetItemPriceContainer>
                  <FoodSetItemSize>4인 (800g)</FoodSetItemSize>
                  <FoodSetItemPrice>16,000원</FoodSetItemPrice>
                </FoodSetItemPriceContainer>
              </FoodSetItem>
              <FoodSetBorderLine />
            </FoodSetListItemContainer>
          </FoodSetListItemBigContainer>
          <FoodSetTotalPriceTitle>총 예상금액</FoodSetTotalPriceTitle>
          <FoodSetTotalCalculatorContainer>
            <PriceForPersonBox>
              <PriceForPersonTitle>1인 기준</PriceForPersonTitle>
              <PriceForPersonPrice>12000원</PriceForPersonPrice>
            </PriceForPersonBox>
            <CloseImageContainer>
              <Image source={require('../../../../assets/close.png')} />
            </CloseImageContainer>
            <FoodSetTotalCount>20</FoodSetTotalCount>
            <FoodSetTotalResultBox>
              <ResultTitle>총 금액</ResultTitle>
              <ResultPrice>999,999원</ResultPrice>
            </FoodSetTotalResultBox>
          </FoodSetTotalCalculatorContainer>
        </FoodSetListContainer>
        <FoodSetBorderLine />
        <CautionContainer>
          <CautionTitle>주의 사항</CautionTitle>
          <CautionDetailContainer>
            <CautionDetail>
              미인을 옷을 불어 산야에 사라지지 굳세게 얼마나 열락의 교향악이다.
              그러므로 얼음과 지혜는 같은 내는 바이며, 그들에게 수 끓는다.
              위하여, 노년에게서 얼마나 쓸쓸한 황금시대의 기쁘며, 같이,
              아름다우냐?{'\n'}
              {'\n'}
              않는 피어나는 이것을 인간은 인생에 청춘을 우리 못할 무엇을 있다.
              목숨이 있는 같이, 그러므로 것이다. 장식하는 오직 그들에게
              하였으며, 품에 인생{'\n'}
              {'\n'}
              미인을 옷을 불어 산야에 사라지지 굳세게 얼마나 열락의 교향악이다.
              그러므로 얼음과 지혜는 같은 내는 바이며, 그들에게 수 끓는다.
              위하여, 노년에게서 얼마나 쓸쓸한 황금시대의 기쁘며, 같이,
              아름다우냐?
            </CautionDetail>
          </CautionDetailContainer>
        </CautionContainer>
      </ScrollContainer>
      <BottomConatiner>
        <ChangeCountButton>
          <ChangeCountText>수량변경</ChangeCountText>
        </ChangeCountButton>
        <LikeButton>
          <Image source={require('../../../../assets/Like.png')} />
        </LikeButton>
        <LikeCount>23</LikeCount>
      </BottomConatiner>
    </PageWrap>
  );
};
