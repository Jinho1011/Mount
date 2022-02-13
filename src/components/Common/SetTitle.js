import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {TransparentHeader} from '../Header/TransparentHeader';

const SetTitleContainer = styled.View`
  background: white;
`;

const SetTitle = styled.Text`
  color: #000;
  font-size: 18px;
  line-height: 26px;
  font-family: 'NotoSansKR-Bold';

  margin-left: 26px;
  margin-top: 17px;
`;

const SetImage = styled.Image`
  width: 100%;
  height: 254px;
`;

const SetInfo = styled.View`
  flex-direction: row;
  padding-left: 27px;
  padding-right: 20px;
  margin-top: 3px;
`;

const SetLabelContainer = styled.View`
  padding: 2px 4px 1px 4px;
  background-color: #f3f3f3;
  border-radius: 6px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const SetLabel = styled.Text`
  color: #8b8b8b;
  font-size: 8px;
  font-family: 'NotoSansKR-Regular';
  line-height: 12px;
`;

const SetElements = styled.Text`
  color: #777777;
  font-size: 10px;
  font-family: 'NotoSansKR-Regular';
  line-height: 15px;
`;

const ElementsContainer = styled(View)`
  padding-right: 20px;
`;

const TitleContainer = ({image, title, items}) => {
  console.log(image);
  return (
    <SetTitleContainer>
      {image === undefined ? (
        <SetImage source={require('../../../assets/Unprepared_img.webp')} />
      ) : (
        <SetImage source={{uri: image}} />
      )}

      <TransparentHeader style={{position: 'absolute', top: 0, right: 0}} />
      <SetTitle>{title}</SetTitle>
      <SetInfo>
        <SetLabelContainer>
          <SetLabel>세트</SetLabel>
        </SetLabelContainer>
        <ElementsContainer>
          <SetElements>{items}</SetElements>
        </ElementsContainer>
      </SetInfo>
    </SetTitleContainer>
  );
};

export default TitleContainer;
