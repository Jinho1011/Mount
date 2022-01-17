import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components';

const StyledSwiper = styled(Swiper)``;

const SlideView = styled(View)`
  align-items: center;
  background: #ffffff;
`;

export default function Banner() {
  return (
    <>
      <StyledSwiper
        showButtons={true}
        loop={true}
        autoplay={true}
        showPagination
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }>
        <SlideView>
          <Text>여기는</Text>
        </SlideView>
        <SlideView>
          <Text>이미지가</Text>
        </SlideView>
        <SlideView>
          <Text>들어올거예요!</Text>
        </SlideView>
      </StyledSwiper>
    </>
  );
}
