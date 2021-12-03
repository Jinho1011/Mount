import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {HeaderTitle} from '../../../../components/Header/Header';
import styled from 'styled-components';
import Item from '../../../../components/Common/Item';
import foodSet from '../../../../data/detail/foodSet';
import TotalPrice from '../../../../components/Common/TotalPrice';
import ProposalButton from '../../../../components/Common/ProposalButton';
import {ScrollView} from 'react-native-gesture-handler';

const PageWrap = styled.View`
  flex: 1;
`;

const StyledScrollView = styled(ScrollView)`
  background: #ffffff;
`;

const ContentContainer = styled.View`
  padding: 20px 20px 4px 20px;
`;

const SetContainer = styled.View`
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  height: 144px;
  padding: 21px 22px 21px 22px;
`;

const SetTitleContainer = styled.View`
  flex-direction: row;
`;

const SetImage = styled.Image`
  width: 54px;
  height: 54px;
`;

const SetTitle = styled.View`
  margin-left: 12px;
`;

const SetName = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  line-height: 26px;
  color: #000000;
`;

const SetItem = styled.Text`
  font-family: 'NotoSansKR-Normal';
  font-size: 10px;
  line-height: 15px;
  color: #777777;
  margin-top: 3px;
`;

const CounterContainer = styled.View`
  flex-direction: row;
  margin-top: 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MinusPressable = styled(Pressable)``;

const PlusPressable = styled(Pressable)``;

const CounterNumberBox = styled.View`
  background: #f3f3f3;
  border-radius: 5px;
  padding: 0px 45px 0px 45px;
  margin-left: 18px;
  margin-right: 18px;
`;

const CounterNumber = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 23px;
  color: #000000;
`;

const ListTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  margin-top: 26px;
`;

const ListContainer = styled.View`
  padding-top: 19px;
  padding-left: 15px;
  padding-right: 15px;
  background: #ffffff;
`;

const BorderLine = styled.View`
  border: 0.35px solid #eaeaea;

  margin-top: 14px;
`;

const TotalPriceContainer = styled.View`
  padding-top: 10px;
`;

const FoodSetChangeCountPresenter = ({state, setState}) => {
  return (
    <PageWrap>
      <StyledScrollView>
        <ContentContainer>
          <SetContainer>
            <SetTitleContainer>
              <SetImage
                source={require('../../../../assets/food_detail_sample.png')}
              />
              <SetTitle>
                <SetName>{state?.foodSet[0].title}</SetName>
                <SetItem>
                  {state?.items?.map(item => item.name).join(', ')}
                </SetItem>
              </SetTitle>
            </SetTitleContainer>
            <CounterContainer>
              <MinusPressable>
                <Image source={require('../../../../assets/minus_dis.png')} />
              </MinusPressable>
              <CounterNumberBox>
                <CounterNumber>0</CounterNumber>
              </CounterNumberBox>
              <PlusPressable>
                <Image source={require('../../../../assets/plus_.png')} />
              </PlusPressable>
            </CounterContainer>
          </SetContainer>
          <ListTitle>구성품</ListTitle>
          <ListContainer>
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
          </ListContainer>
          <TotalPriceContainer>
            <TotalPrice />
          </TotalPriceContainer>
        </ContentContainer>
        <BorderLine />
      </StyledScrollView>
      <ProposalButton />
    </PageWrap>
  );
};

export default FoodSetChangeCountPresenter;
