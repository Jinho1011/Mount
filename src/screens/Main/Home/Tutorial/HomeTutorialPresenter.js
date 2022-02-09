import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import FocusAwareStatusBar from '../../../../components/StatusBar';

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
`;

export default ({state, setState}) => {
  return (
    <ScrollContainer>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    </ScrollContainer>
  );
};
