import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Container = styled.View`
  background: ${props =>
    props.isPress ? 'rgba(226, 249, 85, 0.2)' : '#ffffff'} 
  border: ${props =>
    props.isPress ? '1px solid #e2f955' : '1px solid #f3f3f3'} 
  border-radius: 5px;
  padding: 8px 13px 8px 7px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 9px;
`;

const CheckBox = styled.Pressable`
  border: 1px solid #b4b4b4;
  background: ${props => (props.isPress ? '#373737' : '#ffffff')}
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

const DetailNavBox = styled.View`
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

export default function Item({item, isPress, setIsPress}) {
  // console.log(isPress);
  return (
    <Container isPress={isPress}>
      <CheckBox
        onPress={() => {
          setIsPress(!isPress);
        }}
        isPress={isPress}>
        {isPress ? (
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
        <Image source={{uri: item.img}} />
      </ImageBox>
      <ContentBox>
        <NameText>{item.title}</NameText>
        <DescriptionText>{item.subtitle}</DescriptionText>
        <DetailNavBox>
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
        <HeartCount>13</HeartCount>
      </HeartBox>
    </Container>
  );
}
