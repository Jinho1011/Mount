import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding-left: 15px;
  padding-right: 15px;
  height: 58px;
`;

const HeaderBackButton = styled.Image`
  width: 24px;
  height: 24px;
`;

const HeaderTitleImage = styled.Image`
  width: 127px;
`;

const HeaderProgram = styled.Pressable`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

const HeaderProgramText = styled.Text`
  color: #373737;
  font-size: 10px;
`;

const HeaderProgramImage = styled.Image`
  width: 24px;
  height: 24px;
`;

const HeaderText = styled.Text`
  color: #373737;
  font-size: 18px;
  font-family: 'NotoSansKR-Bold';
`;

export const HeaderLeft = ({canGoBack}) => {
  if (canGoBack) {
    return <HeaderBackButton source={require('../../../assets/back_w.png')} />;
  } else {
    return <View style={{width: 24, height: 24}}></View>;
  }
};

export const HeaderTitle = ({title}) => {
  if (title == '홈') {
    return <HeaderTitleImage source={require('../../../assets/mount.png')} />;
  } else {
    return <HeaderText>{title}</HeaderText>;
  }
};

export const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <HeaderProgram
      onPress={() => {
        navigation.navigate('Planner');
      }}>
      <HeaderProgramImage
        source={require('../../../assets/projectfile_w.png')}
      />
      <HeaderProgramText>기획서</HeaderProgramText>
    </HeaderProgram>
  );
};

export const Header = ({navigation, options}) => {
  return (
    <HeaderContainer>
      <HeaderLeft canGoBack={navigation.canGoBack()} />
      <HeaderTitle title={options?.title} />
      <HeaderRight />
    </HeaderContainer>
  );
};
