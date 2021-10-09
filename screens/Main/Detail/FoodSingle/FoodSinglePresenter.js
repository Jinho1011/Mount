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

const PageWrap = styled.View`
`;

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

const DetailSetLabel = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center
  color: #777777;
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

const FoodSingleResultContainer = styled.View`
  margin-top: 4px;
  padding: 20px 20px 20px 20px;
  justify-content: space-between;
  background-color: #fff;
`;

const FoodSingleBorderLine = styled.View`
  border: 0.35px solid #EAEAEA;

  margin-top: 14px;
`;

const FoodSingleSmallBorderLine = styled.View`
  border: 0.35px solid #EAEAEA;
`;

const FoodSingleTotalPriceTitle = styled.Text`
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

const FoodSingleTotalCalculatorContainer = styled.View`
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
  color: #8B8B8B;
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
  color: #8B8B8B;
`;

const CloseImageContainer = styled.View`
  margin-top: 15px;
  margin-left: 56px;
  margin-bottom: 6px;
`;

const FoodSingleTotalCount = styled.Text`
  margin: 9px 0 2px 14px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #8B8B8B;
`;

const FoodSingleTotalResultBox = styled.View`
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
  color: #8B8B8B;
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
  color: #FF5151;
`;

/* 마운트의 추천 */
const RecomendationContainer = styled.View`
  padding: 18px 20px 20px 20px;
  background: #ffffff;
`;

const RecomendationTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const RecomendationDetailBox = styled.View`
  padding: 16px 20px 80px 20px;
  background: #F3F3F3;
  margin-top: 18px;
`;

const RecomendationDetailTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const RecomendationDetail = styled.Text`
  margin-top: 12px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
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
  color: #9E9E9E;
`;

const CautionDetailContainer = styled.View`
  margin-top: 10px;
  padding: 14px 12px 12px 12px;

  background: #F3F3F3;
`;

const CautionDetail = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #8B8B8B;
`;

/* bottom button container */
const BottomConatiner = styled.View`
  flex-direction: row;
  background: #FFFFFF;
  border: 0.3px solid #B4B4B4;

  padding: 8px 21px 8px 23px;
`;

const ChangeCountButton = styled.TouchableOpacity`
  padding: 12px 118px;

  background: #E2F955;
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
  color: #8B8B8B;

  margin-top: 11px;
  margin-left: 3px;
`;

export default () => {
  const navigation = useNavigation();
  return (
    <PageWrap style={{ flex: 1 }}>
      <ScrollContainer>
        <FoodImage
          source={require('../../../../assets/food_detail_sample.png')}
        />
        <DetailHeader>
          <DetailTitleContainer>
            <DetailTitle>고기</DetailTitle>
            <DetailSetInfo>            
              <DetailSetLabel>1인분 200g 기준</DetailSetLabel>              
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
        <FoodSingleResultContainer>
          <FoodSingleTotalPriceTitle>총 예상금액</FoodSingleTotalPriceTitle>        
          <FoodSingleTotalCalculatorContainer>
            <PriceForPersonBox>
              <PriceForPersonTitle>1인 기준</PriceForPersonTitle>
              <PriceForPersonPrice>12000원</PriceForPersonPrice>
            </PriceForPersonBox>
            <CloseImageContainer>
              <Image source={require('../../../../assets/close.png')} /> 
            </CloseImageContainer>
            <FoodSingleTotalCount>20</FoodSingleTotalCount>  
            <FoodSingleTotalResultBox>
              <ResultTitle>총 금액</ResultTitle>
              <ResultPrice>999,999원</ResultPrice>
            </FoodSingleTotalResultBox>          
          </FoodSingleTotalCalculatorContainer>    
        </FoodSingleResultContainer>
        <FoodSingleSmallBorderLine />
        <RecomendationContainer>
          <RecomendationTitle>Mount의 추천</RecomendationTitle>
          <RecomendationDetailBox>
            <RecomendationDetailTitle>음식 설명</RecomendationDetailTitle>
            <RecomendationDetail>
            위하여서 사랑의 이상의 우리의 보라. 우리의 못할 용기가 몸이 철환하였는가? 
            인간의 되려니와, 불어 같이, 아니다. 따뜻한 같이 아니한 이것이다. {"\n"}{"\n"}
            위하여서 사랑의 이상의 우리의 보라. 우리의 못할 용기가 몸이 철환하였는가? 
            인간의 되려니와, 불어 같이, 아니다. 따뜻한 같이 아니한 이것이다. 
            </RecomendationDetail>
          </RecomendationDetailBox>
        </RecomendationContainer>
        <FoodSingleBorderLine />
          <CautionContainer>
            <CautionTitle>주의 사항</CautionTitle>
            <CautionDetailContainer>
              <CautionDetail>
              미인을 옷을 불어 산야에 사라지지 굳세게 얼마나 열락의 교향악이다.
              그러므로 얼음과 지혜는 같은 내는 바이며, 그들에게 수 끓는다. 위하여,
              노년에게서 얼마나 쓸쓸한 황금시대의 기쁘며, 같이, 아름다우냐?{"\n"}{"\n"}

              않는 피어나는 이것을 인간은 인생에 청춘을 우리 못할 무엇을 있다.
              목숨이 있는 같이, 그러므로 것이다. 장식하는 오직 그들에게 하였으며,
              품에 인생{"\n"}{"\n"}

              미인을 옷을 불어 산야에 사라지지 굳세게 얼마나 열락의 교향악이다. 
              그러므로 얼음과 지혜는 같은 내는 바이며, 그들에게 수 끓는다. 
              위하여, 노년에게서 얼마나 쓸쓸한 황금시대의 기쁘며, 같이, 아름다우냐? 
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
