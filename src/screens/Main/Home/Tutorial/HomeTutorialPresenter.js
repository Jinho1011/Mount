import React, {useEffect, useState} from 'react';
import {ScrollView, Image, Dimensions} from 'react-native';
import styled from 'styled-components';
import FocusAwareStatusBar from '../../../../components/StatusBar';

const screenWidth = Dimensions.get('window').width;

const ScrollContainer = styled(ScrollView)`
  background-color: #fff;
  padding-bottom: 115px;
`;

const TutorialImage = styled(Image)`
  width: ${screenWidth}px;
  height: ${props => props.height}px;
  margin-bottom: 10px;
`;

export default ({state, setState}) => {
  return (
    <ScrollContainer>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {state.isLoaded ? (
        state.imgs.map(img => {
          return (
            <TutorialImage
              source={{uri: img.url}}
              key={img.id}
              height={img.height}
            />
          );
        })
      ) : (
        <></>
      )}
    </ScrollContainer>
  );
};
