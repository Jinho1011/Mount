import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import RecreationSingleContainer from './RecreationSingleContainer';
import TitleContainer from '../../../../components/Common/SingleTitle';
import Counter from '../../../../components/Rec/Counter';
import Item from '../../../../components/Common/Item';
import TotalPrice from '../../../../components/Common/TotalPrice';
import Caution from '../../../../components/Common/Caution';
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

const RecSetListTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

/* 가이드라인 */
const GuideLineTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 12px;
  line-height: 17px;
  color: #000000;
  padding-left: auto;
`;

const GuideLineContainer = styled.View`
  margin-top: -20px;
  background: #ffffff;
  border: 1px solid #ff0000;
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

const RecreationSinglePresenter = ({state, setState}) => {
  return (
    <PageWrap style={{flex: 1}}>
      <ScrollContainer>
        <TitleContainer
          img={state?.recSingle[0]?.img}
          title={state?.recSingle[0]?.title}
          info={state?.recSingle[0]?.info}
        />
        <Counter state={state} setState={setState} />
        <BorderLine />
        <RecSetListContainer>
          <RecSetListTitle>저희 레크는요...</RecSetListTitle>
          <GuideLineTitle>가이드라인</GuideLineTitle>
        </RecSetListContainer>
        <GuideLineContainer>
          <GuideLineImageBox>
            <Image
              source={require('../../../../../assets/guideline_sample.png')}
            />
          </GuideLineImageBox>
        </GuideLineContainer>
        <BorderLine />
        <ContentContainer>
          <FoodSetListTitle>구성품</FoodSetListTitle>
          <ItemsContainer>
            {state?.items?.map(item => {
              return (
                <Item
                  state={state}
                  setState={setState}
                  item={item}
                  key={item.id}
                />
              );
            })}
          </ItemsContainer>
          <TotalPriceContainer>
            <TotalPrice />
          </TotalPriceContainer>
        </ContentContainer>
        <Caution caution={state?.recSingle[0]?.caution} />
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
