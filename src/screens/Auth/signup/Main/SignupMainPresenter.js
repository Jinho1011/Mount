import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 48px;
  margin-left: 23px;
  margin-right: 23px;
  margin-top: ${props => props.marginTop || '8px'}
  border-radius: 5px;
  background-color: ${props => props.bgColor}
`;

const ButtonText = styled.Text`
  text-align: center;
  font-family: 'NotoSansKR-Bold';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export default () => {
  const navigation = useNavigation();
  const signupDetailPress = () => navigation.navigate('SignupDetail');

  return (
    <Container>
      <TouchableOpacity marginTop="450px" bgColor="#FFE600">
        <ButtonText>카카오로 등록</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity bgColor="#20E41C">
        <ButtonText>네이버로 등록</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity bgColor="#FF5E5E">
        <ButtonText>구글로 등록</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity onPress={signupDetailPress} bgColor="#F3F3F3">
        <ButtonText>기타 이메일로 등록</ButtonText>
      </TouchableOpacity>
    </Container>
  );
};
