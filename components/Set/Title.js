import React from 'react';
import styled from 'styled-components';

const DetailTitleContainer = styled.View`
  margin-bottom: 26px;
`;

const DetailTitle = styled.Text`
  color: #000;
  font-size: 18px;
  line-height: 26px;
  font-family: 'NotoSansKR-Bold';
  margin-bottom: 4px;
`;

const DetailSetInfo = styled.View`
  flex-direction: row;
`;

const DetailSetLabelContainer = styled.View`
  padding: 2px 4px 1px 4px;
  background-color: #f3f3f3;
  border-radius: 6px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const DetailSetLabel = styled.Text`
  color: #8b8b8b;
  font-size: 8px;
  font-family: 'NotoSansKR-Regular';
  line-height: 12px;
`;

const DetailSetElements = styled.Text`
  color: #777777;
  font-size: 10px;
  font-family: 'NotoSansKR-Regular';
  line-height: 15px;
`;

const TitleContainer = ({title, components}) => {
  return (
    <DetailTitleContainer>
      <DetailTitle>{title}</DetailTitle>
      <DetailSetInfo>
        <DetailSetLabelContainer>
          <DetailSetLabel>세트</DetailSetLabel>
        </DetailSetLabelContainer>
        <DetailSetElements>{components}</DetailSetElements>
      </DetailSetInfo>
    </DetailTitleContainer>
  );
};

export default TitleContainer;
