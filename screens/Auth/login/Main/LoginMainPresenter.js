import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const CommonTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 87%;
  height: 48px;
  margin-left: 23px;
  border-radius: 5px;
  background-color: #f3f3f3;
`;

const Kakaotalk = styled(CommonTouchableOpacity)`
  margin-top: 450px;
`;

const Naver = styled(CommonTouchableOpacity)`
  margin-top: 506px;
`;

const Google = styled(CommonTouchableOpacity)`
  margin-top: 562px;
`;

const EtcEmail = styled(CommonTouchableOpacity)`
  margin-top: 618px;
`;

const ButtonText = styled.Text`
  text-align: center;
  font-family: 'NotoSansKR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export default () => {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('LoginDetail');

  return (
    <Container>
      <Kakaotalk>
        <ButtonText>카카오톡</ButtonText>
      </Kakaotalk>
      <Naver>
        <ButtonText>네이버 아이디연동</ButtonText>
      </Naver>
      <Google>
        <ButtonText>구글</ButtonText>
      </Google>
      <EtcEmail onPress={onPress}>
        <ButtonText>기타 이메일 회원가입</ButtonText>
      </EtcEmail>
    </Container>
  );
};
