import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const PlannerContainer = styled.View`
  margin-top: 7px;
  padding: 0 23px;
  background: #ffffff;
`;

const PlannerButton = styled.Pressable`
  padding: 12px 20px;
  background: ${props =>
    props.isSelected ? 'rgba(226, 249, 85, 0.2)' : '#ffffff'};
  border: ${props =>
    props.isSelected ? '1px solid #E2F955;' : '1px solid #f3f3f3;'};
  border-radius: 12px;
`;

const PlanerTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  color: ${props => (props.isSelected ? '#000000' : '#555555')};
  font-size: 16px;
  line-height: 24px;
`;

const PlannerTitle = ({planner, selectedPlanner, setSelectedPlanner}) => {
  const [isSelected, setIsSelected] = useState(
    planner?.title == selectedPlanner,
  );

  useEffect(() => {
    console.log(selectedPlanner);
    setIsSelected(planner.title == selectedPlanner);
  }, [selectedPlanner]);
  return (
    <PlannerContainer>
      <PlannerButton
        isSelected={isSelected}
        onPress={() => {
          setSelectedPlanner(planner?.title);
        }}>
        <PlanerTitle isSelected={isSelected}>{planner?.title}</PlanerTitle>
      </PlannerButton>
    </PlannerContainer>
  );
};

export default PlannerTitle;
