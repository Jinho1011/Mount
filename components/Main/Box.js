import React from 'react';
import styled from 'styled-components';

const SmallBoxContainer = styled.View`
  width: ${props => parseInt((props.screenWidth - 40) / 2 - 8)}px;
  margin-bottom: 20px;
`;

const BoxContainer = styled.View`
  margin-bottom: 20px;
`;

const BoxImage = styled.View`
  height: 150px;
  background-color: #f3f3f3;
  border-radius: 4px;
`;

const BoxInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 6px;
  padding-left: 2px;
  padding-bottom: 4px;
`;

const BoxLeft = styled.View``;

const BoxTitle = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Bold';
  line-height: 20px;
`;

const BoxSubtitle = styled.Text`
  color: #8b8b8b8b;
  font-size: 10px;
  font-family: 'NotoSansKR-Normal';
  line-height: 15px;
`;

const BoxRight = styled.View`
  padding-top: 2px;
`;

const BoxHeart = styled.Image``;

const BoxHeartCount = styled.Text`
  color: #8b8b8b8b;
  font-size: 10px;
  font-family: 'NotoSansKR-Normal';
  line-height: 15px;
`;

function LargeBox() {
  return (
    <BoxContainer>
      <BoxImage></BoxImage>
      <BoxInfoContainer>
        <BoxLeft>
          <BoxTitle>제목몇글자들어가나요여기</BoxTitle>
          <BoxSubtitle>세트설명어쩌구저쩌구어쩌..</BoxSubtitle>
        </BoxLeft>
        <BoxRight>
          <BoxHeart></BoxHeart>
          <BoxHeartCount>23</BoxHeartCount>
        </BoxRight>
      </BoxInfoContainer>
    </BoxContainer>
  );
}

const SmallBox = ({screenWidth}) => {
  return (
    <SmallBoxContainer screenWidth={screenWidth}>
      <BoxImage></BoxImage>
      <BoxInfoContainer>
        <BoxLeft>
          <BoxTitle>제목몇글자들어가</BoxTitle>
          <BoxSubtitle>세트설명어쩌구저쩌구어쩌..</BoxSubtitle>
        </BoxLeft>
        <BoxRight>
          <BoxHeart></BoxHeart>
          <BoxHeartCount>23</BoxHeartCount>
        </BoxRight>
      </BoxInfoContainer>
    </SmallBoxContainer>
  );
};

export {LargeBox, SmallBox};
