import React from 'react';
import {View, Text, Pressable, Button, ScrollView} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

import FocusAwareStatusBar from '../../../../components/StatusBar';
import DetailContainer from '../../../../components/Main/Details';

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

export default ({foods}) => {
  const navigation = useNavigation();
  return (
    <ScrollContainer>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <HomeHeaderContainer>
        <HomeHeaderTitle>입력된 문장</HomeHeaderTitle>
        <HomeHeaderSubTitle>
          더보기 안내로 이어짐 : 서비스 튜토리얼 페이지
        </HomeHeaderSubTitle>
      </HomeHeaderContainer>

      <DetailContainer
        title="음식세트 어쩌구 문구"
        navigate="HomeFoodDetail"
        components={foods}
      />
      <DetailContainer
        title="레크세트 어쩌구 문구"
        navigate="HomeRecDetail"
        components={foods}
      />
    </ScrollContainer>
  );
};
