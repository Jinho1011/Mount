import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import ProposalButton from './Common/ProposalButton';
import {createPlanner, addItem} from '../store/actions/planners';
import Planner from './Planner';

const ModalContainer = styled.View`
  padding-top: 12px;
  background: #ffffff;
`;

const PlannersContainer = styled.ScrollView``;

const AddPlannerContainer = styled.View`
  padding: 14px 0 13px 0;
`;

const AddPlannerButton = styled.Pressable`
  justify-content: center;
  align-items: center;
`;

const AddPlannerText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 12px;
  line-height: 16px;
  color: #8b8b8b;
`;

const Modal = ({
  isClicked,
  setIsClicked,
  selectedPlanner,
  setSelectedPlanner,
}) => {
  const planners = useSelector(state => state.planners.planners);
  const dispatch = useDispatch();

  const getDefultPlannerTitle = () => {
    let index = 1;

    while (true) {
      let isExist = false;
      for (var i = 0; i < planners.length; i++) {
        if (planners[i].title === `기획서${index}`) isExist = true;
      }
      console.log(
        '🚀 ~ file: Modal.js ~ line 50 ~ getDefultPlannerTitle ~ isExist',
        isExist,
      );
      if (isExist) index++;
      else break;
    }

    console.log(
      '🚀 ~ file: Modal.js ~ line 54 ~ getDefultPlannerTitle ~ index',
      index,
    );

    return `기획서${index}`;
  };

  return (
    <ModalContainer>
      <PlannersContainer>
        {planners.map((planner, index) => {
          return (
            <Planner
              key={planner.title + index}
              planner={planner}
              selectedPlanner={selectedPlanner}
              setSelectedPlanner={setSelectedPlanner}
            />
          );
        })}
      </PlannersContainer>

      <AddPlannerContainer>
        <AddPlannerButton
          onPress={() => {
            dispatch(createPlanner(getDefultPlannerTitle()));
          }}>
          <AddPlannerText>+ 새로운 기획서 만들기</AddPlannerText>
        </AddPlannerButton>
      </AddPlannerContainer>
    </ModalContainer>
  );
};

export default Modal;
