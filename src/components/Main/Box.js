import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, LogBox} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {getFoodById, getRecById} from '../../api/api';

const screenWidth = Dimensions.get('window').width;

const BoxContainer = styled.Pressable`
  width: ${props => {
    if (props.type == 'short')
      return `${parseInt((screenWidth - 40) / 2 - 8)}px`;
    else return `${parseInt(screenWidth - 40)}px`;
  }};
  margin-bottom: 20px;
`;

const BoxImage = styled.Image`
  /* width: ${props => {
    if (props.type == 'long') return '100%';
    else return `${parseInt((screenWidth - 40) / 2 - 8)}}px`;
  }}; */
  height: 150px;
  background-color: #f3f3f3;
  border-radius: 4px;
`;

const BoxInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 6px;
  padding-left: 2px;
  padding-bottom: 4px;
`;

const BoxLeft = styled.View``;

const BoxTitle = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Bold';
  line-height: 20px;
`;

const BoxSubtitle = styled.Text`
  color: #8b8b8b8b;
  font-size: 10px;
  font-family: 'NotoSansKR-Normal';
  line-height: 15px;
`;

const BoxRight = styled.View`
  padding-top: 2px;
`;

const BoxHeart = styled.Image``;

const BoxHeartCount = styled.Text`
  color: #8b8b8b8b;
  font-size: 10px;
  font-family: 'NotoSansKR-Normal';
  line-height: 15px;
`;

const Box = ({item, type}) => {
  const [state, setState] = useState({});

  useEffect(() => {
    const init = async () => {
      const properyName = type === 'RecSet' ? 'recs_ids' : 'foods_ids';
      const ids = item[properyName];
      const singles = ids.map(async id => {
        if (type === 'RecSet') {
          return await getRecById(id);
        } else {
          return await getFoodById(id);
        }
      });
      console.log('🚀 ~ file: Box.js ~ line 80 ~ init ~ singles', singles);
    };
    init();
  }, []);

  const navigation = useNavigation();

  return (
    <BoxContainer
      type={item.displayType}
      onPress={() => {
        navigation.navigate('Details', {
          screen: type,
          params: {id: item.id},
        });
      }}>
      <BoxImage source={{uri: item.image}} type={item.displayType} />
      <BoxInfoContainer>
        <BoxLeft>
          <BoxTitle>{item.title}</BoxTitle>
          <BoxSubtitle>{item.subtitle}</BoxSubtitle>
        </BoxLeft>
        <BoxRight>
          {/* <BoxHeart></BoxHeart>
          <BoxHeartCount>{item.like}</BoxHeartCount> */}
        </BoxRight>
      </BoxInfoContainer>
    </BoxContainer>
  );
};

export default Box;
