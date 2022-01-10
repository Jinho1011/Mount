import React, {useEffect} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const FloaterContainer = styled.View`
  position: absolute;
  bottom: 5;
  right: 23;
  justify-content: center;
  align-items: center;
`;

const TopButtonContainer = styled.View``;

const PlannerButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 100px;
  background-color: #000;
  elevation: 4;
`;

const Floaters = () => {
  const navigation = useNavigation();

  return (
    <FloaterContainer>
      <TopButtonContainer>
        <Text>👆</Text>
      </TopButtonContainer>
      <PlannerButtonContainer>
        <Text style={{color: 'yellow', fontSize: 36}}>+</Text>
      </PlannerButtonContainer>
    </FloaterContainer>
  );
};

export default Floaters;
