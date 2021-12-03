import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import TitleContainer from '../../../../components/Common/SetTitle';
import Counter from '../../../../components/Food/Counter';
import Item from '../../../../components/Common/Item';

import FocusAwareStatusBar from '../../../../components/StatusBar';
import TotalPrice from '../../../../components/Common/TotalPrice';
import Caution from '../../../../components/Common/Caution';

const PageWrap = styled.View``;

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
`;

const FoodSetListContainer = styled.View`
  background-color: #fff;
`;

const FoodSetListTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  line-height: 16px;
  font-size: 12px;
  color: #000000;
  margin-top: 32px;
`;

const ItemsContainer = styled.View`
  margin-top: 18px;
  padding-left: 15px;
  padding-right: 35px;
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

const ContentContainer = styled.View`
  padding-left: 20px;
  display: flex;
  justify-content: center;
`;

const TotalPriceContainer = styled.View`
  margin-top: 11px;
`;

const CautionContainer = styled.View`
  padding: 24px 20px 17px 20px;
`;

const BorderLine = styled.View`
  height: 4px;
  border: 0.35px solid #eaeaea;
  background: #f3f3f3;
`;

const FoodSetPresenter = ({state, setState}) => {
  const navigation = useNavigation();

  return (
    <PageWrap style={{flex: 1}}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollContainer>
        <TitleContainer
          img={state?.foodSet[0]?.img}
          title={state?.foodSet[0]?.title}
          // items 배열의 name들을 map으로 받아오고 ', '으로 join
          items={state?.items?.map(item => item.name).join(', ')}
        />
        <Counter state={state} setState={setState} />
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
        <BorderLine />
        <CautionContainer>
          <Caution
            state={state}
            setState={setState}
            caution={state?.foodSet[0]?.caution}
          />
        </CautionContainer>
      </ScrollContainer>
      <BottomConatiner>
        <ChangeCountButton
          onPress={() => {
            navigation.navigate(
              'FoodSetChangeCount',
              {state: state},
              {setState: setState},
            );
          }}>
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

export default FoodSetPresenter;
