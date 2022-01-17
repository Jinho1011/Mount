import React, {useState} from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';
import ItemMuttable from '../../../components/Plan/ItemMuttable';
import TotalPrice from '../../../components/Common/TotalPrice';
import Modal from '../../../components/Modal';
import PlannerButton from '../../../components/Common/ProposalButton';
import FocusAwareStatusBar from '../../../components/StatusBar';

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
  padding: 18px 20px 0 20px;
`;

const CountBox = styled(View)`
  border: 1px solid #eaeaea;
  border-radius: 7px;
  padding: 24px 35px 24px 35px;
`;

const CountBoxTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 14px;
  color: #000;
`;

const Counter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  margin: auto;
`;

const MinusButton = styled.Pressable`
  background: #b4b4b4;
  opacity: 0.6;
  border-radius: 16px;
  width: 24px;
  height: 24px;
  padding: 12px 6px;
  margin-right: 20px;
`;

const Minus = styled.Image`
  margin: auto;
`;

const PlusButton = styled.Pressable`
  background: #373737;
  border-radius: 16px;
  margin-left: 20px;
  padding: 7px;
`;

const Plus = styled.Image`
  margin: auto;
`;

const NumberBox = styled.View`
  padding-left: 45px;
  padding-right: 45px;
  background: #f3f3f3;
  border-radius: 5px;
`;

const Number = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 24px;
`;

const ItemContainerTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 17px;
  padding-top: 26px;
  padding-left: 3px;
`;

const ItemContainer = styled(View)`
  padding: 17px 15px 0px 15px;
`;

const TotalPriceContainer = styled(View)`
  padding-top: 25px;
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

const HighLighter = styled(View)`
  position: absolute;
  background: #e2f955;
  width: 58px;
  height: 10px;
  margin-top: 20px;
  margin-left: -1px;
`;

const TitleBox = styled(View)`
  position: relative;
`;

export default function FoodPlanChangePresenter({state, setState}) {
  console.log(state.items[0].count);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlanner, setSelectedPlanner] = useState('');
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollContainer>
        <CountBox>
          <TitleBox>
            <HighLighter />
            <CountBoxTitle>총 인원 수를 입력해주세요</CountBoxTitle>
          </TitleBox>
          <Counter>
            <MinusButton
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
              <Minus source={require('../../../../assets/plan_minus.png')} />
            </MinusButton>
            <NumberBox>
              <Number>{state?.memberCnt}</Number>
            </NumberBox>
            <PlusButton
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
              <Plus source={require('../../../../assets/plan_plus.png')} />
            </PlusButton>
          </Counter>
        </CountBox>
        <ItemContainerTitle>구성품</ItemContainerTitle>
        <ItemContainer>
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
        </ItemContainer>
        <TotalPriceContainer>
          <TotalPrice state={state} setState={setState} />
        </TotalPriceContainer>
      </ScrollContainer>
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
    </>
  );
}
