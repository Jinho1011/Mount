import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {addItems, getIdByTitle} from '../../store/actions/planners';

const BottomConatiner = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background: #ffffff;
  border: 0.3px solid #b4b4b4;
  padding: 8px 23px;
`;

const PlannerButton = styled.TouchableOpacity`
  flex: 1;
  padding: 12px 135px;
  background: ${props =>
    props.selectedPlanner == '' && props.isClicked ? '#F3F3F3' : '#e2f955'};
  align-content: center;
  justify-content: center;
  border-radius: 5px;
`;

const PlannerText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

const ProposalButton = ({
  state,
  isClicked,
  setIsClicked,
  selectedPlanner,
  setSelectedPlanner,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const planners = useSelector(state => state.planners.planners);

  return (
    <BottomConatiner>
      <PlannerButton
        selectedPlanner={selectedPlanner}
        isClicked={isClicked}
        onPress={() => {
          if (selectedPlanner == '') {
            setIsClicked(!isClicked);
          } else {
            const category =
              state.hasOwnProperty('foodSet') ||
              state.hasOwnProperty('foodSingle')
                ? 'food'
                : 'rec';
            const planner = planners.find(
              planner => planner.title === selectedPlanner,
            );

            dispatch(addItems(planner.id, state.items, category));
            navigation.navigate('Planner', {id: planner.id});
          }
        }}>
        <PlannerText>기획서</PlannerText>
      </PlannerButton>
    </BottomConatiner>
  );
};

export default ProposalButton;
