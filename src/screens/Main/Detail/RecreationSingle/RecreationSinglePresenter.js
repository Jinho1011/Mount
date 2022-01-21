import React from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import FocusAwareStatusBar from '../../../../components/StatusBar';
import TitleContainer from '../../../../components/Common/SingleTitle';
import SingleCounter from '../../../../components/Rec/SingleCounter';
import Components from '../../../../components/Rec/Components';
import RecSingleTotalPrice from '../../../../components/Rec/RecSingleTotalPrice';
import Swiper from 'react-native-swiper';

const PageWrap = styled.View``;

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
`;

/* 레크레이션 세트 리스트 */
const RecSetListContainer = styled.View`
  margin-top: 4px;
  padding: 20px 20px 20px 20px;
  justify-content: space-between;
  background-color: #fff;
`;

const RecTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  padding-left: 20px;
`;

/* 가이드라인 */
const GuideLineTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 12px;
  line-height: 17px;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
`;

const GuideLineContainer = styled.View`
  padding-top: 25px;
  background: #ffffff;
`;

const GuideLineImageBox = styled.View`
  padding: 28px 44px 17px 39px;
`;

const FoodSetListTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #000000;

  padding-left: 20px;
  padding-top: 36px;
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

const TotalPriceContainer = styled.View`
  padding-top: 25px;
  padding-bottom: 19px;
`;

const BorderLine = styled.View`
  height: 4px;
  border: 0.35px solid #eaeaea;
  background: #f3f3f3;
`;

const ContentContainer = styled.View`
  padding-left: 20px;
`;

const ItemsContainer = styled.View`
  margin-top: 18px;
  padding-left: 15px;
  padding-right: 35px;
`;

const CounterContainer = styled.View`
  padding: 17px 20px 24px 20px;
`;

const ComponentsContainer = styled(View)`
  padding: 36px 20px 0px 20px;
`;

const PriceContainer = styled(View)`
  padding: 25px 20px 20px 20px;
`;

const StyledSwiper = styled(Swiper)`
  height: 240px;
`;

const SwiperView = styled(View)``;

const SwiperImage = styled(Image)`
  flex: 1;
`;

const RecreationSinglePresenter = ({state, setState}) => {
  // console.log(state?.recSingle?.guideImages);
  const guideImages = state?.recSingle?.guideImages;
  return (
    <PageWrap style={{flex: 1}}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollContainer>
        <TitleContainer
          img={state?.recSingle?.img}
          name={state?.recSingle?.name}
          oneLineDescription={state?.recSingle?.oneLineDescription}
        />
        <CounterContainer>
          <SingleCounter state={state} setState={setState} />
        </CounterContainer>
        <BorderLine />
        <GuideLineContainer>
          <RecTitle>저희 레크는요...</RecTitle>
          <GuideLineTitle>가이드라인</GuideLineTitle>
          {/* <StyledSwiper>
            {guideImages?.map(guideImage => {
              return (
                <SwiperView>
                  <Text>hello</Text>
                </SwiperView>
              );
            })}
          </StyledSwiper> */}
        </GuideLineContainer>
        <BorderLine />
        <ComponentsContainer>
          {state?.recSingle?.components?.map(component => {
            return (
              <Components
                state={state}
                setState={setState}
                component={component}
                key={component.id}
              />
            );
          })}
        </ComponentsContainer>
        <PriceContainer>
          <RecSingleTotalPrice state={state} setState={setState} />
        </PriceContainer>
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

export default RecreationSinglePresenter;
