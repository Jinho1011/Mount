import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const TitleText = styled.Text`
  width: 150px;
  height: 40px;
  margin-top: 71px;
  margin-left: 23px;
  font-style: normal;
  font-family: 'NotoSansKR-Bold';
  font-weight: 700;
  font-size: 18px;
`;

const AgreeButton = styled.TouchableOpacity`
  width: 87%;
  height: 48px;
  background-color: ${props => (props.backgroundColor ? '#000000' : '#f3f3f3')};
  margin-top: 16px;
  margin-left: 23px;
  padding-top: 12px;
  padding-left: 19px;
  border-radius: 5px;
`;
const ButtonText = styled.Text`
  width: 70%;
  height: 20px;
  color: ${props => (props.color ? '#e2f955' : '#b4b4b4')};
  font-family: 'NotoSansKR-normal';
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  margin-top: -22px;
  margin-left: 31%;
`;

const CheckButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  margin-top: 33px;
  margin-left: 31px;
`;

const CheckButton2 = styled(CheckButton)`
  margin-top: 27px;
`;

const TosTextBlack = styled.Text`
  width: 13%;
  height: 16px;
  font-family: 'NotoSansKR-normal';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: -21px;
  margin-left: 16%;
`;
const TosTextRed = styled(TosTextBlack)`
  width: 9%;
  color: #ff5151;
  margin-top: -16px;
  margin-left: 28.5%;
`;
const TosTextBox = styled.Text`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  width: 87%;
  height: 95px;
  margin-top: 11px;
  margin-left: 23px;
`;
const SignupButton = styled.TouchableOpacity`
  width: 87%;
  height: 48px;
  margin-top: 123px;
  margin-left: 23px;
  border-radius: 5px;
  background-color: ${props => (props.disabled ? '#f3f3f3' : '#e2f955')};
  padding-top: 12px;
  padding-bottom: 12px;
`;

const SignupText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const imageStyles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
  },
});

export default (state, AgreeButtonPress, firstCheckPress, secondCheckPress) => {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('LoginMain');
  return (
    <Container>
      <TitleText>이용 약관 동의</TitleText>
      <AgreeButton
        onPress={AgreeButtonPress}
        backgroundColor={state.firstCheck && state.secondCheck}>
        {state.firstCheck && state.secondCheck ? (
          <Image
            style={imageStyles.image}
            source={require('../../../../assets/Check_round_on.png')}
          />
        ) : (
          <Image
            style={imageStyles.image}
            source={require('../../../../assets/Check_round_off.png')}
          />
        )}
        <ButtonText color={state.firstCheck && state.secondCheck}>
          모두 동의합니다!
        </ButtonText>
      </AgreeButton>
      <CheckButton onPress={() => firstCheckPress}>
        {state.firstCheck ? (
          <Image
            style={imageStyles.image}
            source={require('../../../../assets/Check_.png')}
          />
        ) : (
          <Image
            style={imageStyles.image}
            source={require('../../../../assets/Check.png')}
          />
        )}
      </CheckButton>
      <TosTextBlack>이용약관</TosTextBlack>
      <TosTextRed>(필수)</TosTextRed>
      <TosTextBox>이용 약관 내용 첨부</TosTextBox>
      <CheckButton2 onPress={() => secondCheckPress}>
        {state.secondCheck ? (
          <Image
            style={imageStyles.image}
            source={require('../../../../assets/Check_.png')}
          />
        ) : (
          <Image
            style={imageStyles.image}
            source={require('../../../../assets/Check.png')}
          />
        )}
      </CheckButton2>
      <TosTextBlack>이용약관</TosTextBlack>
      <TosTextRed>(필수)</TosTextRed>
      <TosTextBox>이용 약관 내용 첨부</TosTextBox>
      <SignupButton
        //disabled={!(state.firstCheck && state.secondCheck)}
        disable={false}
        onPress={onPress}>
        <SignupText>회원가입</SignupText>
      </SignupButton>
    </Container>
  );
};
