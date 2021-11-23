import React from 'react';
import styled from 'styled-components';

const SingleTitleContainer = styled.View`
  background: white;
`;

const SingleImage = styled.Image`
  width: 100%;
  height: 254px;
`;

const SingleTitle = styled.Text`
  color: #000;
  font-size: 18px;
  line-height: 26px;
  font-family: 'NotoSansKR-Bold';

  margin-left: 26px;
  margin-top: 17px;
`;

const SingleInfo = styled.Text`
  color: #777777;
  font-size: 10px;
  font-family: 'NotoSansKR-Regular';
  line-height: 12px;

  margin-left: 26px;
  margin-top: 4px;
`;

const TitleContainer = ({title, img, info}) => {
    return (
        <SingleTitleContainer>
            <SingleImage source={{uri: img}} />
            <SingleTitle>{title}</SingleTitle>
            <SingleInfo>{info}</SingleInfo>
        </SingleTitleContainer>
    );
};

export default TitleContainer;
