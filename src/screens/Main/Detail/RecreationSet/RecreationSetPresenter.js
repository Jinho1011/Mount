import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import TitleContainer from '../../../../components/Common/SetTitle';
import Counter from '../../../../components/Rec/Counter';
import FocusAwareStatusBar from '../../../../components/StatusBar';
import TotalPrice from '../../../../components/Common/TotalPrice';
import Caution from '../../../../components/Common/Caution';
import _ from 'lodash';
import Items from '../../../../components/Rec/Items';
import Modal from 'react-native-modal';
import {CloseSvg} from '../../../../components/assets';
import SetCarousel from '../../../../components/Rec/SetCarousel';

const PageWrap = styled(View)``;

const ScrollContainer = styled(ScrollView)`
  background-color: #e5e5e5;
`;

/* 레크레이션 세트 리스트 */
const RecSetListContainer = styled(View)`
  margin-top: 4px;
  padding: 20px 20px 20px 20px;
  justify-content: space-between;
  background-color: #fff;
`;

const RecSetListTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

const RecSetListItemBigContainer = styled(View)`
  border: 1px solid #eaeaea;
  border-radius: 12px;
  margin-top: 17px;
  padding: 14px 15px 0px 15px;
`;

const RecSetListName = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const RecSetListItemTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 17px;
  color: #000000;
  padding-top: 14px;
  margin-bottom: 13px;
`;

const RecSetBorderLine = styled(View)`
  border: 0.35px solid #eaeaea;
  padding-top: 14px;
`;

const MoreRecButton = styled(TouchableOpacity)`
  padding: 12px 76px;
  margin: 24px 28px 22px 28px;
  background: #e2f955;
  border-radius: 5px;
`;

const MoreRecButtonText = styled(Text)`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

/* 주의사항 */
const CautionContainer = styled(View)`
  margin-top: -10px;
  padding: 24px 20px 92px 20px;
  background: #ffffff;
`;

/* bottom button container */
const BottomConatiner = styled(View)`
  flex-direction: row;
  background: #ffffff;
  border: 0.3px solid #b4b4b4;
  padding: 8px 21px 8px 23px;
`;

const ChangeCountButton = styled(TouchableOpacity)`
  padding: 12px 118px;
  background: #e2f955;
  border-radius: 5px;
  height: 48px;
`;

const ChangeCountText = styled(Text)`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

const LikeButton = styled(TouchableOpacity)`
  margin: 14.5px 0 14.5px 13px;
`;

const LikeCount = styled(Text)`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #8b8b8b;

  margin-top: 11px;
  margin-left: 3px;
`;

const CounterContainer = styled(View)`
  background: #ffffff;
  padding: 16px 20px 23px 20px;
`;

const TotalPriceContainer = styled(View)`
  padding-top: 25px;
`;

/* react-native-modal */
const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const StyledModalContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  /* 모달창 크기 조절 */
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const StyledModal = styled(Modal)`
  margin: 0;
`;

const ModalHeader = styled(View)`
  display: flex;
  align-items: flex-end;
  position: absolute;
  right: 0;
  z-index: 1;
  margin-top: 31px;
  margin-right: 21px;
`;

const ModalCloseButton = styled(Pressable)`
  width: 24px;
  height: 24px;
`;

const ModalImageBox = styled(View)`
  width: 100%;
`;

const ModalImage = styled(Image)`
  width: 100%;
  height: 245px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const ModalContentsContainer = styled(View)`
  padding: 18px 26px 20px 26px;
`;

const ModalContentsTitle = styled(Text)`
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  line-height: 26px;
`;

const ModalGuideLineTitle = styled(Text)`
  padding-top: 40px;
  font-family: 'NotoSansKR-Bold';
  font-size: 12px;
  line-height: 16px;
`;

const ModalContentsDescription = styled(Text)`
  padding-top: 4px;
  font-family: 'NotosansKR-Regular';
  font-size: 10px;
  line-height: 15px;
  color: #777;
`;

const RecreationSetPresenter = ({state, setState}) => {
  const navigation = useNavigation();
  //State를 이용하여 Modal을 제어함
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <PageWrap style={{flex: 1}}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollContainer>
        <TitleContainer
          img={state?.recSet?.image}
          title={state?.recSet?.title}
          items={state?.items?.map(item => item.title).join(', ')}
        />
        <CounterContainer>
          <Counter state={state} setState={setState} />
        </CounterContainer>
        <RecSetListContainer>
          <RecSetListTitle>세트 리스트</RecSetListTitle>
          <RecSetListItemBigContainer>
            <RecSetListName>{state?.recSet?.title}</RecSetListName>
            <RecSetListItemTitle>구성품</RecSetListItemTitle>
            {state?.items?.map(item => {
              return (
                <Items
                  state={state}
                  setState={setState}
                  item={item}
                  key={item.id}
                />
              );
            })}
            <MoreRecButton onPress={() => setModalVisible(true)}>
              <MoreRecButtonText>레크 정보 더보기</MoreRecButtonText>
            </MoreRecButton>
          </RecSetListItemBigContainer>
          <TotalPriceContainer>
            <TotalPrice state={state} setState={setState} />
          </TotalPriceContainer>
        </RecSetListContainer>
        <RecSetBorderLine />
        <CautionContainer>
          <Caution
            state={state}
            setState={setState}
            caution={state?.recSet.caution}
          />
        </CautionContainer>
        <StyledSafeAreaView>
          <StyledModal
            isVisible={modalVisible}
            animationIn="zoomIn"
            animationOut="zoomOut"
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}>
            <StyledModalContainer>
              <ModalHeader>
                <ModalCloseButton
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <CloseSvg />
                </ModalCloseButton>
              </ModalHeader>
              <ModalImageBox>
                <ModalImage source={{uri: state?.recSet?.image}} />
              </ModalImageBox>
              <ModalContentsContainer>
                <ModalContentsTitle>{state?.recSet?.title}</ModalContentsTitle>
                <ModalContentsDescription>
                  한줄설명길이
                </ModalContentsDescription>
                <ModalGuideLineTitle>저희 레크는요...</ModalGuideLineTitle>
              </ModalContentsContainer>
              <SetCarousel state={state} setState={setState} />
            </StyledModalContainer>
          </StyledModal>
        </StyledSafeAreaView>
      </ScrollContainer>
      <BottomConatiner>
        <ChangeCountButton
          onPress={() => {
            const _state = _.cloneDeep(state);
            navigation.navigate('RecSetChangeCount', {_state});
          }}>
          <ChangeCountText>수량변경</ChangeCountText>
        </ChangeCountButton>
        <LikeButton>
          <Image source={require('../../../../../assets/Like.png')} />
        </LikeButton>
        <LikeCount>23</LikeCount>
      </BottomConatiner>
    </PageWrap>
  );
};

export default RecreationSetPresenter;
