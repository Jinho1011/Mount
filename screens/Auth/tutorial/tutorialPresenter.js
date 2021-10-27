import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const LoginButton = styled.TouchableOpacity`
  width: 87%;
  height: 48;
  margin-top: 618;
  margin-left: 23;
  border-radius: 5;
  background-color: #e2f955;
  padding-top: 12;
  padding-bottom: 12;
`;

const LoginText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-weight: 500;
  font-size: 16;
  line-height: 24;
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
