import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props => props.bgColor};
  border-radius: 5px;
  height: 48px;
  justify-content: center;
  margin-left: 23px;
  margin-right: 23px;
  margin-top: ${props => props.marginTop || '8px'};
`;

const ButtonText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

export default ({signupDetailPress, signupWithKakao, signupWithGoogle}) => {
  return (
    <Container>
      <TouchableOpacity
        marginTop="426px"
        bgColor="#FFE600"
        onPress={signupWithKakao}>
        <ButtonText>카카오로 등록</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity bgColor="#20E41C">
        <ButtonText>네이버로 등록</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity bgColor="#FF5E5E" onPress={signupWithGoogle}>
        <ButtonText>구글로 등록</ButtonText>
      </TouchableOpacity>
      <TouchableOpacity onPress={signupDetailPress} bgColor="#F3F3F3">
        <ButtonText>기타 이메일로 등록</ButtonText>
      </TouchableOpacity>
    </Container>
  );
};
