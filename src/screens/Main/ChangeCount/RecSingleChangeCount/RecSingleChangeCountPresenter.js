import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import FocusAwareStatusBar from '../../../../components/StatusBar';
import styled from 'styled-components';
import SingleCounter from '../../../../components/Rec/SingleCounter';
import ComponentsMuttable from '../../../../components/Rec/ComponentsMuttable';
import RecSingleTotalPrice from '../../../../components/Rec/RecSingleTotalPrice';
import Modal from '../../../../components/Modal';
import PlannerButton from '../../../../components/Common/ProposalButton';

const ScrollContainer = styled(ScrollView)`
  background-color: #fff;
  padding: 18px 20px 0 20px;
`;

const ComponentsContainerTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #000;
  padding-top: 26px;
  padding-left: 14px;
`;

const ComponentsContainer = styled(View)`
  padding: 18px 14px 0px 14px;
`;

const TotalPriceContainer = styled(View)`
  padding-top: 40px;
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

export default function RecSingleChangeCountPresenter({state, setState}) {
  const component = state?.components;
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState({});
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollContainer>
        <SingleCounter state={state} setState={setState} />
        <ComponentsContainerTitle>구성품</ComponentsContainerTitle>
        <ComponentsContainer>
          <ComponentsMuttable
            state={state}
            setState={setState}
            component={component}
          />
        </ComponentsContainer>
        <TotalPriceContainer>
          <RecSingleTotalPrice state={state} setState={setState} />
        </TotalPriceContainer>
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
