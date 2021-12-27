import React from 'react';
import {Image, View, Text} from 'react-native';
import styled from 'styled-components';

const TotalContainer = styled.View`
  background: #ffffff;
`;

const StyledTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
`;

const SmallContainer = styled.View`
  flex-direction: row;
  padding-left: 13px;
  align-items: center;
`;

const PriceBox = styled.View`
  flex-direction: column;
  margin-top: 11px;
`;

const PriceBoxTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 10px;
  line-height: 15px;
  color: #8b8b8b;
`;

const Price = styled.Text`
  margin-top: -5px;
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  line-height: 26px;
  color: #8b8b8b;
`;

const MultiplyImg = styled.Image`
  width: 16px;
  height: 16px;
  margin-left: 80px;
  margin-top: 24px;
`;

const Count = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  line-height: 26px;
  color: #8b8b8b;
  margin-left: 14px;
  margin-top: 20px;
`;

const TotalPriceBox = styled.View`
  margin-left: 33px;
  margin-top: 11px;
`;

const TotalPriceTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 10px;
  line-height: 15px;
  color: #8b8b8b;
  text-align: right;
`;

const TotalPriceText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  line-height: 26px;
  color: #ff5151;
  text-align: right;
`;

const TotalPrice = ({state, setState}) => {
  let price = 0;
  for (let i = 0; i < state.items.length; i++) {
    price = price + state.items[i].price;
  }
  let total = state.memberCnt * price;
  return (
    <TotalContainer>
      <StyledTitle>총 예상금액</StyledTitle>
      <SmallContainer>
        <PriceBox>
          <PriceBoxTitle>1인 기준</PriceBoxTitle>
          <Price>{price} 원</Price>
        </PriceBox>
        <MultiplyImg source={require('../../../assets/close.png')} />
        <Count>{state.memberCnt}</Count>
        <TotalPriceBox>
          <TotalPriceTitle>총 금액</TotalPriceTitle>
          <TotalPriceText>{total}</TotalPriceText>
        </TotalPriceBox>
      </SmallContainer>
    </TotalContainer>
  );
};

export default TotalPrice;
