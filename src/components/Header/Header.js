import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {
  MountSvg,
  Back_bSvg,
  Back_wSvg,
  Projectfile_bSvg,
  Projectfile_wSvg,
} from '../../components/assets';

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding-left: 15px;
  padding-right: 15px;
  height: 58px;
  elevation: 1;
`;

const HeaderProgram = styled.Pressable`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

const HeaderText = styled.Text`
  color: #373737;
  font-size: 18px;
  font-family: 'NotoSansKR-Bold';
`;

export const HeaderLeft = ({canGoBack}) => {
  const navigation = useNavigation();

  if (canGoBack) {
    return (
      <Pressable onPress={() => navigation.goBack()}>
        <Back_bSvg width={24} height={24} />
      </Pressable>
    );
  } else {
    return <View style={{width: 24, height: 24}}></View>;
  }
};

export const HeaderTitle = ({title}) => {
  if (title === '홈') {
    return <MountSvg width={127} height={21} />;
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
      <Projectfile_bSvg width={28} height={39} />
    </HeaderProgram>
  );
};

export const Header = ({navigation, options}) => {
  return (
    <HeaderContainer>
      <HeaderLeft canGoBack={navigation.canGoBack()} />
      <HeaderTitle title={options?.tabBarLabel} />
      <HeaderRight />
    </HeaderContainer>
  );
};
