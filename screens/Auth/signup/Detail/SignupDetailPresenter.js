import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const CommonTextInput = styled.TextInput`
  background-color: #f3f3f3;
  padding-top: 13px;
  padding-bottom: 11px;
  padding-left: 18px;
  height: 48px;
  margin-left: 23px;
  margin-right: 23px;
  border: ${props => (props.border ? '#ff5151' : '#f3f3f3')};
  border-radius: 5px;
  color: #000000;
`;

const EmailTextInput = styled(CommonTextInput)`
  margin-top: 5px;
`;

const PasswordTextInput = styled(CommonTextInput)`
  margin-top: 5px;
`;
const PasswordCheckTextInput = styled(CommonTextInput)`
  margin-top: 8px;
`;

const CommonText = styled.Text`
  height: 16px;
  font-family: 'NotoSansKR-normal';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-left: 23px;
`;

const EmailText = styled(CommonText)`
  margin-top: 116px;
  margin-right: 303px;
`;

const PasswordText = styled(CommonText)`
  margin-top: 15px;
  margin-right: 292px;
`;

const CommonHelpText = styled(CommonText)`
  height: 15px;
  font-size: 10px;
  line-height: 15px;
  margin-left: 23px;
  margin-right: 200px;
  color: #ff5151;
`;
const HelpText = styled(CommonHelpText)`
  margin-top: 2px;
`;

const SignupButton = styled.TouchableOpacity`
  height: 48px;
  margin-top: 242px;
  margin-left: 23px;
  margin-right: 23px;
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
  state,
  emailChangeHandler,
  passwordChangeHandler,
  passwordCheckChangeHandler,
}) => {
  const navigation = useNavigation();
  const signupTosPress = () => navigation.navigate('SignupTos'); //다음으로 이동

  return (
    <Container>
      <EmailText>이메일</EmailText>
      <EmailTextInput
        border={!state.emailValid && state.emailIsEdited}
        placeholder="이메일 주소"
        placeholderTextColor="#8B8B8B"
        value={state.email}
        onChangeText={emailChangeHandler}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        returnKeyType={'done'}
      />
      {!state.emailValid && state.emailIsEdited ? (
        <HelpText>유효하지 않은 이메일</HelpText>
      ) : (
        <HelpText> </HelpText>
      )}
      <PasswordText>비밀번호</PasswordText>
      <PasswordTextInput
        border={!state.passwordValid && state.passwordIsEdited}
        placeholder="비밀번호"
        placeholderTextColor="#8B8B8B"
        value={state.password}
        onChangeText={passwordChangeHandler}
        secureTextEntry={true}
        autoCapitalize={'none'}
        returnKeyType={'done'}
      />
      {!state.passwordValid && state.passwordIsEdited ? (
        <HelpText>특수문자, 숫자, 문자 포함 8~15자리</HelpText>
      ) : (
        <HelpText> </HelpText>
      )}
      <PasswordCheckTextInput
        border={!state.passwordCheckValid && state.passwordCheckIsEdited}
        placeholder="비밀번호 확인"
        placeholderTextColor="#8B8B8B"
        value={state.passwordCheck}
        onChangeText={passwordCheckChangeHandler}
        secureTextEntry={true}
        autoCapitalize={'none'}
        returnKeyType={'done'}
      />
      {!state.passwordCheckValid && state.passwordCheckIsEdited ? (
        <HelpText>비밀번호가 다릅니다.</HelpText>
      ) : (
        <HelpText> </HelpText>
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
