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
    Number.isInteger(props.selected.id) && props.isClicked
      ? '#e2f955'
      : '#F3F3F3'};
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

const ProposalButton = ({state, isClicked, setIsClicked, selected}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const planners = useSelector(state => state.planners.planners);

  return (
    <BottomConatiner>
      <PlannerButton
        selected={selected}
        isClicked={isClicked}
        onPress={() => {
          console.log(selected);
          console.log(Number.isInteger(selected.id));
          if (selected.hasOwnProperty('id')) {
            const category =
              state.hasOwnProperty('foodSet') ||
              state.hasOwnProperty('foodSingle')
                ? 'food'
                : 'rec';

            dispatch(addItems(selected.id, state.items, category));
            navigation.navigate('Planner', {id: selected.id});
          } else {
            setIsClicked(!isClicked);
          }
        }}>
        <PlannerText>기획서</PlannerText>
      </PlannerButton>
    </BottomConatiner>
  );
};

export default ProposalButton;
