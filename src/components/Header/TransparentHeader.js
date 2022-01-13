import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const HeaderContainer = styled(LinearGradient)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 58px;
  padding-left: 15px;
  padding-right: 29px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderProgram = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  margin-right: 10px;
`;

const HeaderProgramText = styled.Text`
  color: #ffffff;
  font-size: 10px;
`;

const HeaderBackButton = styled.Image`
  width: 24px;
  height: 24px;
`;

const HeaderProgramImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const HeaderLeft = () => {
  return <HeaderBackButton source={require('../../../assets/back_w.png')} />;
};

export const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <HeaderProgram
      onPress={() => {
        navigation.navigate('Planner');
      }}>
      <HeaderProgramImage
        source={require('../../../assets/projectfile_w.png')}
      />
      <HeaderProgramText>기획서</HeaderProgramText>
    </HeaderProgram>
  );
};

export const TransparentHeader = props => {
  return (
    <HeaderContainer
      colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.0)']}>
      <HeaderLeft />
      <HeaderRight />
    </HeaderContainer>
  );
};
