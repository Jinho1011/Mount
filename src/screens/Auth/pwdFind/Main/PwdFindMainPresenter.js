import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const HomeHeaderContainer = styled.View`
  flex-direction: row;
  height: 58px;
`;

const HomeHeaderButton = styled.TouchableOpacity`
  margin: 17px 87px 17px 15px;
`;

const imageStyles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
  },
});

const HomeHeaderTitle = styled.Text`
  height: 26px;
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  margin: 15px 126px 0px 16px;
`;

const EmailText = styled.Text`
  margin-top: 34px;
  margin-left: 23px;
  height: 16px;
  font-family: 'NotoSansKR-normal';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
`;

const TextInput = styled.TextInput`
  background-color: #f3f3f3;
  height: 48px;
  border: ${props => (props.border ? '#f3f3f3' : '#ff5151')};
  border-radius: 5px;
  color: #000000;
  font-family: 'NotoSansKR-normal';
  font-size: 16px;
  line-height: 24px;
  margin: 5px 23px 0px 23px;
  padding: 12px 68px 12px 18px;
`;

const HelpText = styled.Text`
  align-items: center;
  color: ${props => (props.color ? '#b4b4b4' : '#ff5151')};
  font-family: 'NotoSansKR-normal';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  margin: 2px 200px 0px 23px;
`;

const SendText = styled.Text`
  font-family: 'NotoSansKR-normal';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  margin: 51px 134px 0px 23px;
`;

const ChangePwdButton = styled.TouchableOpacity`
  background-color: ${props => (props.backgroundColor ? '#f3f3f3' : '#e2f955')};
  margin: 342px 23px 94px 23px;
  padding: 12px 88.5px 12px 88.5px;
  border-radius: 5px;
`;

const ChangePwdText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export default ({state, emailChangeHandler, onPressHandler}) => {
  const navigation = useNavigation();
  const loginDetailPress = () => navigation.navigate('LoginDetail');
  return (
    <Container>
      <HomeHeaderContainer>
        <HomeHeaderButton onPress={loginDetailPress}>
          <Image
            style={imageStyles.image}
            source={require('../../../../../assets/back_w.png')}
          />
        </HomeHeaderButton>
        <HomeHeaderTitle>비밀번호 찾기</HomeHeaderTitle>
      </HomeHeaderContainer>
      <EmailText>이메일</EmailText>
      <TextInput
        border={true}
        placeholder="가입된 이메일주소를 입력해주세요"
        placeholderTextColor="#8B8B8B"
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        onChangeText={emailChangeHandler}
        returnKeyType={'done'}
      />
      {state.emailBlank === state.emailValid ? (
        <HelpText color={true}> </HelpText>
      ) : (
        <HelpText color={false}>유효하지 않은 이메일 </HelpText>
      )}
      <SendText>
        입력하신 이메일로{'\n'}비밀번호 재설정 링크를 전송합니다.
      </SendText>
      <ChangePwdButton backgroundColor={true} onPress={onPressHandler}>
        <ChangePwdText>비밀번호 재설정하기</ChangePwdText>
      </ChangePwdButton>
    </Container>
  );
};
