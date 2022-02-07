import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import styled from 'styled-components';
import Item from '../../../components/Food/Item';

const ScrollContainer = styled(ScrollView)`
  background-color: #fff;
  padding: 18px 20px 0 20px;
`;

const CountBox = styled(View)`
  background-color: #e2f955;
  border-radius: 12px;
  padding: 25px 30px 25px 30px;
  align-items: center;
`;

const CountBoxTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  line-height: 26px;
  color: #000000;
`;

const Counter = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  margin: auto;
`;

const MinusButton = styled(Pressable)`
  background: #b4b4b4;
  opacity: 0.6;
  border-radius: 16px;
  width: 24px;
  height: 24px;
  padding: 12px 6px;
  margin-right: 20px;
`;

const Minus = styled(Image)`
  margin: auto;
`;

const PlusButton = styled(Pressable)`
  background: #373737;
  border-radius: 16px;
  margin-left: 20px;
  padding: 7px;
`;

const Plus = styled(Image)`
  margin: auto;
`;

const NumberBox = styled(View)`
  padding-left: 45px;
  padding-right: 45px;
  background: #ffffff;
  border-radius: 5px;
`;

const Number = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 24px;
`;

const FoodsContainer = styled(View)`
  padding-top: 26px;
`;

const TopView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const MountLogoImage = styled(Image)`
  margin: auto;
`;

const TitleBox = styled(View)`
  justify-content: center;
`;

const Footer = styled(View)`
  padding: 8px 23px;
  background: #ffffff;
  border: 0.3px solid #b4b4b4;
`;

const ChangeCountButton = styled(Pressable)`
  padding: 12px 128px;
  background: ${prop => (prop.pressedCnt > 0 ? '#e2f955' : '#f3f3f3')};
  border-radius: 5px;
`;

const ChangeCountButtonText = styled(Text)`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  margin: auto;
`;

export default function FoodPlanPresenter({state, setState}) {
  function isPressed(value) {
    return value.isPressed === true;
  }
  const isPressedArr = state?.items.filter(isPressed);
  const navigation = useNavigation();
  let memCnt = state?.memberCnt;
  return (
    <>
      <ScrollContainer>
        <CountBox>
          <TitleBox>
            <TopView>
              <MountLogoImage
                source={require('../../../../assets/plan_mount.png')}
              />
              <CountBoxTitle> 의 정확한 음식량 추천을</CountBoxTitle>
            </TopView>
            <TopView>
              <CountBoxTitle>위해 인원 수를 입력해주세요 😃</CountBoxTitle>
            </TopView>
          </TitleBox>
          <Counter>
            <MinusButton
              onPress={() => {
                setState(prev => ({
                  ...prev,
                  memberCnt: Math.max(1, memCnt - 1),
                }));
              }}>
              <Minus source={require('../../../../assets/plan_minus.png')} />
            </MinusButton>
            <NumberBox>
              <Number>{state?.memberCnt}</Number>
            </NumberBox>
            <PlusButton
              onPress={() => {
                setState(prev => ({
                  ...prev,
                  memberCnt: Math.max(1, memCnt + 1),
                }));
              }}>
              <Plus source={require('../../../../assets/plan_plus.png')} />
            </PlusButton>
          </Counter>
        </CountBox>
        <FoodsContainer>
          {state?.items.map(item => {
            return (
              <Item
                item={item}
                state={state}
                setState={setState}
                key={item.id}
              />
            );
          })}
        </FoodsContainer>
      </ScrollContainer>
      <Footer>
        <ChangeCountButton
          onPress={() => {
            if (state?.pressedCnt > 0)
              navigation.navigate('FoodPlanChange', {isPressedArr});
          }}
          pressedCnt={state?.pressedCnt}>
          <ChangeCountButtonText>수량변경</ChangeCountButtonText>
        </ChangeCountButton>
      </Footer>
    </>
  );
}
