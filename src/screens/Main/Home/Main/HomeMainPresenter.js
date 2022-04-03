import React from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FocusAwareStatusBar from '../../../../components/StatusBar';
import DetailsContainer from '../../../../components/Main/Details';

const screenWidth = Dimensions.get('window').width;

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
`;

const HomeHeaderContainer = styled.Pressable``;

const HomeHeaderImage = styled.Image`
  width: ${screenWidth}px;
  height: 215px;
`;

export default ({state, setState}) => {
  const navigation = useNavigation();
  return (
    <ScrollContainer>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <HomeHeaderContainer onPress={() => navigation.navigate('HomeTutorial')}>
        <HomeHeaderImage
          source={require('../../../../../assets/banner.webp')}
        />
      </HomeHeaderContainer>
      <DetailsContainer
        title="음식세트상품"
        navigate="HomeFoodDetail"
        items={state.foods}
        isLoaded={state.isLoaded}
        type={'FoodSet'}
      />
      <DetailsContainer
        title="레크세트상품"
        navigate="HomeRecDetail"
        items={state.recs}
        isLoaded={state.isLoaded}
        type={'RecSet'}
      />
    </ScrollContainer>
  );
};
