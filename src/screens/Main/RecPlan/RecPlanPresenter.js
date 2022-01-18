import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';
import Item from '../../../components/Food/Item';
import Counter from '../../../components/Rec/Counter';

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
  padding: 18px 20px 0 20px;
`;

const ItemsContainer = styled.View`
  padding-top: 26px;
`;

const Footer = styled.View`
  padding: 8px 23px;
  background: #ffffff;
  border: 0.3px solid #b4b4b4;
`;

const ChangeCountButton = styled.Pressable`
  padding: 12px 128px;
  background: ${prop => (prop.pressedCnt > 0 ? '#e2f955' : '#f3f3f3')} 
  border-radius: 5px;
`;

const ChangeCountButtonText = styled.Text`
  font-family: 'NotoSansKR-Regular'
  font-size: 16px;
  line-height: 24px;
  margin: auto;
`;

export default function RecPlanPresenter({state, setState}) {
  function isPressed(value) {
    return value.isPressed === true;
  }
  const isPressedArr = state?.items.filter(isPressed);
  const navigation = useNavigation();
  return (
    <>
      <ScrollContainer>
        <Counter state={state} setState={setState} />
        <ItemsContainer>
          {state?.items.map(item => {
            return (
              <Item
                item={item}
                state={state}
                setState={setState}
                key={item.id}
              />
            );
          })}
        </ItemsContainer>
      </ScrollContainer>
      <Footer>
        {state.pressedCnt > 0 ? (
          <ChangeCountButton
            onPress={() => {
              navigation.navigate('RecPlanChange', {isPressedArr});
            }}
            pressedCnt={state.pressedCnt}>
            <ChangeCountButtonText>수량변경</ChangeCountButtonText>
          </ChangeCountButton>
        ) : (
          <ChangeCountButton
            onPress={() => console.log('안눌림')}
            pressedCnt={state.pressedCnt}>
            <ChangeCountButtonText>수량변경</ChangeCountButtonText>
          </ChangeCountButton>
        )}
      </Footer>
    </>
  );
}
