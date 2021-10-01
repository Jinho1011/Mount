import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const StyledTitle = styled.Text`
  margin-left: 26px;
  margin-top: 17px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: #E2F955;
  border-radius: 7px;
  margin-left: 20px;
  margin-right: 20px;
  height: 52px;
`;

const StyledRectangle = styled.View`
  /* 총인원수_단독 */
  border: 1px solid #EAEAEA;
  border-radius: 7px;

  position: absolute;
  width: 100%;
  height: 63px;
  margin-left: 20px;
  margin-right: 20px;
  top: 365px;
`;

const Borderline = styled.View`
  position: absolute;
  width: 100%;
  height: 4px;
  left: 0px;
  top: 449px;
`;

export default () => {
  

  const navigation = useNavigation();
  return (
    <Container>
      <View
        style={{backgroundColor: "#CDCDCD", height: 253}}
      />
      <StyledTitle>제목몇글자들어가나요여기</StyledTitle>
      <StyledRectangle /> 
      <Borderline />
    </Container>   
  );
};
