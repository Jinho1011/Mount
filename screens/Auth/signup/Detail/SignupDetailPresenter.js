import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const CommonText = styled.Text`
  font-family: 'NotoSansKR';
  font-style: normal;
  font-weight: 400;
  margin-left: 23;
`;

const CommonTextInput = styled.TextInput`
  position: absolute;
  background-color: #f3f3f3;
  padding-top: 13;
  padding-bottom: 11;
  padding-left: 18;
  width: 87%;
  height: 48;
  margin-left: 23;
  border-radius: 5;
`;

const EmailText = styled(CommonText)`
  width: 40;
  height: 16;
  margin-top: 116;
  font-size: 12;
  line-height: 16;
`;
const EmailTextInput = styled(CommonTextInput)`
  margin-top: 137;
`;

const PasswordText = styled(CommonText)`
  width: 50;
  height: 16;
  margin-top: 85;
  font-size: 12;
  line-height: 16;
`;

const PasswordTextInput = styled(CommonTextInput)`
  margin-top: 238;
`;

const HelpText = styled(CommonText)`
  width: 100;
  height: 15;
  margin-top: 55;
  font-size: 10;
  line-height: 15;
  color: #b4b4b4;
`;
const PasswordCheckTextInput = styled(CommonTextInput)`
  margin-top: 311;
`;

const HelpText2 = styled(HelpText)`
  margin-top: 58;
`;

const SignupButton = styled.TouchableOpacity`
  width: 87%;
  height: 48;
  margin-top: 242;
  margin-left: 23;
  border-radius: 5;
  background-color: #f3f3f3;
  padding-top: 12;
  padding-bottom: 12;
`;

const SignupText = styled(CommonText)`
  font-family: 'NotoSansKR-Bold';
  font-weight: 500;
  font-size: 16;
  line-height: 24;
  text-align: center;
`;
export default () => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [passwordCheck, onChangePasswordCheck] = React.useState('');
  return (
    <Container>
      <EmailText>이메일</EmailText>
      <EmailTextInput
        placeholder="이메일 주소"
        placeholderTextColor="#8B8B8B"
      />
      <PasswordText>비밀번호</PasswordText>
      <PasswordTextInput
        placeholder="비밀번호"
        placeholderTextColor="#8B8B8B"
      />
      <HelpText>도움말 텍스트</HelpText>
      <PasswordCheckTextInput
        placeholder="비밀번호 확인"
        placeholderTextColor="#8B8B8B"
      />
      <HelpText2>도움말 텍스트</HelpText2>
      <SignupButton>
        <SignupText>회원가입</SignupText>
      </SignupButton>
    </Container>
  );
};
