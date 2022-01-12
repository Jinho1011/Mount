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

const TopButtonContainer = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 29px;
  border-radius: 5px;
  background-color: #f3f3f3;
  elevation: 4;
  margin-bottom: 11px;
`;

const PlannerButtonContainer = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 100px;
  background-color: #000;
  elevation: 4;
`;

const Floaters = ({onPressTouch, navigate}) => {
  const navigation = useNavigation();

  return (
    <FloaterContainer>
      <TopButtonContainer onPress={onPressTouch}>
        <Text style={{color: '#555555', fontSize: 20}}>🔝</Text>
      </TopButtonContainer>
      <PlannerButtonContainer
        onPress={() => navigation.navigate('Details', {screen: navigate})}>
        <Text style={{color: 'yellow', fontSize: 36}}>+</Text>
      </PlannerButtonContainer>
    </FloaterContainer>
  );
};

export default Floaters;
