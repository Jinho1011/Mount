import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const TextInput = styled.TextInput`
  background-color: #f3f3f3;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  height: 48px;
  margin-left: 23px;
  margin-right: 23px;
  margin-top: ${props => props.marginTop || '5px'}
  border: ${props => (props.border ? '#f3f3f3' : '#ff5151')};
  border-radius: 5px;
  color: #000000;
  font-family: 'NotoSansKR-normal';
  font-size: 16px;
  line-height: 24px;
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

const HelpText = styled(CommonText)`
  height: 15px;
  font-size: 10px;
  line-height: 15px;
  margin-top: 2px;
  margin-left: 23px;
  margin-right: 200px;
  color: ${props => (props.color ? '#b4b4b4' : '#ff5151')};
`;

const LoginButton = styled.TouchableOpacity`
  height: 48px;
  margin-top: 315px;
  margin-left: 23px;
  margin-right: 23px;
  border-radius: 5px;
  background-color: ${props => (props.disabled ? '#f3f3f3' : '#e2f955')};
  padding-top: 12px;
  padding-bottom: 12px;
`;

const LoginText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const FindPassword = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 18px;
  margin-top: 16px;
  margin-left: 151px;
  margin-right: 151px;
`;

const FindText = styled.Text`
  font-family: 'NotoSansKR-normal';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #8b8b8b;
`;

export default ({
  state,
  emailChangeHandler,
  passwordChangeHandler,
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
      <LoginButton
        // disabled={
        //   !(state.emailValid && state.passwordValid && state.passwordCheckValid)
        // }
        disabled={false} //임시
        onPress={onPressHandler}>
        <LoginText>로그인 하기</LoginText>
      </LoginButton>
      <FindPassword>
        <FindText>비밀번호 찾기</FindText>
      </FindPassword>
    </Container>
  );
};
