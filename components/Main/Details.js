import React, {useEffect} from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

const DetailsWrapper = styled.View`
  margin-top: 20px;
  padding-left: 20px;
`;

const DetailsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  margin-bottom: 15px;
`;

const DetailsTitle = styled.Text`
  color: #000000;
  font-size: 16px;
  font-family: 'NotoSansKR-Bold';
  line-height: 24px;
`;

const DetailMore = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DetailMoreText = styled.Text`
  color: #8b8b8b;
  font-size: 12px;
  font-family: 'NotoSansKR-Regular';
  line-height: 16px;
  margin-right: 4px;
`;

const Details = styled.ScrollView``;

const DetailReady = styled.View`
  width: 128px;
  height: 128px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: #f3f3f3;
`;

const Detail = styled.Image`
  width: 128px;
  height: 128px;
  margin-right: 10px;
  border-radius: 4px;
`;

const DetailsContainer = ({title, navigate, items, isLoaded}) => {
  const navigation = useNavigation();

  return (
    <DetailsWrapper>
      <DetailsHeader>
        <DetailsTitle>{title}</DetailsTitle>
        {navigate == '' ? (
          <></>
        ) : (
          <DetailMore
            onPress={() => {
              navigation.navigate('HomeTabs', {initialRoute: navigate});
            }}>
            <DetailMoreText>더보기</DetailMoreText>
            <Icon name="arrow-right" size={12} color="#8b8b8b"></Icon>
          </DetailMore>
        )}
      </DetailsHeader>
      <Details horizontal={true} showsHorizontalScrollIndicator={false}>
        {isLoaded ? (
          items.map(item => {
            return (
              <Detail source={{uri: item.img}} key={item.type + item.id} />
            );
          })
        ) : (
          <>
            <DetailReady />
            <DetailReady />
            <DetailReady />
            <DetailReady />
            <DetailReady />
            <DetailReady />
          </>
        )}
      </Details>
    </DetailsWrapper>
  );
};

export default DetailsContainer;
