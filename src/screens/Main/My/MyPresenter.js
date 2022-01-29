import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MyContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  flex: 1;
`;

const MyImage = styled.Image`
  width: 230px;
  height: 300px;
`;

export default () => {
  const navigation = useNavigation();
  return (
    <MyContainer>
      <MyImage
        source={require('../../../../assets/error/408_error_img.webp')}
      />
    </MyContainer>
  );
};
