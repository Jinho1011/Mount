import React from 'react';
import styled from 'styled-components';

const TotalContainer = styled.View`
  justify-content: space-between;
  background: #ffffff;
`;

const StyledTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
`;

const SmallContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 13px;
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

const MultiplyImgBox = styled.View`
  padding-left: 55px;
  padding-top: 28px;
`;

const MultiplyImg = styled.Image`
  width: 16px;
  height: 16px;
`;

const Count = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  line-height: 26px;
  color: #8b8b8b;
  padding-left: 14px;
  padding-top: 20px;
`;

const TotalPriceBox = styled.View`
  padding-left: 33px;
  padding-top: 6px;
  padding-right: 6px;
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

const SingleTotalPrice = ({state, setState}) => {
  let total = state.foodSingle.count * state.foodSingle.price;
  let pricePerPerson = parseInt(total / state.memberCnt, 10);
  return (
    <TotalContainer>
      <StyledTitle>총 예상금액</StyledTitle>
      <SmallContainer>
        <PriceBox>
          <PriceBoxTitle>1인 기준</PriceBoxTitle>
          <Price>{pricePerPerson} 원</Price>
        </PriceBox>
        <MultiplyImgBox>
          <MultiplyImg source={require('../../../assets/close.png')} />
        </MultiplyImgBox>
        <Count>{state.memberCnt}</Count>
        <TotalPriceBox>
          <TotalPriceTitle>총 금액</TotalPriceTitle>
          <TotalPriceText>{total} 원</TotalPriceText>
        </TotalPriceBox>
      </SmallContainer>
    </TotalContainer>
  );
};

export default SingleTotalPrice;
