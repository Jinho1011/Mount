import React, {useState, useEffect} from 'react';
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

const Item = ({item, category}) => {
  const navigation = useNavigation();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    console.log('🚀 ~ file: Item.js ~ line 69 ~ Item ~ item', item);
    if (category === '레크') {
      setPrice(item?.total_price === null ? 0 : item.total_price);
    } else {
      setPrice(item?.price);
    }
  }, []);

  return (
    <Container>
      <ContainerLeft>
        {item.image === '' ? (
          <ItemImg source={require('../../../assets/Unprepared_img.webp')} />
        ) : (
          <ItemImg source={{uri: item.image}} />
        )}
        <ItemTitle>
          {item?.title.length > 5
            ? item.title.slice(0, 5).concat('...')
            : item.title}
        </ItemTitle>
      </ContainerLeft>
      <ContainerRight>
        <ItemCount>{item?.count}</ItemCount>
        <ItemPriceContainer>
          {category === '레크' ? (
            <ItemDesc>{item?.recommand_persons}명</ItemDesc>
          ) : (
            <ItemDesc>{item?.description}</ItemDesc>
          )}
          {category === '레크' ? (
            <ItemPrice>{item?.total_price || parseInt(0, 2)}원</ItemPrice>
          ) : (
            <ItemPrice>{item?.price}원</ItemPrice>
          )}
        </ItemPriceContainer>
      </ContainerRight>
    </Container>
  );
};

export default Item;
