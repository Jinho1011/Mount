import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import {CloseSvg} from '.././../components/assets';

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
  padding-top: 11px;
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

const NoMemberCntContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const TotalPrice = ({state}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    state.items.food.map(item => {
      setTotalPrice(prev => prev + item.count * item.price);
    });

    state.items.rec.map(item => {
      setTotalPrice(prev => prev + item.count * item.total_price);
    });
  }, []);

  return (
    <TotalContainer>
      <StyledTitle>총 예상금액</StyledTitle>
      <SmallContainer>
        {state.memberCnt > 0 ? (
          <>
            <PriceBox>
              <PriceBoxTitle>1인 기준</PriceBoxTitle>
              <Price>{totalPrice / state.memberCnt} 원</Price>
            </PriceBox>
            <MultiplyImgBox>
              <CloseSvg width={16} height={16} />
            </MultiplyImgBox>
            <Count>{state.memberCnt}</Count>
            <TotalPriceBox>
              <TotalPriceTitle>총 금액</TotalPriceTitle>
              <TotalPriceText>{totalPrice} 원</TotalPriceText>
            </TotalPriceBox>
          </>
        ) : (
          <NoMemberCntContainer>
            <View />
            <TotalPriceBox>
              <TotalPriceTitle>총 금액</TotalPriceTitle>
              <TotalPriceText>{totalPrice} 원</TotalPriceText>
            </TotalPriceBox>
          </NoMemberCntContainer>
        )}
      </SmallContainer>
    </TotalContainer>
  );
};

export default TotalPrice;
