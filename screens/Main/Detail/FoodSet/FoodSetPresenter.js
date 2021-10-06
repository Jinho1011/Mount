import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const ScrollContainer = styled.ScrollView`
  background-color: #e5e5e5;
`;

const FoodImage = styled.Image`
  width: 100%;
  height: 254px;
`;

const DetailHeader = styled.View`
  padding: 16px 20px 20px 20px;
  background-color: #fff;
  justify-content: space-between;
`;

const DetailTitleContainer = styled.View`
  margin-bottom: 26px;
`;

const DetailTitle = styled.Text`
  color: #000;
  font-size: 18px;
  line-height: 26px;
  font-family: 'NotoSansKR-Bold';
  margin-bottom: 4px;
`;

const DetailSetInfo = styled.View`
  flex-direction: row;
`;

const DetailSetLabelContainer = styled.View`
  padding: 2px 4px 1px 4px;
  background-color: #f3f3f3;
  border-radius: 6px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const DetailSetLabel = styled.Text`
  color: #8b8b8b;
  font-size: 8px;
  font-family: 'NotoSansKR-Regular';
  line-height: 12px;
`;

const DetailSetElements = styled.Text`
  color: #777777;
  font-size: 10px;
  font-family: 'NotoSansKR-Regular';
  line-height: 15px;
`;

const DetailMembers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 14px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
`;

const DetailMemberText = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: 'NotoSansKR-Bold';
  line-height: 20px;
`;

const DetailAdjustMembers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailMemberCounter = styled.View`
  margin: 0 14px;
  padding: 0 22px;
  border-radius: 6px;
  border: 1px solid #f3f3f3;
`;

const CounterNumber = styled.Text`
  color: #000;
  font-size: 16px;
  line-height: 24px;
  font-family: 'NotoSansKR-Bold';
`;

export default () => {
  const navigation = useNavigation();
  return (
    <ScrollContainer>
      <FoodImage
        source={require('../../../../assets/food_detail_sample.png')}
      />
      <DetailHeader>
        <DetailTitleContainer>
          <DetailTitle>제목몇글자들어가나요</DetailTitle>
          <DetailSetInfo>
            <DetailSetLabelContainer>
              <DetailSetLabel>세트</DetailSetLabel>
            </DetailSetLabelContainer>
            <DetailSetElements>
              구성품1, 구성품2, 구성품3, 구성품4
            </DetailSetElements>
          </DetailSetInfo>
        </DetailTitleContainer>
        <DetailMembers>
          <DetailMemberText>총 인원 수</DetailMemberText>
          <DetailAdjustMembers>
            <Pressable
              onPress={() => {
                console.log('minus');
              }}>
              <Image source={require('../../../../assets/minus_dis.png')} />
            </Pressable>
            <DetailMemberCounter>
              <CounterNumber>0</CounterNumber>
            </DetailMemberCounter>
            <Pressable
              onPress={() => {
                console.log('plus');
              }}>
              <Image source={require('../../../../assets/plus_dis.png')} />
            </Pressable>
          </DetailAdjustMembers>
        </DetailMembers>
      </DetailHeader>
    </ScrollContainer>
    // <ScrollViewContainer>
    //   <FoodImage
    //     source={require('../../../../assets/food_detail_sample.png')}
    //   />
    //   <FirstContainer>
    //     <FoodSetTitle>제목몇글자들어가나요여기</FoodSetTitle>
    //     <First_FirstContainer>
    //       <CategoryBackground>
    //         <CategoryTitle>세트</CategoryTitle>
    //       </CategoryBackground>
    //       <SetItems>구성품1, 구성품2, 구성품3, 구성품4, 구성품5 ...</SetItems>
    //     </First_FirstContainer>
    //     <BorderLine>
    //       <TotalPeople>총 인원 수</TotalPeople>
    //       <Counter>
    //         <Image source={require('../../../../assets/minus_dis.png')} />
    //         <InnerBorderLine></InnerBorderLine>
    //         <Image source={require('../../../../assets/plus_dis.png')} />
    //       </Counter>
    //     </BorderLine>
    //   </FirstContainer>
    //   <Items>구성품</Items>
    //   <ItemsBox></ItemsBox>
    //   <TouchBox></TouchBox>
    // </ScrollViewContainer>
  );
};
