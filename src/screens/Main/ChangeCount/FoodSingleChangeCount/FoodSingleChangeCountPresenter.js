import React, {useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';
import Modal from '../../../../components/Modal';
import PlannerButton from '../../../../components/Common/ProposalButton';
import ChangeComponent from '../../../../components/Food/ChangeComponent';

const ScrollContainer = styled(ScrollView)`
  background: #fff;
  padding: 20px 20px 0px 20px;
`;
const CountContainer = styled(View)`
  padding: 23px 35px 25px 35px;
  border: 1px solid #eaeaea;
  border-radius: 7px;
`;
const CountTitleBox = styled(View)``;
const CountTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;
const HighLighter = styled(View)`
  width: 58px;
  height: 10px;
  background: #e2f955;
  margin-top: -10px;
  z-index: -1;
`;

const CounterContainer = styled(View)`
  flex-direction: row;
  margin-top: 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MinusPressable = styled(Pressable)``;

const PlusPressable = styled(Pressable)``;

const CounterNumberBox = styled(View)`
  background: #f3f3f3;
  border-radius: 5px;
  padding: 0px 45px 0px 45px;
  margin-left: 18px;
  margin-right: 18px;
`;

const CounterNumber = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 23px;
  color: #000000;
`;

const ItemContainer = styled(View)`
  padding: 18px 15px 0px 15px;
`;

const ItemContainerTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 17px;
  color: #000;
  padding-top: 26px;
  padding-left: 3px;
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

export default function FoodSingleChnageCountPresenter({state, setState}) {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlanner, setSelectedPlanner] = useState('');
  const [selected, setSelected] = useState({});
  return (
    <>
      <ScrollContainer>
        <CountContainer>
          <CountTitleBox>
            <CountTitle>총 인원 수를 입력해주세요</CountTitle>
            <HighLighter />
          </CountTitleBox>
          <CounterContainer>
            <MinusPressable
              onPress={() => {
                let memCnt = state.memberCnt;
                setState(prev => ({
                  ...prev,
                  memberCnt: Math.max(1, memCnt - 1),
                }));
              }}>
              <Image source={require('../../../../../assets/minus_dis.png')} />
            </MinusPressable>
            <CounterNumberBox>
              <CounterNumber>{state?.memberCnt}</CounterNumber>
            </CounterNumberBox>
            <PlusPressable
              onPress={() => {
                let memCnt = state.memberCnt;
                setState(prev => ({
                  ...prev,
                  memberCnt: Math.max(1, memCnt + 1),
                }));
              }}>
              <Image source={require('../../../../../assets/plus_.png')} />
            </PlusPressable>
          </CounterContainer>
        </CountContainer>
        <ItemContainerTitle>구성품</ItemContainerTitle>
        <ItemContainer>
          <ChangeComponent state={state} setState={setState} />
        </ItemContainer>
      </ScrollContainer>
      {isClicked ? (
        <>
          <ModalWrap
            isClicked={isClicked}
            onPress={() => {
              setIsClicked(false);
              setSelected({});
            }}
          />
          <Modal selected={selected} setSelected={setSelected} />
        </>
      ) : (
        <></>
      )}
      <PlannerButton
        state={state}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        selected={selected}
      />
    </>
  );
}
