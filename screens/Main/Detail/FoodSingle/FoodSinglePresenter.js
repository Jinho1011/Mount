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
import TitleContainer from '../../../../components/Common/SingleTitle';

import FocusAwareStatusBar from '../../../../components/StatusBar';
import Counter from '../../../../components/Food/Counter';
import TotalPrice from '../../../../components/Common/TotalPrice';


const PageWrap = styled.View``;

const ScrollContainer = styled.ScrollView`
  background-color: #e5e5e5;
`;

const FoodSingleBorderLine = styled.View`
  border: 0.35px solid #eaeaea;

  margin-top: 14px;
`;

const FoodSingleSmallBorderLine = styled.View`
  border: 0.35px solid #eaeaea;
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
  background: #f3f3f3;
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

const FoodSinglePresenter = ({state, setState}) => {
  return (
    <PageWrap style={{flex: 1}}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollContainer>
        <TitleContainer 
          img={state?.foodSingle[0]?.img}
          title={state?.foodSingle[0]?.title}
          info={state?.foodSingle[0]?.info}
        />
        <Counter state={state} setState={setState} />
        <TotalPrice state={state} setState={setState} />
        <FoodSingleSmallBorderLine />
        <RecomendationContainer>
          <RecomendationTitle>Mount의 추천</RecomendationTitle>
          <RecomendationDetailBox>
            <RecomendationDetailTitle>음식 설명</RecomendationDetailTitle>
            <RecomendationDetail>
              위하여서 사랑의 이상의 우리의 보라. 우리의 못할 용기가 몸이
              철환하였는가? 인간의 되려니와, 불어 같이, 아니다. 따뜻한 같이
              아니한 이것이다. {'\n'}
              {'\n'}
              위하여서 사랑의 이상의 우리의 보라. 우리의 못할 용기가 몸이
              철환하였는가? 인간의 되려니와, 불어 같이, 아니다. 따뜻한 같이
              아니한 이것이다.
            </RecomendationDetail>
          </RecomendationDetailBox>
        </RecomendationContainer>
        <FoodSingleBorderLine />
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

export default FoodSinglePresenter;
