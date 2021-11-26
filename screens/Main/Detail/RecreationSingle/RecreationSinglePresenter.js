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

const PageWrap = styled.View``;

const ScrollContainer = styled.ScrollView`
  background-color: #e5e5e5;
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

/* 가이드라인 */
const GuideLineTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #000000;
  margin-left: 152px;
`;

const GuideLineContainer = styled.View`
  margin-top: -20px;
  background: #ffffff;
  border: 1px solid #ff0000;
`;

const GuideLineImageBox = styled.View`
  padding: 28px 44px 17px 39px;
`;

const SwipeContainer = styled.View`
  flex-direction: row;
  padding: 10px 140px 10px 120px;
  background: #ffffff;
`;

const RedCircle = styled.View`
  margin: 0px 15px;
`;

const GrayCircle = styled.View`
  margin: 0px 15px;
`;

const RecSetBorderLine = styled.View`
  border: 0.35px solid #eaeaea;
`;

const FoodSetListContainer = styled.View`
  margin-top: 4px;
  background-color: #fff;
`;

const FoodSetListTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #000000;

  margin-left: 20px;
  margin-top: 36px;
`;

const FoodSetListItemBigContainer = styled.View`
  margin-top: 9px;
  padding: 0 35px 0 35px;
`;

/* 주의사항 */
const CautionContainer = styled.View`
  margin-top: 4px;
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
        <RecSetListContainer>
          <RecSetListTitle>저희 레크는요</RecSetListTitle>
          <GuideLineTitle>가이드라인</GuideLineTitle>
        </RecSetListContainer>
        <GuideLineContainer>
          <GuideLineImageBox>
            <Image
              source={require('../../../../assets/guideline_sample.png')}
            />
          </GuideLineImageBox>
        </GuideLineContainer>
        <SwipeContainer>
          <RedCircle>
            <Image source={require('../../../../assets/red_circle.png')} />
          </RedCircle>
          <GrayCircle>
            <Image source={require('../../../../assets/gray_circle.png')} />
          </GrayCircle>
          <GrayCircle>
            <Image source={require('../../../../assets/gray_circle.png')} />
          </GrayCircle>
          <GrayCircle>
            <Image source={require('../../../../assets/gray_circle.png')} />
          </GrayCircle>
          <GrayCircle>
            <Image source={require('../../../../assets/gray_circle.png')} />
          </GrayCircle>
        </SwipeContainer>
        <RecSetBorderLine />
        <FoodSetListContainer>
          <FoodSetListTitle>구성품</FoodSetListTitle>
          <FoodSetListItemBigContainer>
            {state?.items.map(item => {
              return (
                <Item
                  state={state}
                  setState={setState}
                  name={item.name}
                  price={item.price}
                  key={item.id}
                />
              );
            })}
          </FoodSetListItemBigContainer>
          <TotalPrice state={state} setState={setState} />
        </FoodSetListContainer>
        <RecSetBorderLine />
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

export default RecreationSinglePresenter;
