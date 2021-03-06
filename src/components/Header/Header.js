import React from 'react';
import {View, Pressable} from 'react-native';
import styled from 'styled-components';
import {MountSvg, Back_bSvg, Projectfile_bSvg} from '../../components/assets';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

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
  const route = useRoute();

  if (canGoBack && route.name !== 'MyPage') {
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
  const planners = useSelector(state => state.planners.planners);
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <HeaderProgram
      onPress={() => {
        if (route.name === 'Planner' || planners.length === 0) {
          navigation.navigate('PlanEditor');
        } else {
          navigation.navigate('Planner', {id: planners[0].id});
        }
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
