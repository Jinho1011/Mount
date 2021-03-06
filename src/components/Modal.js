import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import {createPlanner} from '../store/actions/planners';
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

const Modal = ({selected, setSelected}) => {
  const planners = useSelector(state => state.planners.planners);
  const dispatch = useDispatch();

  const getDefultPlannerTitle = () => {
    let index = 1;

    while (true) {
      let isExist = false;
      for (var i = 0; i < planners.length; i++) {
        if (planners[i].title === `기획서${index}`) isExist = true;
      }
      if (isExist) index++;
      else break;
    }

    return `기획서${index}`;
  };

  return (
    <ModalContainer>
      <PlannersContainer>
        {planners.map((planner, index) => {
          return (
            <Planner
              key={planner.id}
              planner={planner}
              selected={selected}
              setSelected={setSelected}
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
