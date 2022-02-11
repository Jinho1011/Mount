import React from 'react';
import styled from 'styled-components';
import {View, StyleSheet, Button, Alert} from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #e2f955;
  border-radius: 5px;
  height: 48px;
  justify-content: center;
  margin: 594px 23px 0px 23px;
`;

const LoginText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export default ({startPress, state}) => {
  const showAlert = () =>
    Alert.alert(
      'ERROR',
      JSON.stringify(state.jwt) + '\n' + JSON.stringify(state.value),
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  return (
    <Container>
      <LoginButton
        onPress={() => {
          // showAlert();
          startPress();
        }}>
        <LoginText>시작 하기</LoginText>
      </LoginButton>
    </Container>
  );
};
