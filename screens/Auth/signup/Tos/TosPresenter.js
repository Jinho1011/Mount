import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const TitleText = styled.Text`
  width: 150;
  height: 40;
  margin-top: 71;
  margin-left: 23;
  font-style: normal;
  font-family: 'NotoSansKR-Bold';
  font-weight: 700;
  font-size: 18;
`;

const AgreeButton = styled.TouchableOpacity`
  width: 87%;
  height: 48;
  margin-top: 16;
  margin-left: 23;
  padding-top: 14;
  padding-top: 14;
  padding-left: 113;
  background-color: #f3f3f3;
`;

const ButtonText = styled.Text`
  width: 70%;
  height: 20;
  font-family: 'NotoSansKR';
  font-weight: 400;
  font-style: normal;
  font-size: 14;
  line-height: 20;
  align-items: center;
`;
export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TitleText>이용 약관 동의</TitleText>
      <AgreeButton>
        <ButtonText>모두 동의합니다!</ButtonText>
      </AgreeButton>
    </Container>
  );
};
