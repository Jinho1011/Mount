import React from 'react';
import {Image, View, Text, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const ScrollViewContainer = styled.ScrollView`
  background-color: #ffffff;
  flex: 1;
`;

const FoodImage = styled.Image`
  width: 100%;
  height: 254px;
`;

const FirstContainer = styled.View`
  width: 100%;
  height: 172px;
`;

const FoodSetTitle = styled.Text`
  /* 제목몇글자들어가나요여기 */
  position: absolute;
  height: 26px;
  left: 26px;
  margin-top: 17px;

  /* mount/Headline 1B */
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;

  /* identical to box height, or 144% */
  display: flex;
  align-items: center;

  color: #000000;
`;

// 세트 + 구성품1, 구성품2, ...
const First_FirstContainer = styled.View`
  position: relative;
  margin-top: 43px;
  flexDirection: row;
`;

const CategoryBackground = styled.View`
  width: 23px;
  height: 15px;
  left: 27px;

  /* light grey1 */

  background: #EFEFEF;
  border-radius: 5px;
`;

const CategoryTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 12px;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 2px;
  margin-bottom: 1px;

  display: flex;
  align-items: center;

  /* grey2 */

  color: #8B8B8B;
`;

const SetItems = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  margin-left: 54px;
  margin-top: 4px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* grey3 */

  color: #777777;
`;

const BorderLine = styled.View`
  width: 100%;
  height: 63px;
  margin-left: 19px;
  margin-right: 21px;
  margin-top: 26px;
  border: 1px solid #EAEAEA;
  border-radius: 7px;

  flexDirection: row;
`;

const TotalPeople = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  margin-top: 22px;
  margin-bottom: 21px;
  margin-left: 15px;
  
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;
`;

const Counter = styled.View`
  width: 131px;
  height: 24px;

  margin-top: 20px;
  margin-bottom: 19px;
  margin-left: 175px;

  flexDirection: row;
`;

const InnerBorderLine = styled.View`
  width: 55px;
  height: 24px;

  margin-left: 13px;
  margin-right: 15px;

  background: #FFFFFF;
  /* Light Grey 1 */

  border: 1px solid #F3F3F3;
  border-radius: 5px;
`;

const Items = styled.Text`
  margin-left: 20px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const ItemsBox = styled.View`
  width: 100%;
  height: 286px;

  margin-left: 35px;
  margin-right: 35px;

  color: #123456;
`;

const TouchBox = styled.TouchableOpacity`
  width: 100%;
  height: 48px;

`;

export default () => {
  
  const navigation = useNavigation();
  return (
    <ScrollViewContainer>
        <FoodImage source={require('../../../../assets/food_detail_sample.png')} />
        <FirstContainer>
          <FoodSetTitle>제목몇글자들어가나요여기</FoodSetTitle>     
            <First_FirstContainer>
              <CategoryBackground>
                <CategoryTitle>세트</CategoryTitle>
              </CategoryBackground>
              <SetItems>구성품1, 구성품2, 구성품3, 구성품4, 구성품5 ...</SetItems>
            </First_FirstContainer>
            <BorderLine>
              <TotalPeople>총 인원 수</TotalPeople>
              <Counter>
                <Image source={require('../../../../assets/minus_dis.png')} />
                <InnerBorderLine></InnerBorderLine>
                <Image source={require('../../../../assets/plus_dis.png')} />
              </Counter>
            </BorderLine>
        </FirstContainer>
        <Items>구성품</Items>
        <ItemsBox>

        </ItemsBox>
        <TouchBox>

        </TouchBox>
    </ScrollViewContainer>   
  );
};
