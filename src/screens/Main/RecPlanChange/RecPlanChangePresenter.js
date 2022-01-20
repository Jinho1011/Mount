import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import FocusAwareStatusBar from '../../../components/StatusBar';
import Modal from '../../../components/Modal';
import PlannerButton from '../../../components/Common/ProposalButton';
import ItemMuttable from '../../../components/Plan/ItemMuttable';
import TotalPrice from '../../../components/Common/TotalPrice';
import SingleCounter from '../../../components/Rec/SingleCounter';
import Counter from '../../../components/Rec/Counter';

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
  padding: 18px 20px 0 20px;
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

export default function RecPlanChangePresenter({state, setState}) {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlanner, setSelectedPlanner] = useState('');
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollContainer>
        <Counter state={state} setState={setState} />
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
