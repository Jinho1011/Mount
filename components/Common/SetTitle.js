import React from 'react';
import styled from 'styled-components';

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
  margin-left: 27px;
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

const TitleContainer = ({title, components, img}) => {
  return (
    <SetTitleContainer>
      <SetImage source={{uri: img}} />
      <SetTitle>{title}</SetTitle>
      <SetInfo>
        <SetLabelContainer>
          <SetLabel>세트</SetLabel>
        </SetLabelContainer>
        <SetElements>{components}</SetElements>
      </SetInfo>
    </SetTitleContainer>
  );
};

export default TitleContainer;
