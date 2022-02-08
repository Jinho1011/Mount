import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Back_wSvg, Projectfile_wSvg} from '../../components/assets';

const HeaderContainer = styled(LinearGradient)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 58px;
  padding-left: 15px;
  padding-right: 29px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderProgram = styled.Pressable`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
`;
export const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Back_wSvg width={24} height={24} />
    </Pressable>
  );
};

export const HeaderRight = () => {
  const planners = useSelector(state => state.planners.planners);
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <HeaderProgram
      onPress={() => {
        console.log('TPHGEADER PRESSED');
        if (route.name === 'Planner' || planners.length === 0) {
          navigation.navigate('PlanEditor');
        } else {
          navigation.navigate('Planner', {id: planners[0].id});
        }
      }}>
      <Projectfile_wSvg width={28} height={39} />
    </HeaderProgram>
  );
};

export const TransparentHeader = props => {
  return (
    <HeaderContainer
      colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.0)']}>
      <HeaderLeft />
      <HeaderRight />
    </HeaderContainer>
  );
};
