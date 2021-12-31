import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import FocusAwareStatusBar from '../../../components/StatusBar';

import PlanItemsContainer from '../../../components/Plan/PlanItems';

const Container = styled.ScrollView`
  background: #ffffff;
`;

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

export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <PlanTitleContainer>
        <PlanTitle>최강산디 엠티 기획서</PlanTitle>
        <PlanEditBtn>
          <PlanEditBtnText>편집</PlanEditBtnText>
        </PlanEditBtn>
      </PlanTitleContainer>
      <Divider></Divider>
      <PlanItemsContainer />
    </Container>
  );
};
