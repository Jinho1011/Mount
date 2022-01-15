import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const TitleContainer = styled.View`
  align-items: center;
`;

const TitleText = styled.Text`
  color: #555555;
  font-family: 'NotoSansKR-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 273px 110px 0px 110px;
  text-align: center;
`;

const imageStyles = StyleSheet.create({
  image: {
    width: 154,
    height: 25,
    marginTop: 10,
    marginLeft: 103,
    marginRight: 103,
    resizeMode: 'stretch',
  },
});

const SignupButton = styled.TouchableOpacity`
  background-color: #e2f955;
  border-radius: 5px;
  height: 48px;
  justify-content: center;
  margin: 262px 23px 0px 23px;
`;

const LoginButton = styled.TouchableOpacity`
  height: 24px;
  margin: 14px 111px 56px 119px;
`;

const SignupText = styled.Text`
  font-family: 'NotoSansKR-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const LoginText = styled(SignupText)`
  color: #8b8b8b;
`;

export default () => {
  const navigation = useNavigation();
  const signupMainPress = () => navigation.navigate('SignupMain');
  const LoginMainPress = () => navigation.navigate('LoginMain');
  return (
    <Container>
      <TitleContainer>
        <TitleText>당신이 필요한 그만큼</TitleText>
        <Image
          style={imageStyles.image}
          source={require('../../../../assets/mount.png')}
        />
      </TitleContainer>
      <SignupButton onPress={signupMainPress}>
        <SignupText>회원가입</SignupText>
      </SignupButton>
      <LoginButton onPress={LoginMainPress}>
        <LoginText>이미 회원이신가요?</LoginText>
      </LoginButton>
    </Container>
  );
};
