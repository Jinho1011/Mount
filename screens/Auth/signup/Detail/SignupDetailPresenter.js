import React from 'react';
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
  margin-left: 23px;
`;
const EmailText = styled(CommonText)`
  width: 40px;
  height: 16px;
  margin-top: 116px;
  font-size: 12px;
  line-height: 16px;
`;

const PasswordText = styled(CommonText)`
  width: 50;
  height: 16px;
  margin-top: 15px;
  font-size: 12px;
  line-height: 16px;
`;

const CommonTextInput = styled.TextInput`
  position: absolute;
  background-color: #f3f3f3;
  padding-top: 13px;
  padding-bottom: 11px;
  padding-left: 18px;
  width: 87%;
  height: 48px;
  margin-left: 23px;
  border: ${props => (props.border ? '#ff5151' : '#f3f3f3')};
  border-radius: 5px;
  color: #000000;
`;

const EmailTextInput = styled(CommonTextInput)`
  margin-top: 137px;
`;

const PasswordTextInput = styled(CommonTextInput)`
  margin-top: 238px;
`;
const PasswordCheckTextInput = styled(CommonTextInput)`
  margin-top: 311px;
`;

const CommonHelpText = styled(CommonText)`
  width: 100px;
  height: 15px;
  font-size: 10px;
  line-height: 15px;
  color: #ff5151;
`;
const EmailHelpText = styled(CommonHelpText)`
  width: 150px;
  margin-top: 55px;
`;
const PasswordHelpText = styled(CommonHelpText)`
  width: 200px;
  margin-top: 55px;
`;
const PasswordCheckHelpText = styled(CommonHelpText)`
  margin-top: 58px;
`;

const SignupButton = styled.TouchableOpacity`
  width: 87%;
  height: 48px;
  margin-top: 242px;
  margin-left: 23px;
  border-radius: 5px;
  background-color: ${props => (props.disabled ? '#f3f3f3' : '#e2f955')};
  padding-top: 12px;
  padding-bottom: 12px;
`;

const SignupText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export default ({
  email,
  emailValid,
  emailIsEdited,
  emailChangeHandler,
  password,
  passwordValid,
  passwordIsEdited,
  passwordChangeHandler,
  passwordCheck,
  passwordCheckValid,
  passwordCheckIsEdited,
  passwordCheckChangeHandler,
}) => {
  const navigation = useNavigation();
  const signupTosPress = () => navigation.navigate('SignupTos'); //다음으로 이동

  return (
    <Container>
      <EmailText>이메일</EmailText>
      <EmailTextInput
        border={!emailValid && emailIsEdited}
        placeholder="이메일 주소"
        placeholderTextColor="#8B8B8B"
        value={email}
        onChangeText={emailChangeHandler}
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
        onChangeText={passwordChangeHandler}
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
        onChangeText={passwordCheckChangeHandler}
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
        //disabled={!(emailValid && passwordValid && passwordCheckValid)}
        disabled={false} //임시
        onPress={signupTosPress}>
        <SignupText>회원가입</SignupText>
      </SignupButton>
    </Container>
  );
};
