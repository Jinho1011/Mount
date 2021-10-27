import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
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
  background-color: ${props => (props.backgroundColor ? '#000000' : '#f3f3f3')};
  margin-top: 16;
  margin-left: 23;
  padding-top: 12;
  padding-left: 19;
  border-radius: 5px;
`;
const ButtonText = styled.Text`
  width: 70%;
  height: 20;
  color: ${props => (props.color ? '#e2f955' : '#b4b4b4')};
  font-family: 'NotoSansKR';
  font-weight: 400;
  font-style: normal;
  font-size: 14;
  line-height: 20;
  align-items: center;
  margin-top: -22;
  margin-left: 31%;
`;

const CheckButton = styled.TouchableOpacity`
  width: 24;
  height: 24;
  margin-top: 33;
  margin-left: 31;
`;

const CheckButton2 = styled(CheckButton)`
  margin-top: 27;
`;

const TosTextBlack = styled.Text`
  width: 13%;
  height: 16;
  font-family: 'NotoSansKR';
  font-weight: 400;
  font-size: 12;
  line-height: 16;
  margin-top: -21;
  margin-left: 16%;
`;
const TosTextRed = styled(TosTextBlack)`
  width: 9%;
  color: #ff5151;
  margin-top: -16;
  margin-left: 28.5%;
`;
const TosTextBox = styled.Text`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  width: 87%;
  height: 95;
  margin-top: 11;
  margin-left: 23;
`;
const SignupButton = styled.TouchableOpacity`
  width: 87%;
  height: 48;
  margin-top: 123;
  margin-left: 23;
  border-radius: 5;
  background-color: ${props => (props.disabled ? '#f3f3f3' : '#e2f955')};
  padding-top: 12;
  padding-bottom: 12;
`;

const SignupText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-weight: 500;
  font-size: 16;
  line-height: 24;
  text-align: center;
`;

const imageStyles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
  },
});

export default () => {
  const navigation = useNavigation();
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const AgreeButtonPress = () => {
    if (firstCheck !== secondCheck) {
      setFirstCheck(true), setSecondCheck(true);
    } else {
      setFirstCheck(!firstCheck), setSecondCheck(!secondCheck);
    }
  };
  const firstCheckPress = () => {
    setFirstCheck(!firstCheck);
  };
  const secondCheckPress = () => {
    setSecondCheck(!secondCheck);
  };
  const onPress = () => navigation.navigate('LoginMain');
  return (
    <Container>
      <TitleText>이용 약관 동의</TitleText>
      <AgreeButton
        onPress={AgreeButtonPress}
        backgroundColor={firstCheck && secondCheck}>
        {firstCheck && secondCheck ? (
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
        <ButtonText color={firstCheck && secondCheck}>
          모두 동의합니다!
        </ButtonText>
      </AgreeButton>
      <CheckButton onPress={firstCheckPress}>
        {firstCheck ? (
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
      <CheckButton2 onPress={secondCheckPress}>
        {secondCheck ? (
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
      <SignupButton disabled={!(firstCheck && secondCheck)} onPress={onPress}>
        <SignupText>회원가입</SignupText>
      </SignupButton>
    </Container>
  );
};
