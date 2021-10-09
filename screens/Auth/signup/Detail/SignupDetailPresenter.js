import React, {useState, useRef} from 'react';
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
const EmailText = styled(CommonText)`
  width: 40;
  height: 16;
  margin-top: 116;
  font-size: 12;
  line-height: 16;
`;

const PasswordText = styled(CommonText)`
  width: 50;
  height: 16;
  margin-top: 15;
  font-size: 12;
  line-height: 16;
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
  border: ${props => (props.border ? '#ff5151' : '#f3f3f3')};
  border-radius: 5;
  color: #000000;
`;

const EmailTextInput = styled(CommonTextInput)`
  margin-top: 137;
`;

const PasswordTextInput = styled(CommonTextInput)`
  margin-top: 238;
`;
const PasswordCheckTextInput = styled(CommonTextInput)`
  margin-top: 311;
`;

const CommonHelpText = styled(CommonText)`
  width: 100;
  height: 15;
  font-size: 10;
  line-height: 15;
  color: #ff5151;
`;
const EmailHelpText = styled(CommonHelpText)`
  width: 150;
  margin-top: 55;
`;
const PasswordHelpText = styled(CommonHelpText)`
  width: 200;
  margin-top: 55;
`;
const PasswordCheckHelpText = styled(CommonHelpText)`
  margin-top: 58;
`;

const SignupButton = styled.TouchableOpacity`
  width: 87%;
  height: 48;
  margin-top: 242;
  margin-left: 23;
  border-radius: 5;
  background-color: ${props => (props.disabled ? '#f3f3f3' : '#e2f955')};
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

export default props => {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('SignupTos'); //다음으로 이동

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false); //유효 이메일 확인

  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false); //유효 비밀번호 확인

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckValid, setPasswordCheckValid] = useState(false); //비밀번호와 일치 여부

  const EmailChangeHandler = text => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    setEmailValid(emailRegex.test(text));
    setEmail(text);
  }; //이메일 검사

  const PasswordChangeHandler = text => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    setPasswordValid(passwordRegex.test(text));
    setPassword(text);
  }; //비밀번호 검사

  const PasswordCheckChangeHandler = text => {
    setPasswordCheckValid(password === text);
    setPasswordCheck(text);
  }; //비밀번호 확인 검사

  // const ref_input = Array < React.RefObject < TextInput >> [];
  // ref_input[0] = useRef(null);
  // ref_input[1] = useRef(null);
  // ref_input[2] = useRef(null);

  // const onFocusNext = index => {
  //   if (ref_input[index + 1] && index < ref_input.length - 1) {
  //     ref_input[index + 1].current?.focus();
  //   }
  //   if (ref_input[index + 1] && index === ref_input.length - 1) {
  //     ref_input[index].current?.blur();
  //   }
  // };

  return (
    <Container>
      <EmailText>이메일</EmailText>
      <EmailTextInput
        border={!emailValid}
        placeholder="이메일 주소"
        placeholderTextColor="#8B8B8B"
        value={email}
        onChangeText={text => EmailChangeHandler(text)}
      />
      {!emailValid ? (
        <EmailHelpText>유효하지 않은 이메일</EmailHelpText>
      ) : (
        <EmailHelpText> </EmailHelpText>
      )}
      <PasswordText>비밀번호</PasswordText>
      <PasswordTextInput
        border={!passwordValid}
        placeholder="비밀번호"
        placeholderTextColor="#8B8B8B"
        value={password}
        onChangeText={text => PasswordChangeHandler(text)}
        secureTextEntry={true}
      />
      {!passwordValid ? (
        <PasswordHelpText>특수문자, 숫자, 문자 포함 8~15자리</PasswordHelpText>
      ) : (
        <PasswordHelpText> </PasswordHelpText>
      )}
      <PasswordCheckTextInput
        border={!passwordCheckValid}
        placeholder="비밀번호 확인"
        placeholderTextColor="#8B8B8B"
        value={passwordCheck}
        onChangeText={text => PasswordCheckChangeHandler(text)}
        secureTextEntry={true}
      />
      {!passwordCheckValid ? (
        <PasswordCheckHelpText>비밀번호가 다릅니다.</PasswordCheckHelpText>
      ) : (
        <PasswordCheckHelpText> </PasswordCheckHelpText>
      )}
      <SignupButton
        disabled={!emailValid || !passwordCheckValid}
        onPress={onPress}>
        <SignupText>회원가입</SignupText>
      </SignupButton>
    </Container>
  );
};
