import React, {useState} from 'react';
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

const SignupText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-weight: 500;
  font-size: 16;
  line-height: 24;
  text-align: center;
`;

//유효 검사
let emailValid = false;
let passwordValid = false;
let passwordCheckValid = false;

//수정 전 border 표시
let emailIsEdited = false;
let passwordIsEdited = false;
let passwordCheckIsEdited = false;

export default props => {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('SignupTos'); //다음으로 이동

  const [email, setEmail] = useState(email);
  const [password, setPassword] = useState(password);
  const [passwordCheck, setPasswordCheck] = useState(passwordCheck);

  const EmailChangeHandler = text => {
    setEmail(text);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailRegex.test(text) ? (emailValid = true) : (emailValid = false);
    emailIsEdited = true;
  }; //이메일 검사

  const PasswordChangeHandler = text => {
    setPassword(text);
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    passwordRegex.test(text) ? (passwordValid = true) : (passwordValid = false);
    passwordIsEdited = true;
    passwordCheck && text === passwordCheck
      ? (passwordCheckValid = true)
      : (passwordCheckValid = false);
  }; //비밀번호 검사

  const PasswordCheckChangeHandler = text => {
    password && password === text
      ? (passwordCheckValid = true)
      : (passwordCheckValid = false);
    setPasswordCheck(text);
    passwordCheckIsEdited = true;
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
        border={!emailValid && emailIsEdited}
        placeholder="이메일 주소"
        placeholderTextColor="#8B8B8B"
        value={email}
        onChangeText={text => EmailChangeHandler(text)}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        returnKeyType={'done'}
      />
      {!emailValid && emailIsEdited ? (
        <EmailHelpText>유효하지 않은 이메일</EmailHelpText>
      ) : (
        <EmailHelpText> </EmailHelpText>
      )}
      <PasswordText>비밀번호</PasswordText>
      <PasswordTextInput
        border={!passwordValid && passwordIsEdited}
        placeholder="비밀번호"
        placeholderTextColor="#8B8B8B"
        value={password}
        onChangeText={text => PasswordChangeHandler(text)}
        secureTextEntry={true}
        autoCapitalize={'none'}
        returnKeyType={'done'}
      />
      {!passwordValid && passwordIsEdited ? (
        <PasswordHelpText>특수문자, 숫자, 문자 포함 8~15자리</PasswordHelpText>
      ) : (
        <PasswordHelpText> </PasswordHelpText>
      )}
      <PasswordCheckTextInput
        border={!passwordCheckValid && passwordCheckIsEdited}
        placeholder="비밀번호 확인"
        placeholderTextColor="#8B8B8B"
        value={passwordCheck}
        onChangeText={text => PasswordCheckChangeHandler(text)}
        secureTextEntry={true}
        autoCapitalize={'none'}
        returnKeyType={'done'}
      />
      {!passwordCheckValid && passwordCheckIsEdited ? (
        <PasswordCheckHelpText>비밀번호가 다릅니다.</PasswordCheckHelpText>
      ) : (
        <PasswordCheckHelpText> </PasswordCheckHelpText>
      )}
      <SignupButton
        disabled={!(emailValid && passwordValid && passwordCheckValid)}
        //disabled={false} //임시
        onPress={onPress}>
        <SignupText>회원가입</SignupText>
      </SignupButton>
    </Container>
  );
};
