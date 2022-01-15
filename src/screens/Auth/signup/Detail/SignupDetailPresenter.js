import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const TextInput = styled.TextInput`
  background-color: #f3f3f3;
  border: ${props => (props.border ? '#f3f3f3' : '#ff5151')};
  border-radius: 5px;
  color: #000000;
  font-family: 'NotoSansKR-normal';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  height: 48px;
  line-height: 24px;
  margin-left: 23px;
  margin-right: 23px;
  margin-top: ${props => props.marginTop || '5px'};
  padding: 12px 112px 12px 18px;
`;

const CommonText = styled.Text`
  font-family: 'NotoSansKR-normal';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-left: 23px;
`;

const EmailText = styled(CommonText)`
  margin-right: 303px;
  margin-top: 92px;
`;

const PasswordText = styled(CommonText)`
  margin-right: 292px;
  margin-top: 15px;
`;

const HelpText = styled(CommonText)`
  align-items: center;
  color: ${props => (props.color ? '#b4b4b4' : '#ff5151')};
  font-size: 10px;
  line-height: 15px;
  margin: 2px 200px 0px 23px;
`;

const SignupButton = styled.TouchableOpacity`
  background-color: ${props => (props.disabled ? '#f3f3f3' : '#e2f955')};
  border-radius: 5px;
  height: 48px;
  justify-content: center;
  margin: 242px 23px 94px 23px;
`;

const SignupText = styled.Text`
  align-items: center;
  font-family: 'NotoSansKR-Bold';
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  text-align: center;
`;

export default ({
  state,
  emailChangeHandler,
  passwordChangeHandler,
  passwordCheckChangeHandler,
  onPressHandler,
}) => {
  return (
    <Container>
      <EmailText>이메일</EmailText>
      <TextInput
        border={state.emailBlank === state.emailValid}
        placeholder="이메일 주소를 입력해주세요"
        placeholderTextColor="#8B8B8B"
        value={state.email}
        onChangeText={emailChangeHandler}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        returnKeyType={'done'}
      />
      {state.emailBlank === state.emailValid ? (
        <HelpText color={true}> </HelpText>
      ) : (
        <HelpText color={false}>유효하지 않은 이메일 </HelpText>
      )}
      <PasswordText>비밀번호</PasswordText>
      <TextInput
        border={state.passwordBlank === state.passwordValid}
        placeholder="비밀번호를 설정해주세요"
        placeholderTextColor="#8B8B8B"
        value={state.password}
        onChangeText={passwordChangeHandler}
        secureTextEntry={true}
        autoCapitalize={'none'}
        returnKeyType={'done'}
      />
      {state.passwordBlank === state.passwordValid ? (
        <HelpText color={true}>특수문자, 영문, 문자 포함 최소 8자리</HelpText>
      ) : (
        <HelpText color={false}>오류 원인 기재</HelpText>
      )}
      <TextInput
        marginTop="8px"
        border={state.passwordCheckBlank === state.passwordCheckValid}
        placeholder="비밀번호를 재입력해주세요"
        placeholderTextColor="#8B8B8B"
        value={state.passwordCheck}
        onChangeText={passwordCheckChangeHandler}
        secureTextEntry={true}
        autoCapitalize={'none'}
        returnKeyType={'done'}
      />
      {state.passwordCheckBlank === state.passwordCheckValid ? (
        <HelpText color={true}>도움말 텍스트</HelpText>
      ) : (
        <HelpText color={false}>오류 원인 기재</HelpText>
      )}
      <SignupButton
        // disabled={
        //   !(state.emailValid && state.passwordValid && state.passwordCheckValid)
        // }
        disabled={false} //임시
        onPress={onPressHandler}>
        <SignupText>회원가입</SignupText>
      </SignupButton>
    </Container>
  );
};
