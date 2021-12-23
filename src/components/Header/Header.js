import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';

const HeaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
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

const HeaderText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: 'NotoSansKR-Bold';
`;

export const HeaderRight = () => {
  return (
    // navigate to Program
    <HeaderProgram>
      <Image source={require('../../../assets/projectfile_w.png')} />
      <HeaderProgramText>기획서</HeaderProgramText>
    </HeaderProgram>
  );
};

export const HeaderTitle = ({title}) => {
  return (
    <HeaderContainer>
      {title == 'Home' ? (
        <Image source={require('../../../assets/mount.png')} />
      ) : (
        <HeaderText>{title}</HeaderText>
      )}
    </HeaderContainer>
  );
};
