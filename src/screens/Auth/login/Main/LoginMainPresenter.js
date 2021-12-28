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
  background-color: #F3F3F3;
`;

const ButtonText = styled.Text`
  text-align: center;
  font-family: 'NotoSansKR-normal';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export default () => {
  const navigation = useNavigation();
  const loginDetailPress = () => navigation.navigate('LoginDetail');

  return (
    <Container>
      <TouchableOpacity marginTop="450px">
        <ButtonText>카카오톡 로그인</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity>
        <ButtonText>네이버 로그인</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity>
        <ButtonText>구글 로그인</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity onPress={loginDetailPress}>
        <ButtonText>기타 이메일 로그인</ButtonText>
      </TouchableOpacity>
    </Container>
  );
};
