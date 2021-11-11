import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import FocusAwareStatusBar from '../../../../components/StatusBar';

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const LongContainer = styled.View`
  margin-bottom: 20px;
`;

const LongImage = styled.View`
  width: 100%;
  height: 150px;
  background-color: #f3f3f3;
  border-radius: 4px;
`;

const LongInfo = styled.View`
  padding-top: 6px;
  padding-left: 2px;
  padding-bottom: 4px;
`;

const LongLeft = styled.View``;

const LongTitle = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Bold';
  line-height: 20px;
`;

const LongSubtitle = styled.Text``;

const LongRight = styled.View``;

export default () => {
  const navigation = useNavigation();
  return (
    <ScrollContainer>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <LongContainer>
        <LongImage></LongImage>
        <LongInfo>
          <LongLeft>
            <LongTitle>제목몇글자들어가나요여기</LongTitle>
            <LongSubtitle>세트설명어쩌구저쩌구어쩌..</LongSubtitle>
          </LongLeft>
          <LongRight>
            <Text>asd</Text>
          </LongRight>
        </LongInfo>
      </LongContainer>
    </ScrollContainer>
  );
};
