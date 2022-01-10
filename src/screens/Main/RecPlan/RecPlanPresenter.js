import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Counter from '../../../components/Rec/Counter';

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
  padding: 18px 20px 0 20px;
`;

const FoodsContainer = styled.View`
  padding-top: 26px;
`;

const Footer = styled.View`
  padding: 8px 23px;
  background: #ffffff;
  border: 0.3px solid #b4b4b4;
`;

const ChangeCountButton = styled.Pressable`
  padding: 12px 128px;
  background: #e2f955;
  border-radius: 5px;
`;

const ChangeCountButtonText = styled.Text`
  font-family: 'NotoSansKR-Regular'
  font-size: 16px;
  line-height: 24px;
  margin: auto;
`;

export default function RecPlanPresenter({state, setState}) {
  return (
    <>
      <ScrollContainer>
        <Counter />
        <FoodsContainer />
      </ScrollContainer>
      <Footer>
        <ChangeCountButton onPress={() => console.log('press')}>
          <ChangeCountButtonText>수량변경</ChangeCountButtonText>
        </ChangeCountButton>
      </Footer>
    </>
  );
}
