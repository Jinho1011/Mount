import {useNavigation} from '@react-navigation/native';
import {toInteger} from 'lodash';
import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  background: ${props =>
    props.isPressed ? 'rgba(226, 249, 85, 0.2)' : '#ffffff'};
  border: ${props =>
    props.isPressed ? '1px solid #e2f955' : '1px solid #f3f3f3'};
  border-radius: 5px;
  padding: 8px 13px 8px 7px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 9px;
`;

const CheckBox = styled.Pressable`
  border: 1px solid #b4b4b4;
  background: ${props => (props.isPressed ? '#373737' : '#ffffff')};
  border-radius: 5px;
  width: 24px;
  height: 24px;
`;

const DefaultCheckImage = styled.Image`
  margin: auto;
`;

const CheckedCheckImage = styled.Image`
  margin: auto;
`;

const ImageBox = styled.View`
  padding-left: 14px;
`;

const Image = styled.Image`
  border-radius: 4px;
  width: 89px;
  height: 89px;
`;

const ContentBox = styled.View`
  padding-left: 10px;
  padding-top: 3px;
`;

const NameText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 14px;
  line-height: 20px;
`;

const DescriptionText = styled.Text`
  padding-top: 1px;
  font-family: 'NotoSansKR-Regular';
  font-size: 10px;
  line-height: 15px;
  color: #8b8b8b;
`;

const DetailNavBox = styled(Pressable)`
  background: #f3f3f3;
  border-radius: 5px;
  margin-top: 26px;
  padding: 4px 10px 4px 29px;
  flex-direction: row;
`;

const DetailNavText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 12px;
  line-height: 16px;
`;

const DetailNavImageBox = styled.View`
  padding-left: 23px;
`;

const DetailNavImage = styled.Image`
  margin: auto;
`;

const HeartBox = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding-left: 19px;
  padding-bottom: 68px;
`;

const HeartImageBox = styled.Pressable``;

const HeartImage = styled.Image`
  margin: auto;
`;

const HeartCount = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 10px;
  line-height: 15px;
  color: #8b8b8b;
  padding-left: 2px;
`;

export default function Item({item, state, setState}) {
  const navigation = useNavigation();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Container isPressed={item.isPressed}>
      <CheckBox
        onPress={() => {
          setState(prev => {
            const modifiedItems = prev.items.map(e => {
              if (e.id === item.id) {
                return {
                  ...e,
                  isPressed: !item.isPressed,
                };
              } else {
                return e;
              }
            });
            return {
              ...prev,
              items: modifiedItems,
              pressedCnt: item.isPressed
                ? prev.pressedCnt - 1
                : prev.pressedCnt + 1,
            };
          });
        }}
        isPressed={item.isPressed}>
        {item.isPressed ? (
          <CheckedCheckImage
            source={require('../../../assets/plan_checked.png')}
          />
        ) : (
          <DefaultCheckImage
            source={require('../../../assets/plan_check.png')}
          />
        )}
      </CheckBox>
      <ImageBox>
        <Image source={{uri: item.image}} />
      </ImageBox>
      <ContentBox>
        <NameText>{item.title}</NameText>
        <DescriptionText>{item.sub_title}</DescriptionText>
        <DetailNavBox
          key={item.type + item.id}
          onPress={() => {
            navigation.navigate('Details', {
              screen: capitalizeFirstLetter(item.type),
              params: {id: item.id},
            });
          }}
          state={state}
          setState={setState}>
          <DetailNavText>상세보기</DetailNavText>
          <DetailNavImageBox>
            <DetailNavImage source={require('../../../assets/plan_more.png')} />
          </DetailNavImageBox>
        </DetailNavBox>
      </ContentBox>
      <HeartBox>
        <HeartImageBox>
          <HeartImage source={require('../../../assets/plan_heart.png')} />
        </HeartImageBox>
        <HeartCount>{toInteger(Math.random() * 60)}</HeartCount>
      </HeartBox>
    </Container>
  );
}
