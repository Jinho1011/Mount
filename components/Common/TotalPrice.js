import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components";

const TotalPriceContainer = styled.View`
  background: #ffffff;
  padding: 0px 26px 0px 20px;
`;

const TotalPriceTitle = styled.Text`
  margin-top: 26px;
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const TotalCalculatorContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 20px;
  padding-left: 14px;
`;

const PriceForPersonBox = styled.View`
  flex-direction: column;
`;

const PriceForPersonTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

const PriceForPersonPrice = styled.Text`
  margin-top: -5px;
  margin-bottom: 1px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

const CloseImageContainer = styled.View`
  margin-top: 15px;
  margin-left: 56px;
  margin-bottom: 6px;
`;

const TotalCount = styled.Text`
  margin: 9px 0 2px 14px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

const TotalResultBox = styled.View`
  flex-direction: column;
  margin-left: 70px;
`;

const ResultTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #8b8b8b;
`;

const ResultPrice = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #ff5151;
`;

const TotalPrice = ({state, setState}) => {
  return (
      <TotalPriceContainer>
        <TotalPriceTitle>총 예상금액</TotalPriceTitle>
        <TotalCalculatorContainer>
          <PriceForPersonBox>
            <PriceForPersonTitle>1인 기준</PriceForPersonTitle>
            <PriceForPersonPrice>{state?.price}</PriceForPersonPrice>
          </PriceForPersonBox>
          <CloseImageContainer>
            <Image source={require('../../assets/close.png')} />
          </CloseImageContainer>
          <TotalCount>{state?.memberCnt}</TotalCount>
          <TotalResultBox>
            <ResultTitle>총 금액</ResultTitle>
            <ResultPrice></ResultPrice>
          </TotalResultBox>
        </TotalCalculatorContainer> 
      </TotalPriceContainer>
  )
}

export default TotalPrice;
