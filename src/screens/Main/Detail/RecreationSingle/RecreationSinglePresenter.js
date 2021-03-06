import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import FocusAwareStatusBar from '../../../../components/StatusBar';
import SingleCounter from '../../../../components/Rec/SingleCounter';
import Components from '../../../../components/Rec/Components';
import RecSingleTotalPrice from '../../../../components/Rec/RecSingleTotalPrice';
import SingleTitle from '../../../../components/Rec/SingleTitle';
import _ from 'lodash';
import MyCarousel from '../../../../components/Rec/MyCarousel';

const PageWrap = styled(View)``;

const ScrollContainer = styled(ScrollView)`
  background-color: #fff;
`;

const RecTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  padding-left: 20px;
`;

/* 가이드라인 */
const GuideLineTitle = styled(Text)`
  font-family: 'NotoSansKR-Regular';
  font-size: 12px;
  line-height: 17px;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
`;

const GuideLineContainer = styled(View)`
  padding-top: 25px;
  padding-bottom: 25px;
  background: #ffffff;
`;

const BottomConatiner = styled(View)`
  flex-direction: row;
  background: #ffffff;
  border: 0.3px solid #b4b4b4;
  padding: 8px 21px 8px 23px;
`;

const ChangeCountButton = styled(TouchableOpacity)`
  padding: 12px 118px;
  background: #e2f955;
  border-radius: 5px;
  height: 48px;
`;

const ChangeCountText = styled(Text)`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

const LikeButton = styled(TouchableOpacity)`
  margin: 14.5px 0 14.5px 13px;
`;

const LikeCount = styled(Text)`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
  margin-top: 11px;
  margin-left: 3px;
`;

const BorderLine = styled(View)`
  height: 4px;
  border: 0.35px solid #eaeaea;
  background: #f3f3f3;
`;

const CounterContainer = styled(View)`
  padding: 17px 20px 24px 20px;
`;

const ComponentsContainer = styled(View)`
  padding: 36px 20px 0px 20px;
`;

const PriceContainer = styled(View)`
  padding: 25px 20px 20px 20px;
`;

const ComponentsTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 17px;
  padding-bottom: 10px;
`;

const RecreationSinglePresenter = ({state, setState}) => {
  const navigation = useNavigation();
  return (
    <PageWrap style={{flex: 1}}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollContainer>
        <SingleTitle
          image={state?.recSingle?.image}
          title={state?.recSingle?.title}
          one_line_description={state?.recSingle?.one_line_description}
        />
        <CounterContainer>
          <SingleCounter state={state} setState={setState} />
        </CounterContainer>
        <BorderLine />
        {/* <GuideLineContainer>
          <RecTitle>저희 레크는요...</RecTitle>
          <GuideLineTitle>가이드라인</GuideLineTitle>
          <MyCarousel state={state} setState={setState} />
        </GuideLineContainer>
        <BorderLine /> */}
        <ComponentsContainer>
          <ComponentsTitle>구성품</ComponentsTitle>
          <Components state={state} setState={setState} />
        </ComponentsContainer>
        <PriceContainer>
          <RecSingleTotalPrice state={state} setState={setState} />
        </PriceContainer>
      </ScrollContainer>
      <BottomConatiner>
        <ChangeCountButton
          onPress={() => {
            const _state = _.cloneDeep(state);
            navigation.navigate('RecSingleChangeCount', {_state});
          }}>
          <ChangeCountText>수량변경</ChangeCountText>
        </ChangeCountButton>
        <LikeButton>
          <Image source={require('../../../../../assets/Like.png')} />
        </LikeButton>
        <LikeCount>23</LikeCount>
      </BottomConatiner>
    </PageWrap>
  );
};

export default RecreationSinglePresenter;
