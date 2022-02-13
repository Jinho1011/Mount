import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
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

const TotalPrice = ({state, setState}) => {
  console.log('🚀 ~ file: TotalPrice.js ~ line 84 ~ TotalPrice ~ state', state);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let pricePropertyName, personCountPropertyName;
    if (state.hasOwnProperty('recSet')) {
      pricePropertyName = 'total_price';
      personCountPropertyName = 'teamCnt';
    } else {
      pricePropertyName = 'price';
      personCountPropertyName = 'memberCnt';
    }

    let totalPrice = 0;
    for (let i = 0; i < state?.items?.length; i++) {
      const itemPrice =
        state?.items[i]?.count * state?.items[i][pricePropertyName];
      totalPrice += itemPrice;
    }
    setPrice(parseInt(totalPrice / state[personCountPropertyName]));
    setTotal(totalPrice * state[personCountPropertyName]);
  }, []);

  return (
    <TotalContainer>
      <StyledTitle>총 예상금액</StyledTitle>
      <SmallContainer>
        <PriceBox>
          <PriceBoxTitle>1인 기준</PriceBoxTitle>
          <Price>{price} 원</Price>
        </PriceBox>
        <MultiplyImgBox>
          <CloseSvg width={16} height={16} />
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

export default TotalPrice;

const recSet = {
  isLoaded: true,
  items: [
    {
      count: 1,
      description: null,
      guide_images: null,
      id: 34,
      image: '',
      one_line_description: null,
      person_item: '고깔',
      person_price: null,
      recommand_persons: '4~6',
      set_name: [Array],
      title: '고깔게임',
      total_item: '고깔5',
      total_price: null,
    },
    {
      count: 1,
      description: null,
      guide_images: null,
      id: 35,
      image: '',
      one_line_description: null,
      person_item: '안대(좀비안경)',
      person_price: null,
      recommand_persons: '4~6',
      set_name: [Array],
      title: '좀비게임',
      total_item: '안대(좀비안경)5',
      total_price: null,
    },
    {
      count: 1,
      description: null,
      guide_images: null,
      id: 37,
      image: '',
      one_line_description: null,
      person_item: null,
      person_price: null,
      recommand_persons: '4~10',
      set_name: [Array],
      title: '속담 이어말하기',
      total_item: null,
      total_price: null,
    },
    {
      count: 1,
      description: null,
      guide_images: null,
      id: 38,
      image: '',
      one_line_description: null,
      person_item: null,
      person_price: null,
      recommand_persons: '4~10',
      set_name: [Array],
      title: '네글자퀴즈',
      total_item: null,
      total_price: null,
    },
  ],
  memberCnt: 1,
  recSet: {
    created_at: '2022-01-25T14:10:19.693767Z',
    id: 2,
    image: '1',
    recs_ids: ['34', '35', '37', '38'],
    title: '신서유기 게임',
    updated_at: '2022-01-25T14:10:19.693767Z',
  },
  teamCnt: 1,
};
