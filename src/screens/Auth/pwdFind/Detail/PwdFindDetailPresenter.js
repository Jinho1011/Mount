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
  background-color: #ffffff;
`;

const HomeHeaderButton = styled.TouchableOpacity`
  margin: 17px 87px 17px 15px;
`;

const PwdFindDetailContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
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
const TextBox = styled.Text`
  width: 178px;
  height: 178px;
  background-color: #c4c4c4;
  margin: 124px 91px 0px 91px;
  align-items: center;
  justify-content: center;
`;

const SendText = styled.Text`
  font-family: 'NotoSansKR-normal';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  margin-top: 32px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #e2f955;
  margin: 182px 23px 0px 23px;
  padding: 12px 118px;
  border-radius: 5px;
`;

const LoginText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const AgainButton = styled.TouchableOpacity`
  height: 18px;
  margin: 16px 113px 60px 113px;
  justify-content: center;
`;

const AgainText = styled.Text`
  font-family: 'NotoSansKR-normal';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #8b8b8b;
`;

export default () => {
  const navigation = useNavigation();
  const loginDetailPress = () => navigation.navigate('LoginDetail');
  const pwdFindMainPress = () => navigation.navigate('PwdFindMain');
  return (
    <Container>
      <HomeHeaderContainer>
        <HomeHeaderButton onPress={pwdFindMainPress}>
          <Image
            style={imageStyles.image}
            source={require('../../../../../assets/back_w.png')}
          />
        </HomeHeaderButton>
        <HomeHeaderTitle>비밀번호 찾기</HomeHeaderTitle>
      </HomeHeaderContainer>
      <PwdFindDetailContainer>
        <TextBox />
        <SendText>비밀번호 재설정 링크를 전송했어요!</SendText>
      </PwdFindDetailContainer>
      <LoginButton onPress={loginDetailPress}>
        <LoginText>로그인 하기</LoginText>
      </LoginButton>
      <AgainButton>
        <AgainText>이메일을 받지 못하셨나요?</AgainText>
      </AgainButton>
    </Container>
  );
};
