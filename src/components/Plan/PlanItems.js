import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import Item from './Item';

const Container = styled.View`
  padding-top: 24px;
  padding-bottom: 34px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-bottom: 18px;
`;

const Title = styled.Text`
  color: #000000;
  font-size: 18px;
  font-family: 'NotoSansKR-Bold';
  line-height: 26px;
  padding-right: 17px;
`;

const Subtitle = styled.Text`
  color: #8b8b8b8b;
  font-size: 12px;
  font-family: 'NotoSansKR-Bold';
  line-height: 16px;
`;

const ItemContainer = styled.View`
  padding-left: 35px;
  padding-right: 35px;
`;

const ItemDivider = styled.View`
  margin-top: 14px;
  margin-bottom: 14px;
  height: 0.35px;
  background-color: #f3f3f3;
`;

const ItemPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px 0 35px;
`;

const ItemPriceLabel = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Bold';
  line-height: 20px;
`;

const ItemPrice = styled.Text`
  color: #000000;
  font-size: 16px;
  font-family: 'NotoSansKR-Bold';
  line-height: 24px;
`;

const EmptyContainer = styled.View`
  padding-top: 25px;
  padding-bottom: 44px;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  color: #b4b4b4;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const PlanItemsContainer = ({category, items}) => {
  const type = category === '레크' ? 'rec' : 'food';
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    if (category === '레크') {
      items[type]?.map(item => (price += item.total_price * item.count));
    } else {
      items[type]?.map(item => (price += item.price * item.count));
    }

    setTotalPrice(price);
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <Container>
      <TitleContainer>
        <Title>{category}</Title>
        <Subtitle>구성품</Subtitle>
      </TitleContainer>
      <ItemContainer>
        {items[type].length > 0 ? (
          items[type]?.map((item, i, arr) => {
            if (i + 1 === arr.length) {
              return <Item item={item} category={category} key={item.id} />;
            } else {
              return (
                <View key={item.id}>
                  <Item item={item} category={category} />
                  <ItemDivider />
                </View>
              );
            }
          })
        ) : (
          <EmptyContainer>
            <EmptyText>구성품이 없습니다.</EmptyText>
          </EmptyContainer>
        )}
      </ItemContainer>
      <ItemPriceContainer>
        <ItemPriceLabel>{category} 합계금액</ItemPriceLabel>
        <ItemPrice>{numberWithCommas(totalPrice)}원</ItemPrice>
      </ItemPriceContainer>
    </Container>
  );
};

export default PlanItemsContainer;
