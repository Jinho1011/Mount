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
import Caution from '../../../../components/Common/Caution';

const PageWrap = styled.View``;

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
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
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  color: #8b8b8b;
  margin-top: 11px;
  margin-left: 3px;
`;

const TotalPriceContainer = styled.View`
  padding-left: 20px;
  padding-top: 25px;
  padding-bottom: 19px;
`;

const BorderLine = styled.View`
  height: 4px;
  border: 0.35px solid #eaeaea;
  background: #f3f3f3;
`;

const CautionContainer = styled.View`
  padding: 24px 20px 17px 20px;
`;

const FoodSinglePresenter = ({state, setState}) => {
  return (
    <PageWrap style={{flex: 1}}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollContainer>
        <TitleContainer
          img={state?.foodSingle?.img}
          title={state?.foodSingle?.name}
          info={state?.foodSingle?.detail}
        />
        <Counter state={state} setState={setState} />
        <BorderLine />
        <TotalPriceContainer>
          <TotalPrice state={state} setState={setState} />
        </TotalPriceContainer>
        <FoodSingleSmallBorderLine />
        <RecomendationContainer>
          <RecomendationTitle>Mount의 추천</RecomendationTitle>
          <RecomendationDetailBox>
            <RecomendationDetailTitle>음식 설명</RecomendationDetailTitle>
            <RecomendationDetail>
              {state?.foodSingle?.description}
            </RecomendationDetail>
          </RecomendationDetailBox>
        </RecomendationContainer>
        <BorderLine />
        <CautionContainer>
          <Caution
            state={state}
            setState={setState}
            caution={state?.foodSingle?.caution}
          />
        </CautionContainer>
      </ScrollContainer>
      <BottomConatiner>
        <ChangeCountButton>
          <ChangeCountText>수량변경</ChangeCountText>
        </ChangeCountButton>
        <LikeButton>
          <Image source={require('../../../../../assets/Like.png')} />
        </LikeButton>
        <LikeCount>23</LikeCount>
      </BottomConatiner>
    </PageWrap>
  );
};

export default FoodSinglePresenter;
