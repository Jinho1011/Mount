import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FocusAwareStatusBar from '../../../components/StatusBar';

import Box from '../../../components/Main/Box';

const NoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NoImage = styled.Image`
  width: 230px;
  height: 310px;
`;

const FavContainer = styled.ScrollView`
  flex: 1;
  padding: 24px 23px 95px 23px;
  background-color: #ffffff;
`;

const SmallBoxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default ({state}) => {
  const navigation = useNavigation();

  return (
    <FavContainer>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {state.items.length > 0 ? (
        state.items
          .reduce(function (result, value, index, array) {
            console.log(
              '🚀 ~ file: FavoritePresenter.js ~ line 40 ~ array',
              array,
            );
            if (index % 2 === 0) {
              result.push(array.slice(index, index + 2));
            }
            return result;
          }, [])
          .map(result => {
            if (result.length === 2) {
              console.log(
                '🚀 ~ file: FavoritePresenter.js ~ line 51 ~ result',
                result,
              );
              return (
                <SmallBoxContainer key={result[0].image}>
                  <Box item={result[0]} type={result[0].type} />
                  <Box item={result[1]} type={result[1].type} />
                </SmallBoxContainer>
              );
            } else {
              return (
                <SmallBoxContainer key={result[0].image}>
                  <Box item={result[0]} type={result[0].type} />
                  <></>
                </SmallBoxContainer>
              );
            }
          })
      ) : (
        <NoContainer>
          <NoImage
            source={require('../../../../assets/error/like_error_img.webp')}
          />
        </NoContainer>
      )}
    </FavContainer>
  );
};

const d2 = [
  {
    created_at: '2022-01-31T05:20:34.151120Z',
    food_ids: [
      '12',
      '27',
      '14',
      '30',
      '17',
      '29',
      '77',
      '46',
      '47',
      '81',
      '48',
      '76',
      '62',
      '6',
    ],
    id: 1,
    image:
      'https://mount-dev.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%8C%E1%85%AE%2B%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%85%E1%85%AD.webp',
    title: '안주+음료',
    type: 'FoodSet',
    updated_at: '2022-01-31T05:20:34.151120Z',
  },
  {
    created_at: '2022-01-31T05:20:34.151120Z',
    food_ids: ['64', '41', '11', '10', '42'],
    id: 3,
    image:
      'https://mount-dev.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A1%E1%84%87%E1%85%A6%E1%84%8F%E1%85%B2%E1%84%86%E1%85%A1%E1%86%AB.webp',
    title: '바베큐',
    type: 'FoodSet',
    updated_at: '2022-01-31T05:20:34.151120Z',
  },
];
