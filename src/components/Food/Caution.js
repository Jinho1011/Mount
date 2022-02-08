import React from 'react';
import styled from 'styled-components';

/* 주의사항 */
const CautionContainer = styled.View`
  margin-top: -10px;
  padding-top: 24px;
  padding-bottom: 92px;
  background: #ffffff;
`;

const CautionTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #9e9e9e;
`;

const CautionDetailContainer = styled.View`
  margin-top: 10px;
  padding: 14px 12px 12px 12px;

  background: #f3f3f3;
`;

const CautionDetail = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 10px;
  line-height: 15px;
  color: #8b8b8b;
`;

const Caution = ({state, setState, caution}) => {
  return (
    <CautionContainer>
      <CautionTitle>주의 사항</CautionTitle>
      <CautionDetailContainer>
        <CautionDetail>
          mount에 나와있는 식품 가격은 '쿠팡' 최상위 랭킹 기준입니다. 예상
          가격은 실제와 다를 수 있습니다.
        </CautionDetail>
      </CautionDetailContainer>
    </CautionContainer>
  );
};

export default Caution;
