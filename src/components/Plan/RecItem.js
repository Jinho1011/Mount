import React from 'react';
import {View, Text, Dimensions, LogBox} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const Container = styled.View`
  height: 32px;
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ContainerRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ItemImg = styled.Image`
  width: 32px;
  height: 32px;
  background-color: #c4c4c4;
  border: 0.2px solid #b4b4b4;
`;

const ItemTitle = styled.Text`
  padding-left: 10px;
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const ItemCount = styled.Text`
  width: 39px;
  height: 25px;
  background-color: #f3f3f3;
  border-radius: 12.5px;
  text-align: center;
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 22px;
`;

const ItemPriceContainer = styled.View`
  align-items: flex-end;
  width: 80px;
`;

const ItemPrice = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Bold';
  line-height: 20px;
`;

const ItemDesc = styled.Text`
  color: #828282;
  font-size: 10px;
  font-family: 'NotoSansKR-Regular';
  line-height: 15px;
`;

const RecItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerLeft>
        <ItemImg source={require('../../../assets/Unprepared_img.webp')} />
        <ItemTitle>
          {item?.title.length > 5
            ? item.title.slice(0, 5).concat('...')
            : item.title}
        </ItemTitle>
      </ContainerLeft>
      <ContainerRight>
        <ItemCount>{item?.count}</ItemCount>
        <ItemPriceContainer>
          <ItemDesc>{item?.description}</ItemDesc>
          {item?.total_price === null ? (
            <ItemPrice>{parseInt(0)} 원</ItemPrice>
          ) : (
            <ItemPrice>{item?.total_price}원</ItemPrice>
          )}
        </ItemPriceContainer>
      </ContainerRight>
    </Container>
  );
};

export default RecItem;
