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
import TitleContainer from '../../../../components/Common/SetTitle';
import RecreationSetContainer from './RecreationSetContainer';
import Counter from '../../../../components/Rec/Counter';
import Item from '../../../../components/Common/Item';

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

const RecSetListItemBigContainer = styled.View`
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 0px 15px 0px 15px;
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
`;

const RecSetListItemTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  color: #000000;

  margin-top: 14px;
`;

const RecSetBorderLine = styled.View`
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

const RecSetTotalPriceTitle = styled.Text`
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

const RecSetTotalCalculatorContainer = styled.View`
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

const RecSetTotalCount = styled.Text`
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

const RecSetTotalResultBox = styled.View`
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

const RecreationSetPresenter = ({state, setState}) => {
  return (
    <PageWrap style={{flex: 1}}>
      <ScrollContainer>
        <TitleContainer
          img={state?.recSet[0]?.img}
          title={state?.recSet[0]?.title}
          // items 배열의 name들을 map으로 받아오고 ', '으로 join
          items={state?.recSet[0]?.items.map(item => item.name).join(', ')}
        />
        <Counter state={state} setState={setState} />
        <RecSetListContainer>
          <RecSetListTitle>세트 리스트</RecSetListTitle>
          <RecSetListItemBigContainer>
            <RecSetListName>레크 이름 텍스트</RecSetListName>
            <RecSetListItemTitle>구성품</RecSetListItemTitle>
            {state?.recSet[0]?.items.map(item => {
              return (
                <Item
                  state={state}
                  setState={setState}
                  item={item}
                  key={item.id}
                />
              );
            })}
            <MoreRecButton>
              <MoreRecButtonText>레크 정보 더보기</MoreRecButtonText>
            </MoreRecButton>
          </RecSetListItemBigContainer>
          <RecSetTotalPriceTitle>총 예상금액</RecSetTotalPriceTitle>
          <RecSetTotalCalculatorContainer>
            <PriceForPersonBox>
              <PriceForPersonTitle>1인 기준</PriceForPersonTitle>
              <PriceForPersonPrice>12000원</PriceForPersonPrice>
            </PriceForPersonBox>
            <CloseImageContainer>
              <Image source={require('../../../../../assets/close.png')} />
            </CloseImageContainer>
            <RecSetTotalCount>20</RecSetTotalCount>
            <RecSetTotalResultBox>
              <ResultTitle>총 금액</ResultTitle>
              <ResultPrice>999,999원</ResultPrice>
            </RecSetTotalResultBox>
          </RecSetTotalCalculatorContainer>
        </RecSetListContainer>
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
          <Image source={require('../../../../../assets/Like.png')} />
        </LikeButton>
        <LikeCount>23</LikeCount>
      </BottomConatiner>
    </PageWrap>
  );
};

export default RecreationSetPresenter;
