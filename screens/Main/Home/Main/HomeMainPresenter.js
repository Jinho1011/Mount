import React from 'react';
import {View, Text, Pressable, Button, ScrollView} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

import FocusAwareStatusBar from '../../../../components/StatusBar';

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
`;

const HomeHeaderContainer = styled.View`
  height: 215px;
  padding: 20px;
  background-color: black;
  justify-content: flex-end;
`;

const HomeHeaderTitle = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-family: 'NotoSansKR-Bold';
  line-height: 38px;
`;

const HomeHeaderSubTitle = styled.Text`
  color: #9f9f9f;
  font-size: 18px;
  font-family: 'NotoSansKR-Regular';
  line-height: 24px;
`;

const DetailsWrapper = styled.View`
  margin-top: 20px;
  padding-left: 20px;
`;

const DetailsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  margin-bottom: 15px;
`;

const DetailsTitle = styled.Text`
  color: #000000;
  font-size: 16px;
  font-family: 'NotoSansKR-Bold';
  line-height: 24px;
`;

const DetailMore = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DetailMoreText = styled.Text`
  color: #8b8b8b;
  font-size: 12px;
  font-family: 'NotoSansKR-Regular';
  line-height: 16px;
  margin-right: 4px;
`;

const Details = styled.ScrollView``;

const Detail = styled.View`
  width: 128px;
  height: 128px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: #f3f3f3;
`;

export default () => {
  const navigation = useNavigation();
  return (
    <ScrollContainer>
      <>
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor="#000000"
        />
      </>
      <HomeHeaderContainer>
        <HomeHeaderTitle>입력된 문장</HomeHeaderTitle>
        <HomeHeaderSubTitle>
          더보기 안내로 이어짐 : 서비스 튜토리얼 페이지
        </HomeHeaderSubTitle>
      </HomeHeaderContainer>
      <DetailsWrapper>
        <DetailsHeader>
          <DetailsTitle>음식세트 어쩌구 문구</DetailsTitle>
          <DetailMore
            onPress={() => {
              navigation.navigate('HomeTabs');
            }}>
            <DetailMoreText>더보기</DetailMoreText>
            <Icon name="arrow-right" size={12} color="#8b8b8b"></Icon>
          </DetailMore>
        </DetailsHeader>
        <Details horizontal={true} showsHorizontalScrollIndicator={false}>
          <Detail></Detail>
          <Detail></Detail>
          <Detail></Detail>
          <Detail></Detail>
          <Detail></Detail>
        </Details>
      </DetailsWrapper>
      <DetailsWrapper>
        <DetailsHeader>
          <DetailsTitle>레크세트 어쩌구 문구</DetailsTitle>
          <DetailMore
            onPress={() => {
              navigation.navigate('HomeTabs');
            }}>
            <DetailMoreText>더보기</DetailMoreText>
            <Icon name="arrow-right" size={12} color="#8b8b8b"></Icon>
          </DetailMore>
        </DetailsHeader>
        <Details horizontal={true} showsHorizontalScrollIndicator={false}>
          <Detail></Detail>
          <Detail></Detail>
          <Detail></Detail>
          <Detail></Detail>
          <Detail></Detail>
        </Details>
      </DetailsWrapper>
    </ScrollContainer>
  );
};
