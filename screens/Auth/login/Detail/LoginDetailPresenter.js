import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const CommonText = styled.Text`
  font-family: 'NotoSansKR-normal';
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
  width: 50px;
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
  border-radius: 5;
  color: #000000;
`;

const EmailTextInput = styled(CommonTextInput)`
  margin-top: 137px;
`;

const PasswordTextInput = styled(CommonTextInput)`
  margin-top: 238px;
`;

const CommonHelpText = styled(CommonText)`
  width: 100px;
  height: 15px;
  font-size: 10px;
  line-height: 15px;
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

const LoginButton = styled.TouchableOpacity`
  width: 87%;
  height: 48px;
  margin-top: 332px;
  margin-left: 23px;
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

const FindId = styled.TouchableOpacity`
  width: 16.1%;
  height: 18px;
  margin-top: 19px;
  margin-left: 20%;
`;

const FindPassword = styled(FindId)`
  width: 25%;
  margin-top: -16px;
  margin-left: 61%;
`;

const FindText = styled.Text`
  font-family: 'NotoSansKR-normal';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #8b8b8b;
`;

export default ({state, emailChangeHandler, passwordChangeHandler}) => {
  const navigation = useNavigation();
  const tutorialPress = () => navigation.navigate('Tutorial'); //다음으로 이동

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
        <EmailHelpText>유효하지 않은 이메일</EmailHelpText>
      ) : (
        <EmailHelpText> </EmailHelpText>
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
        <PasswordHelpText>특수문자, 숫자, 문자 포함 8~15자리</PasswordHelpText>
      ) : (
        <PasswordHelpText> </PasswordHelpText>
      )}

      <LoginButton
        disabled={!state.emailValid || !state.passwordValid}
        //disabled={false} //임시
        onPress={tutorialPress}>
        <LoginText>로그인 하기</LoginText>
      </LoginButton>

      <FindId>
        <FindText>아이디 찾기</FindText>
      </FindId>

      <View
        style={{
          height: 16,
          width: 1.3,
          backgroundColor: '#B4B4B4',
          marginTop: -18,
          marginLeft: '50%',
        }}
      />
      <FindPassword>
        <FindText>비밀번호 찾기</FindText>
      </FindPassword>
    </Container>
  );
};
