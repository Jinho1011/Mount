import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 5px;
  height: 48px;
  justify-content: center;
  margin-left: 23px;
  margin-right: 23px;
  margin-top: ${props => props.marginTop || '8px'};
`;

const ButtonText = styled.Text`
  font-family: 'NotoSansKR-Normal';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

export default () => {
  const navigation = useNavigation();
  const loginDetailPress = () => navigation.navigate('LoginDetail');

  return (
    <Container>
      <TouchableOpacity marginTop="426px">
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
