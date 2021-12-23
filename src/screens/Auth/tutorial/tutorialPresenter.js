import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const LoginButton = styled.TouchableOpacity`
  width: 87%;
  height: 48px;
  margin-top: 618px;
  margin-left: 23px;
  border-radius: 5px;
  background-color: #e2f955;
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

export default props => {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('Tutorial'); //다음으로 이동

  return (
    <Container>
      <LoginButton>
        <LoginText>시작 하기</LoginText>
      </LoginButton>
    </Container>
  );
};
