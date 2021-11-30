import React from "react";
import styled from "styled-components";

/* 주의사항 */
const CautionContainer = styled.View`
  margin-top: -10px;
  padding: 24px 20px 92px 20px;
  background: #ffffff;
`;

const CautionTitle = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #9e9e9e;
`;

const CautionDetailContainer = styled.View`
  margin-top: 10px;
  padding: 14px 12px 12px 12px;

  background: #f3f3f3;
`;

const CautionDetail = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

const Caution = () => {
    return (
        <CautionContainer>
          <CautionTitle>주의 사항</CautionTitle>
          <CautionDetailContainer>
            <CautionDetail>
              미인을 옷을 불어 산야에 사라지지 굳세게 얼마나 열락의 교향악이다.
              그러므로 얼음과 지혜는 같은 내는 바이며, 그들에게 수 끓는다.
              위하여, 노년에게서 얼마나 쓸쓸한 황금시대의 기쁘며, 같이,
              아름다우냐?{'\n'}
              {'\n'}
              않는 피어나는 이것을 인간은 인생에 청춘을 우리 못할 무엇을 있다.
              목숨이 있는 같이, 그러므로 것이다. 장식하는 오직 그들에게
              하였으며, 품에 인생{'\n'}
              {'\n'}
              미인을 옷을 불어 산야에 사라지지 굳세게 얼마나 열락의 교향악이다.
              그러므로 얼음과 지혜는 같은 내는 바이며, 그들에게 수 끓는다.
              위하여, 노년에게서 얼마나 쓸쓸한 황금시대의 기쁘며, 같이,
              아름다우냐?
            </CautionDetail>
          </CautionDetailContainer>
        </CautionContainer>
    )
}

export default Caution;
