import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Wrapper = styled.View`
  padding: 19px 23px;
  background: #ffffff;
`;

const Box = styled.View`
  padding: 12px 20px;
  border: 1px solid #f3f3f3;
  border-radius: 12px;
`;

const Title = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
`;

const PlannerTitle = () => {
  return (
    <Wrapper>
      <Box>
        <Title>옵션명</Title>
      </Box>
    </Wrapper>
  );
};

export default PlannerTitle;
