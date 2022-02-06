import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {modifyPlannerTitle} from '../../../store/actions/planners';
import FocusAwareStatusBar from '../../../components/StatusBar';
import PlanItemsContainer from '../../../components/Plan/PlanItems';
import TotalPrice from '../../../components/Plan/TotalPrice';
import Caution from '../../../components/Common/Caution';
import PlanModal from '../../../components/Plan/PlanModal';

const windowWidth = Dimensions.get('window').width;

const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

const ScrollContainer = styled.ScrollView``;

const PlanTitleContainer = styled.View`
  flex-direction: row;
  padding: 12px 21px 12px 20px;
  justify-content: space-between;
`;

const PlanTitle = styled.Text`
  color: #555555;
  font-size: 16px;
  font-family: 'NotoSansKR-Bold';
  line-height: 24px;
`;

const PlanEditBtn = styled.Pressable`
  width: 55px;
  height: 33px;
  background: #f3f3f3;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const PlanEditBtnText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const PlanTitleInput = styled.TextInput`
  width: ${windowWidth - 105}px;
  height: 33px;
  background: #f3f3f3;
  border-radius: 5px;
  padding: 6px 0 7px 18px;
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const PlanSaveBtn = styled.Pressable`
  width: 55px;
  height: 33px;
  background: ${props => (props.title.length === 0 ? '#f3f3f3' : '#E2f955')};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const PlanSaveBtnText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const Divider = styled.View`
  height: 4px;
  background: #f3f3f3;
`;

const TotalPriceContainer = styled.View`
  padding: 0 26px 19px 20px;
`;

const CautionContainer = styled.View`
  background: #ffffff;
  padding: 24px 20px 29px 20px;
`;

const FooterContainer = styled.View`
  padding: 16px 23px 26px 23px;
  border-top-width: 0.3px;
  border-top-color: #b4b4b4;
  background: #ffffff;
`;

const FooterButton = styled.Pressable`
  border-radius: 5px;
  background: #e2f955;
  justify-content: center;
  align-items: center;
  padding: 13px 0 11px 0;
`;

const FooterButtonText = styled.Text``;

export default ({state, setState}) => {
  const [title, setTitle] = useState(state?.planner.title);
  const [isEditing, setIsEditing] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onEditBtnPressed = () => {
    setIsEditing(true);
    setTitle('');
  };

  const onSaveBtnPressed = () => {
    dispatch(modifyPlannerTitle(state.planner, title));
    setTitle(title);
    setIsEditing(false);
  };

  const onChangeTitle = e => {
    setTitle(e);
  };

  useEffect(() => {}, [title]);

  return (
    <Container>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollContainer>
        {isEditing ? (
          <PlanTitleContainer>
            <PlanTitleInput
              value={title}
              onChangeText={onChangeTitle}
              placeholder="기획서 이름을 입력해주세요"
            />
            <PlanSaveBtn title={title} onPress={onSaveBtnPressed}>
              <PlanSaveBtnText>저장</PlanSaveBtnText>
            </PlanSaveBtn>
          </PlanTitleContainer>
        ) : (
          <PlanTitleContainer>
            <PlanTitle>{title}</PlanTitle>
            <PlanEditBtn onPress={onEditBtnPressed}>
              <PlanEditBtnText>편집</PlanEditBtnText>
            </PlanEditBtn>
          </PlanTitleContainer>
        )}
        <Divider />
        <PlanItemsContainer category={'레크'} items={state?.planner.items} />
        <Divider />
        <PlanItemsContainer category={'음식'} items={state?.planner.items} />
        <TotalPriceContainer>
          <TotalPrice state={state?.planner} />
        </TotalPriceContainer>
        <Divider />
        <CautionContainer>
          <Caution caution={'주의사항'} />
        </CautionContainer>
      </ScrollContainer>
      <FooterContainer>
        <FooterButton onPress={() => setToggleModal(!toggleModal)}>
          <FooterButtonText>기획서로 다운받기</FooterButtonText>
        </FooterButton>
      </FooterContainer>
      <PlanModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        state={state}
      />
    </Container>
  );
};
