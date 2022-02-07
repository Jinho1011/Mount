import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, LogBox} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {getItemById} from '../../api/api';

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

const BoxSubtitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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

const BoxSetContainer = styled.View`
  background-color: #f3f3f3;
  border-radius: 5px;
  margin-right: 4px;
`;

const BoxSet = styled.Text`
  color: #8b8b8b8b;
  font-size: 8px;
  font-family: 'NotoSansKR-Normal';
  line-height: 12px;
  padding: 2px 4px 1px 4px;
`;

const BoxHeart = styled.Image``;

const BoxHeartCount = styled.Text`
  color: #8b8b8b8b;
  font-size: 10px;
  font-family: 'NotoSansKR-Normal';
  line-height: 15px;
`;

const Box = ({item, type}) => {
  const [components, setComponents] = useState([]);
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    const init = async () => {
      const properyName = type === 'RecSet' ? 'recs_ids' : 'food_ids';
      const category = type === 'RecSet' ? 'recs' : 'foods';
      const ids = item[properyName];
      ids.map(async id => {
        const data = await getItemById(category, id);
        const title = data.title;
        setComponents(prev => [...prev, title]);
      });
    };
    init();
  }, []);

  useEffect(() => {
    const text = components.join(', ');
    const max = item.displayType === 'short' ? 14 : 32;
    if (text.length > max) {
      setSubtitle(text.slice(0, max) + ' ...');
    } else {
      setSubtitle(text);
    }
  }, [components]);

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
          <BoxSubtitleContainer>
            <BoxSetContainer>
              <BoxSet>세트</BoxSet>
            </BoxSetContainer>
            <BoxSubtitle>{subtitle}</BoxSubtitle>
          </BoxSubtitleContainer>
        </BoxLeft>
        <BoxRight>
          {/* <BoxHeart></BoxHeart>
          <BoxHeartCount>1</BoxHeartCount> */}
        </BoxRight>
      </BoxInfoContainer>
    </BoxContainer>
  );
};

export default Box;
