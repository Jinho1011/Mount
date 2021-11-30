import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components";

const TotalPriceContainer = styled.View`
  background: #ffffff;
  padding: 0px 26px 39px 20px;
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
  position: relative;
  flex-direction: row;
  padding: 12px 0px 0px 14px;
`;

const PriceForPersonBox = styled.View`
  position: absolute;
  left: 4.14%;
  right: 72.29%;
  top: 43.08%;
  bottom: 1.54%;
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
  position: absolute;
  left: 45.22%;
  right: 49.68%;
  top: 66.15%;
  bottom: 9.23%;

  padding-top: 15px;
`;

const TotalCount = styled.Text`
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
  position: absolute;
  left: 72.29%;
  right: 0%;
  top: 43.08%;
  bottom: 1.54%;

  flex-direction: column;
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
            <PriceForPersonPrice>12000원</PriceForPersonPrice>
          </PriceForPersonBox>
          <CloseImageContainer>
            <Image source={require('../../assets/close.png')} />
          </CloseImageContainer>
          <TotalCount>{state?.memberCnt}</TotalCount>
          <TotalResultBox>
            <ResultTitle>총 금액</ResultTitle>
            <ResultPrice>999,999원</ResultPrice>
          </TotalResultBox>
        </TotalCalculatorContainer> 
      </TotalPriceContainer>
  )
}

export default TotalPrice;
