import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addItems} from '../../store/actions/planners';

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
  background: ${props => {
    if (
      (!props.isClicked && !Number.isInteger(props.selected?.id)) ||
      (props.isClicked && Number.isInteger(props.selected?.id))
    ) {
      return '#e2f955';
    } else {
      return '#F3F3F3';
    }
  }};
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

  return (
    <BottomConatiner>
      <PlannerButton
        selected={selected}
        isClicked={isClicked}
        onPress={() => {
          if (selected.hasOwnProperty('id')) {
            const category =
              state.hasOwnProperty('foodSet') ||
              state.hasOwnProperty('foodSingle')
                ? 'food'
                : 'rec';

            dispatch(
              addItems(selected.id, state.items, state.memberCnt, category),
            );
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
