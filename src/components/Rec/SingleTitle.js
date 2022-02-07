import React from 'react';
import styled from 'styled-components';
import {TransparentHeader} from '../Header/TransparentHeader';

const SingleTitleContainer = styled.View`
  background: white;
`;

const SingleImage = styled.Image`
  width: 100%;
  height: 254px;
`;

const Name = styled.Text`
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

const SingleTitle = ({image, title, one_line_description}) => {
  return (
    <SingleTitleContainer>
      {image !== '' ? (
        <SingleImage source={{uri: image}} />
      ) : (
        <SingleImage source={require('../../../assets/Unprepared_img.webp')} />
      )}
      <TransparentHeader style={{position: 'absolute', top: 0, right: 0}} />
      <Name>{title}</Name>
      <SingleInfo>{one_line_description}</SingleInfo>
    </SingleTitleContainer>
  );
};

export default SingleTitle;
