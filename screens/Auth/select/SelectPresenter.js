import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
const SignupButton = styled.TouchableOpacity`
  width: 87%;
  height: 48px;
  margin-top: 618px;
  margin-left: 23px;
  border-radius: 5px;
  background-color: #e2f955;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const LoginButton = styled.TouchableOpacity`
  height: 24px;
  margin-top: 14px;
  margin-left: 119px;
  margin-right: 111px;
`;

const SignupText = styled.Text`
  font-family: 'NotoSansKR-normal';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const LoginText = styled(SignupText)`
  color: #8b8b8b;
`;

export default () => {
  const navigation = useNavigation();
  const signupMainPress = () => navigation.navigate('SignupMain');
  const LoginMainPress = () => navigation.navigate('LoginMain');
  return (
    <Container>
      <SignupButton onPress={signupMainPress}>
        <SignupText>회원가입</SignupText>
      </SignupButton>
      <LoginButton onPress={LoginMainPress}>
        <LoginText>이미 회원이신가요?</LoginText>
      </LoginButton>
    </Container>
  );
};
