import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import FocusAwareStatusBar from '../../../components/StatusBar';
import PlanItemsContainer from '../../../components/Plan/PlanItems';
import TotalPrice from '../../../components/Common/TotalPrice';
import Caution from '../../../components/Common/Caution';

const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

const ScrollContainer = styled.ScrollView``;

const PlanTitleContainer = styled.View`
  flex-direction: row;
  padding: 12px 21px 12px 20px;
  justify-content: space-between;
`;

const PlanTitle = styled.Text`
  color: #555555;
  font-size: 16px;
  font-family: 'NotoSansKR-Bold';
  line-height: 24px;
`;

const PlanEditBtn = styled.Pressable`
  width: 55px;
  height: 33px;
  background: #f3f3f3;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const PlanEditBtnText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const Divider = styled.View`
  height: 4px;
  background: #f3f3f3;
`;

const TotalPriceContainer = styled.View`
  padding: 0 26px 19px 20px;
`;

const CautionContainer = styled.View`
  background: #ffffff;
  padding: 24px 20px 29px 20px;
`;

const FooterContainer = styled.View`
  padding: 16px 23px 26px 23px;
  border-top-width: 0.3px;
  border-top-color: #b4b4b4;
  background: #ffffff;
`;

const FooterButton = styled.Pressable`
  border-radius: 5px;
  background: #e2f955;
  justify-content: center;
  align-items: center;
  padding: 13px 0 11px 0;
`;

const FooterButtonText = styled.Text``;

export default () => {
  const navigation = useNavigation();
  const items = [
    {
      id: 1,
      title: '상품이름이몇글자들어가나요',
      count: 3,
      price: 16000,
      desc: '4인 (800g)',
    },
    {
      id: 2,
      title: '상품이름이몇글자들어가나요',
      count: 3,
      price: 16000,
      desc: '4인 (800g)',
    },
    {
      id: 3,
      title: '상품이름이몇글자들어가나요',
      count: 3,
      price: 16000,
      desc: '4인 (800g)',
    },
    {
      id: 4,
      title: '상품이름이몇글자들어가나요',
      count: 3,
      price: 16000,
      desc: '4인 (800g)',
    },
    {
      id: 5,
      title: '상품이름이몇글자들어가나요',
      count: 3,
      price: 16000,
      desc: '4인 (800g)',
    },
  ];
  return (
    <Container>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollContainer>
        <PlanTitleContainer>
          <PlanTitle>최강산디 엠티 기획서</PlanTitle>
          <PlanEditBtn>
            <PlanEditBtnText>편집</PlanEditBtnText>
          </PlanEditBtn>
        </PlanTitleContainer>
        <Divider></Divider>
        <PlanItemsContainer items={items} />
        <Divider></Divider>
        <PlanItemsContainer items={items} />
        <TotalPriceContainer>
          {/* <TotalPrice state={state} setState={setState} /> */}
        </TotalPriceContainer>
        <Divider></Divider>
        <CautionContainer>
          <Caution caution={'주의사항'} />
        </CautionContainer>
      </ScrollContainer>
      <FooterContainer>
        <FooterButton
          onPress={() => {
            console.log('기획서로 다운받기');
          }}>
          <FooterButtonText>기획서로 다운받기</FooterButtonText>
        </FooterButton>
      </FooterContainer>
    </Container>
  );
};
