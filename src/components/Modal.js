import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import ProposalButton from './Common/ProposalButton';
import PlannerTitle from './PlannerTitle';

const Wrapper = styled.View`
  background: #ffffff;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  margin: auto;
  padding-bottom: 12px;
`;

const AddText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 12px;
  line-height: 16px;
  color: #8b8b8b;
`;

const Modal = () => {
  const planners = useSelector(state => state.planners.planners);
  return (
    <Wrapper>
      <PlannerTitle />
      <StyledTouchableOpacity>
        <AddText>+ 새로운 기획서 만들기</AddText>
      </StyledTouchableOpacity>
    </Wrapper>
  );
};

export default Modal;
