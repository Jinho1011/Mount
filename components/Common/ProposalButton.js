import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

/* bottom button container */
const BottomConatiner = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background: #ffffff;
  border: 0.3px solid #b4b4b4;
  padding: 8px 23px;
`;

const ChangeCountButton = styled.TouchableOpacity`
  flex: 1;
  padding: 12px 135px;
  background: #e2f955;
  align-content: center;
  justify-content: center;
  border-radius: 5px;
`;

const ChangeCountText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

const ProposalButton = () => {
  return (
    <BottomConatiner>
      <ChangeCountButton>
        <ChangeCountText>기획서</ChangeCountText>
      </ChangeCountButton>
    </BottomConatiner>
  );
};

export default ProposalButton;
