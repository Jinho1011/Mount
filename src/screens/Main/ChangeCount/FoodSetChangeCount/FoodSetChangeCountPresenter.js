import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Image, Dimensions} from 'react-native';
import {HeaderTitle} from '../../../../components/Header/Header';
import styled from 'styled-components';
import Item from '../../../../components/Common/Item';
import ItemMuttable from '../../../../components/Common/ItemMuttable';
import foodSet from '../../../../data/detail/foodSet';
import TotalPrice from '../../../../components/Common/TotalPrice';
import PlannerButton from '../../../../components/Common/ProposalButton';
import {ScrollView} from 'react-native-gesture-handler';
import FocusAwareStatusBar from '../../../../components/StatusBar';
import Modal from '../../../../components/Modal';

const PageWrap = styled.View`
  flex: 1;
`;

const ModalWrap = styled.Pressable`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(139, 139, 139, 0.3);
`;

const StyledScrollView = styled(ScrollView)`
  padding: 20px 20px 4px 20px;
  background: #ffffff;
`;

const ContentContainer = styled.View``;

const SetContainer = styled.View`
  border: 1px solid #eaeaea;
  border-radius: 12px;
  height: 144px;
  padding: 21px 22px 21px 22px;
`;

const SetTitleContainer = styled.View`
  flex-direction: row;
`;

const SetImage = styled.Image`
  width: 54px;
  height: 54px;
`;

const SetTitle = styled.View`
  margin-left: 12px;
`;

const SetName = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  line-height: 26px;
  color: #000000;
`;

const SetItem = styled.Text`
  font-family: 'NotoSansKR-Normal';
  font-size: 10px;
  line-height: 15px;
  color: #777777;
  margin-top: 3px;
`;

const CounterContainer = styled.View`
  flex-direction: row;
  margin-top: 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MinusPressable = styled(Pressable)``;

const PlusPressable = styled(Pressable)``;

const CounterNumberBox = styled.View`
  background: #f3f3f3;
  border-radius: 5px;
  padding: 0px 45px 0px 45px;
  margin-left: 18px;
  margin-right: 18px;
`;

const CounterNumber = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 23px;
  color: #000000;
`;

const ListTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  margin-top: 26px;
`;

const ListContainer = styled.View`
  padding-top: 19px;
  padding-left: 15px;
  padding-right: 15px;
  background: #ffffff;
`;

const BorderLine = styled.View`
  border: 0.35px solid #eaeaea;

  margin-top: 14px;
`;

const TotalPriceContainer = styled.View`
  padding-top: 10px;
`;

const FoodSetChangeCountPresenter = ({state, setState}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlanner, setSelectedPlanner] = useState('');

  return (
    <PageWrap>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <StyledScrollView>
        <ContentContainer>
          <SetContainer>
            <SetTitleContainer>
              <SetImage
                source={require('../../../../../assets/food_detail_sample.png')}
              />
              <SetTitle>
                <SetName>{state?.foodSet.title}</SetName>
                <SetItem>
                  {state?.items?.map(item => item.name).join(', ')}
                </SetItem>
              </SetTitle>
            </SetTitleContainer>
            <CounterContainer>
              <MinusPressable
                onPress={() => {
                  let memCnt = state.memberCnt;
                  let items = state.items.map(item => {
                    item.count = Math.max(1, memCnt - 1);
                    return item;
                  });
                  setState(prev => ({
                    ...prev,
                    memberCnt: Math.max(1, memCnt - 1),
                    items,
                  }));
                }}>
                <Image
                  source={require('../../../../../assets/minus_dis.png')}
                />
              </MinusPressable>
              <CounterNumberBox>
                <CounterNumber>{state?.memberCnt}</CounterNumber>
              </CounterNumberBox>
              <PlusPressable
                onPress={() => {
                  let memCnt = state.memberCnt;
                  let items = state.items.map(item => {
                    item.count = Math.max(1, memCnt + 1);
                    return item;
                  });
                  setState(prev => ({
                    ...prev,
                    memberCnt: Math.max(1, memCnt + 1),
                    items,
                  }));
                }}>
                <Image source={require('../../../../../assets/plus_.png')} />
              </PlusPressable>
            </CounterContainer>
          </SetContainer>
          <ListTitle>구성품</ListTitle>
          <ListContainer>
            {state?.items?.map(item => {
              return (
                <ItemMuttable
                  state={state}
                  setState={setState}
                  item={item}
                  key={item.id}
                />
              );
            })}
          </ListContainer>
          <TotalPriceContainer>
            <TotalPrice state={state} setState={setState} />
          </TotalPriceContainer>
        </ContentContainer>
        <BorderLine />
      </StyledScrollView>
      {isClicked ? (
        <>
          <ModalWrap
            isClicked={isClicked}
            onPress={() => {
              setIsClicked(false);
              setSelectedPlanner('');
            }}
          />
          <Modal
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            selectedPlanner={selectedPlanner}
            setSelectedPlanner={setSelectedPlanner}
          />
        </>
      ) : (
        <></>
      )}
      <PlannerButton
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        selectedPlanner={selectedPlanner}
        setSelectedPlanner={setSelectedPlanner}
      />
    </PageWrap>
  );
};

// isClicked == true && selectedPlanner == ''
// => 기획서 버튼 비활성화

// isClicked == true && selectedPlanner == '최강산디MT'
// => 기획서 버튼 활성화 + 버튼 클릭 시 planer로 navigate

// isClicked == false
// => do nothing

export default FoodSetChangeCountPresenter;
