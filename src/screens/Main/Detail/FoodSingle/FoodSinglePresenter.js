import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import SingleTitle from '../../../../components/Food/SingleTitle';
import FocusAwareStatusBar from '../../../../components/StatusBar';
import Caution from '../../../../components/Common/Caution';
import SingleCounter from '../../../../components/Food/SingleCounter';
import SingleTotalPrice from '../../../../components/Food/SingleTotalPrice';
import _ from 'lodash';
import {useNavigation} from '@react-navigation/native';

const PageWrap = styled.View``;

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
`;

const FoodSingleSmallBorderLine = styled.View`
  border: 0.35px solid #eaeaea;
`;

/* 마운트의 추천 */
const RecomendationContainer = styled.View`
  padding-top: 18px;
  padding-bottom: 20px;
  background: #ffffff;
`;

const RecomendationTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
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
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const RecomendationDetail = styled.Text`
  padding-top: 12px;
  font-family: 'NotoSansKR-Regular';
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
  font-family: 'NotoSansKR-Regular';
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
  padding-top: 25px;
  padding-bottom: 19px;
`;

const BorderLine = styled.View`
  height: 4px;
  border: 0.35px solid #eaeaea;
  background: #f3f3f3;
`;

const CautionContainer = styled.View`
  padding-top: 24px;
  padding-bottom: 17px;
`;

const TopContentsContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

const BottomContentsContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

const FoodSinglePresenter = ({state, setState}) => {
  const navigation = useNavigation();
  return (
    <PageWrap style={{flex: 1}}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollContainer>
        <SingleTitle
          img={state?.foodSingle?.img}
          name={state?.foodSingle?.name}
          recommendPerPerson={state?.foodSingle?.recommendPerPerson}
        />
        <SingleCounter state={state} setState={setState} />
        <BorderLine />
        <TopContentsContainer>
          <TotalPriceContainer>
            <SingleTotalPrice state={state} setState={setState} />
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
        </TopContentsContainer>
        <BorderLine />
        <BottomContentsContainer>
          <CautionContainer>
            <Caution
              state={state}
              setState={setState}
              caution={state?.foodSingle?.caution}
            />
          </CautionContainer>
        </BottomContentsContainer>
      </ScrollContainer>
      <BottomConatiner>
        <ChangeCountButton
          onPress={() => {
            const _state = _.cloneDeep(state);
            navigation.navigate('FoodSingleChangeCount', {_state});
          }}>
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
