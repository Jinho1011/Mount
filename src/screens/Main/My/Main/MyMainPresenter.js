import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {View, StyleSheet} from 'react-native';

import {USER_KEY, getData} from '../../../../api/storage';
import {MoreSvg} from '../../../../components/assets';
import {useNavigation} from '@react-navigation/native';

const MyContainer = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const ProfileContainer = styled.View`
  align-items: center;
`;

const MyImage = styled.Image`
  width: 58px;
  height: 58px;
  margin-top: 26px;
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
  margin-top: 15px;
  padding: 6px 103px 6px 18px;
`;

const ModifyProfileButton = styled.TouchableOpacity`
  background-color: #e2f955;
  border-radius: 5px;
  height: 44px;
  justify-content: center;
  margin-top: 13px;
  width: 144px;
`;

const ButtonText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

const MySettingContainer = styled.View`
  align-items: center;
  flex-direction: row;
  height: 60px;
`;

const MySettingText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin-left: 40px;
`;

const MySettingButton = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  margin-left: ${props => props.marginLeft || '216px'};
`;

const Lines = StyleSheet.create({
  boldLine: {
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: 4,
    marginTop: 17,
  },
  lightLine: {
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: 1,
  },
});

const VersionContainer = styled.View`
  flex-direction: row;
  height: 16px;
  margin-top: 18px;
  justify-content: flex-end;
`;

const VersionText = styled.Text`
  color: #b4b4b4;
  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  margin-right: ${props => props.marginRight || '18px'};
`;

export default () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const myDetailPress = () => navigation.navigate('MyDetail');
  useEffect(() => {
    const init = async () => {
      const value = await getData(USER_KEY);
      setEmail(value.email);
    };
    init();
  }, []);

  return (
    <MyContainer>
      <ProfileContainer>
        <MyImage source={require('../../../../../assets/profile.png')} />
        <MyProfileTextBox>{email}</MyProfileTextBox>
        <ModifyProfileButton onPress={myDetailPress}>
          <ButtonText>프로필 수정</ButtonText>
        </ModifyProfileButton>
      </ProfileContainer>
      <View style={Lines.boldLine} />
      <MySettingContainer>
        <MySettingText>공지사항</MySettingText>
        <MySettingButton>
          <MoreSvg width={24} height={24} />
        </MySettingButton>
      </MySettingContainer>
      <View style={Lines.lightLine} />
      <MySettingContainer>
        <MySettingText>이벤트</MySettingText>
        <MySettingButton marginLeft="230px">
          <MoreSvg width={24} height={24} />
        </MySettingButton>
      </MySettingContainer>
      <View style={Lines.lightLine} />
      <MySettingContainer>
        <MySettingText>고객센터</MySettingText>
        <MySettingButton>
          <MoreSvg width={24} height={24} />
        </MySettingButton>
      </MySettingContainer>
      <View style={Lines.lightLine} />
      <MySettingContainer>
        <MySettingText>약관정책</MySettingText>
        <MySettingButton>
          <MoreSvg width={24} height={24} />
        </MySettingButton>
      </MySettingContainer>
      <View style={Lines.lightLine} />
      <MySettingContainer>
        <MySettingText>환경설정</MySettingText>
        <MySettingButton>
          <MoreSvg width={24} height={24} />
        </MySettingButton>
      </MySettingContainer>
      <View style={Lines.lightLine} />
      <VersionContainer>
        <VersionText>버전정보</VersionText>
        <VersionText marginRight="33px">2.0.2</VersionText>
      </VersionContainer>
    </MyContainer>
  );
};
