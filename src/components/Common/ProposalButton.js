import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

/* bottom button container */
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
  isClicked,
  setIsClicked,
  selectedPlanner,
  setSelectedPlanner,
}) => {
  return (
    <BottomConatiner>
      <PlannerButton
        selectedPlanner={selectedPlanner}
        isClicked={isClicked}
        onPress={() => setIsClicked(!isClicked)}>
        <PlannerText>기획서</PlannerText>
      </PlannerButton>
    </BottomConatiner>
  );
};

export default ProposalButton;
