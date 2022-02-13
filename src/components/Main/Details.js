import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {More_with_typoSvg} from '../../components/assets';

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

const DetailPress = styled.Pressable`
  background: #f3f3f3;
  width: 128px;
  height: 128px;
  margin-right: 10;
  border-radius: 4;
  border: 0.2px solid #b4b4b4;
`;

const DetailReady = styled.View`
  width: 128px;
  height: 128px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: #f3f3f3;
`;

const Detail = styled.Image`
  width: 127px;
  height: 127px;
  border-radius: 5px;
`;

const DetailsContainer = ({title, navigate, items, isLoaded, type}) => {
  const navigation = useNavigation();

  return (
    <DetailsWrapper>
      <DetailsHeader>
        <DetailsTitle>{title}</DetailsTitle>
        {navigate === '' ? (
          <></>
        ) : (
          <DetailMore
            onPress={() => {
              navigation.navigate('HomeTabs', {initialRoute: navigate});
            }}>
            <More_with_typoSvg width={46} height={16} />
          </DetailMore>
        )}
      </DetailsHeader>
      <Details horizontal={true} showsHorizontalScrollIndicator={false}>
        {isLoaded ? (
          items.map(item => {
            return (
              <DetailPress
                key={item.title + item.id}
                onPress={() => {
                  navigation.navigate('Details', {
                    screen: type,
                    params: {id: item.id},
                  });
                }}>
                {item.image === '' || item.image === '1' ? (
                  <Detail
                    source={require('../../../assets/Unprepared_img.webp')}
                  />
                ) : (
                  <Detail source={{uri: item.image}} />
                )}
              </DetailPress>
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
