import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import TitleContainer from '../../../../components/Common/SetTitle';
import Counter from '../../../../components/Food/Counter';
import Components from '../../../../components/Food/Components';
import FocusAwareStatusBar from '../../../../components/StatusBar';
import TotalPrice from '../../../../components/Common/TotalPrice';
import Caution from '../../../../components/Common/Caution';
import _ from 'lodash';

const PageWrap = styled(View)``;

const ScrollContainer = styled(ScrollView)`
  background-color: #fff;
`;

const FoodSetListTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  line-height: 16px;
  font-size: 12px;
  color: #000000;
  margin-top: 32px;
`;

const ItemsContainer = styled(View)`
  margin-top: 18px;
  padding-left: 15px;
  padding-right: 35px;
`;

/* bottom button container */
const BottomConatiner = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  border: 0.3px solid #b4b4b4;
  padding: 8px 21px 8px 23px;
`;

const ChangeCountButton = styled(TouchableOpacity)`
  padding: 12px 102px;
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

const LikeView = styled(View)`
  flex-direction: row;
  padding-top: 13px;
  padding-left: 13px;
`;

const LikeButton = styled(TouchableOpacity)``;

const LikeCount = styled(Text)`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
  padding-left: 3px;
`;

const ContentContainer = styled(View)`
  padding-left: 20px;
`;

const TotalPriceContainer = styled(View)`
  padding-top: 25px;
  padding-bottom: 19px;
  padding-right: 20px;
`;

const CautionContainer = styled(View)`
  padding: 24px 20px 17px 20px;
`;

const BorderLine = styled(View)`
  height: 4px;
  border: 0.35px solid #eaeaea;
  background: #f3f3f3;
`;

const FoodSetPresenter = ({state, setState}) => {
  const navigation = useNavigation();
  return (
    <PageWrap style={{flex: 1}}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollContainer>
        <TitleContainer
          img={state?.foodSet?.img}
          title={state?.foodSet?.title}
          // items 배열의 name들을 map으로 받아오고 ', '으로 join
          items={state?.items?.map(item => item.name).join(', ')}
        />
        <Counter state={state} setState={setState} />
        <BorderLine />
        <ContentContainer>
          <FoodSetListTitle>구성품</FoodSetListTitle>
          <ItemsContainer>
            {state?.items?.map(item => {
              return (
                <Components
                  state={state}
                  setState={setState}
                  item={item}
                  key={item.id}
                />
              );
            })}
          </ItemsContainer>
          <TotalPriceContainer>
            <TotalPrice state={state} setState={setState} />
          </TotalPriceContainer>
        </ContentContainer>
        <BorderLine />
        <CautionContainer>
          <Caution
            state={state}
            setState={setState}
            caution={state?.foodSet?.caution}
          />
        </CautionContainer>
      </ScrollContainer>
      <BottomConatiner>
        <ChangeCountButton
          onPress={() => {
            const _state = _.cloneDeep(state);
            navigation.navigate('FoodSetChangeCount', {_state});
          }}>
          <ChangeCountText>수량변경</ChangeCountText>
        </ChangeCountButton>
        <LikeView>
          <LikeButton>
            <Image source={require('../../../../../assets/Like.png')} />
          </LikeButton>
          <LikeCount>23</LikeCount>
        </LikeView>
      </BottomConatiner>
    </PageWrap>
  );
};

export default FoodSetPresenter;
