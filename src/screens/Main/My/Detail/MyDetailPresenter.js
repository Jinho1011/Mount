import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {AsyncStorage} from 'react-native';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MyContainer = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const SettingText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-top: ${props => props.marginTop || '30px'};
  margin-left: 20px;
  margin-right: 306px;
`;

const MyProfileTextBox = styled.Text`
  background-color: #f3f3f3;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  color: #8b8b8b;
  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  height: 32px;
  line-height: 20px;
  margin: 7px 55px 0px 20px;
  padding: 6px 103px 6px 18px;
`;

const PasswordText = styled.Text`
  color: #8b8b8b;
  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 7px 130px 0px 20px;
`;

const SettingText2 = styled(SettingText)`
  font-family: 'NotoSansKR-Bold';
`;

const NameTextInput = styled.TextInput`
  background-color: #f3f3f3;
  border: #f3f3f3;
  border-radius: 5px;
  color: #000000;
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  height: 48px;
  line-height: 24px;
  margin: 8px 23px 0px 23px;
  padding-left: 18px;
  padding-bottom: 0px;
`;

const OutContainer = styled.View`
  flex-direction: row;
  height: 16px;
  margin-top: 188px;
  justify-content: flex-end;
`;
const LogOutButton = styled.TouchableOpacity`
  height: 16px;
  margin-right: 7px;
`;

const OutText = styled.Text`
  color: #b4b4b4;
  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;

const WithdrawalButton = styled.TouchableOpacity`
  height: 16px;
  margin-right: 26px;
`;

const SaveButton = styled.TouchableOpacity`
  background-color: #e2f955;
  border-radius: 5px;
  height: 48px;
  justify-content: center;
  margin: 57px 23px 0px 23px;
`;

const SaveText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export default ({state, logOutPress, myMainPress}) => {
  return (
    <MyContainer>
      <SettingText>이메일</SettingText>
      <MyProfileTextBox>{state.email}</MyProfileTextBox>
      <SettingText marginTop="17px">비밀번호</SettingText>
      {state.password ? (
        <MyProfileTextBox>{state.password}</MyProfileTextBox>
      ) : (
        <PasswordText>SNS계정에서 변경하실 수 있습니다.</PasswordText>
      )}
      <View
        style={{
          borderBottomColor: '#F3F3F3',
          borderBottomWidth: 4,
          marginTop: 24,
        }}
      />
      <SettingText2 marginTop="33px">닉네임</SettingText2>
      <NameTextInput placeholder={state.name} placeholderTextColor="#000000" />
      <OutContainer>
        <LogOutButton onPress={logOutPress}>
          <OutText>로그아웃</OutText>
        </LogOutButton>
        <View
          style={{
            borderLeftWidth: 1,
            borderLeftColor: '#B4B4B4',
            marginRight: 6,
          }}
        />
        <WithdrawalButton>
          <OutText>회원탈퇴</OutText>
        </WithdrawalButton>
      </OutContainer>
      <SaveButton onPress={myMainPress}>
        <SaveText>저장하기</SaveText>
      </SaveButton>
    </MyContainer>
  );
};
