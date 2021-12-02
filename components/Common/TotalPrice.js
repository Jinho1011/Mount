import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components";

const TotalPriceContainer = styled.View`
  background: #ffffff;
  padding: 25px 26px 19px 20px;
`;

const TotalPriceTitle = styled.Text`
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
  margin: 11px 0px 1px 13px;
  flex-direction: column;
`;

const PriceForPersonTitle = styled.Text`
  font-family: 'NotoSansKR-Normal';
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

const PriceForPersonPrice = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

const CloseImageContainer = styled.View`
  margin: 29px 0px 6px 142px;
  position: absolute;
`;

const TotalCount = styled.Text`
  margin: 13px 0px 2px 172px;

  font-family: 'NotoSansKR-Bold';
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
  font-family: 'NotoSansKR-Normal';
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #8b8b8b;
`;

const ResultPrice = styled.Text`
  font-family: 'NotoSansKR-Bold';
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
          <TotalCount>20</TotalCount>
          <TotalResultBox>
            <ResultTitle>총 금액</ResultTitle>
            <ResultPrice>999,999원</ResultPrice>
          </TotalResultBox>
        </TotalCalculatorContainer> 
      </TotalPriceContainer>
  )
}

export default TotalPrice;
