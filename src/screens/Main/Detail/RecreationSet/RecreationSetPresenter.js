import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import TitleContainer from '../../../../components/Common/SetTitle';
import Counter from '../../../../components/Rec/Counter';
import Item from '../../../../components/Common/Item';
import TotalPrice from '../../../../components/Common/TotalPrice';
import Caution from '../../../../components/Common/Caution';

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
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

const RecSetListItemBigContainer = styled.View`
  border: 1px solid #eaeaea;
  border-radius: 12px;
  margin-top: 17px;
  padding: 14px 15px 0px 15px;
`;

const RecSetListName = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const RecSetListItemTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 17px;
  color: #000000;
  padding-top: 14px;
  margin-bottom: 13px;
`;

const RecSetBorderLine = styled.View`
  border: 0.35px solid #eaeaea;
  padding-top: 14px;
`;

const MoreRecButton = styled.TouchableOpacity`
  padding: 12px 76px;
  margin: 24px 28px 22px 28px;
  background: #e2f955;
  border-radius: 5px;
`;

const MoreRecButtonText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

/* 주의사항 */
const CautionContainer = styled.View`
  margin-top: -10px;
  padding: 24px 20px 92px 20px;
  background: #ffffff;
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
  display: flex;
  align-items: center;
  color: #8b8b8b;

  margin-top: 11px;
  margin-left: 3px;
`;

const CounterContainer = styled.View`
  background: #ffffff;
  padding: 16px 20px 23px 20px;
`;

const TotalPriceContainer = styled.View`
  padding-top: 25px;
`;

const RecreationSetPresenter = ({state, setState}) => {
  return (
    <PageWrap style={{flex: 1}}>
      <ScrollContainer>
        <TitleContainer
          img={state?.recSet?.img}
          title={state?.recSet?.title}
          // items 배열의 name들을 map으로 받아오고 ', '으로 join
          items={state?.recSet?.items?.map(item => item.name).join(', ')}
        />
        <CounterContainer>
          <Counter state={state} setState={setState} />
        </CounterContainer>
        <RecSetListContainer>
          <RecSetListTitle>세트 리스트</RecSetListTitle>
          <RecSetListItemBigContainer>
            <RecSetListName>{state.recSet.title}</RecSetListName>
            <RecSetListItemTitle>구성품</RecSetListItemTitle>
            {state?.recSet?.items?.map(item => {
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
          <TotalPriceContainer>
            <TotalPrice state={state} setState={setState} />
          </TotalPriceContainer>
        </RecSetListContainer>
        <RecSetBorderLine />
        <CautionContainer>
          <Caution
            state={state}
            setState={setState}
            caution={state?.recSet.caution}
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

export default RecreationSetPresenter;
