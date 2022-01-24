import React, {useEffect} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {
  Top_floating_btnSvg,
  Selfproject_floating_btnSvg,
} from '../../components/assets';

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
  margin-bottom: 11px;
`;

const PlannerButtonContainer = styled.Pressable``;

const Floaters = ({onPressTouch, target}) => {
  const navigation = useNavigation();

  return (
    <FloaterContainer>
      <TopButtonContainer onPress={onPressTouch}>
        <Top_floating_btnSvg width={33} height={29} />
      </TopButtonContainer>
      <PlannerButtonContainer
        onPress={() =>
          navigation.navigate('Details', {
            screen: 'DetailTabs',
            params: {initialRoute: target},
          })
        }>
        <Selfproject_floating_btnSvg width={52} height={52} />
      </PlannerButtonContainer>
    </FloaterContainer>
  );
};

export default Floaters;
