import React, {useState, useEffect} from 'react';
import {View, Pressable} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import KakaoShareLink from 'react-native-kakao-share-link';
import Modal from 'react-native-modal';

const ModalContainer = styled.View`
  background-color: #ffffff;
  border-radius: 12px;
`;

const ModalTitleContainer = styled.View`
  padding: 22px 11px 38px 11px;
  flex-direction: row;
  justify-content: space-between;
`;

const ModalTitle = styled.Text`
  color: #000000;
  font-size: 16px;
  font-family: 'NotoSansKR-Bold';
`;

const ModalClose = styled.Image``;

const ModalShareContainer = styled.View`
  padding: 0 46px 45px 47px;
  flex-direction: row;
  justify-content: space-between;
`;

const ModalShare = styled.Pressable`
  justify-content: center;
`;

const ModalShareImage = styled.Image`
  width: 48px;
  height: 48px;
  padding-bottom: 8px;
`;

const ModalShareText = styled.Text`
  width: 60px;
`;

const ModalFooter = styled.View`
  flex-direction: row;
  padding: 0px 15px 19px 15px;
  justify-content: center;
`;

const ModalFileNameContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0px 32px 0px 26px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 0.4px solid #b4b4b4;
`;

const ModalFileName = styled.Text`
  color: #777777;
  font-size: 12px;
  font-family: 'NotoSansKR-Regular';
`;

const ModalSaveBtn = styled.Pressable`
  justify-content: center;
  align-items: center;
  padding: 0px 27px 0px 22px;
  background-color: #f3f3f3;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-color: #b4b4b4;
  border-top-width: 0.4px;
  border-bottom-color: #b4b4b4;
  border-bottom-width: 0.4px;
  border-right-color: #b4b4b4;
  border-right-width: 0.4px;
`;

const ModalSaveText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
`;

const PlanModal = ({toggleModal, setToggleModal, items}) => {
  const toggle = () => {
    setToggleModal(!toggleModal);
  };

  const sendCustom = async () => {
    try {
      const response = await KakaoShareLink.sendCommerce({
        content: {
          title: 'title',
          imageUrl:
            'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
          link: {
            webUrl: 'https://developers.kakao.com/',
            mobileWebUrl: 'https://developers.kakao.com/',
          },
          description: 'description',
        },
        commerce: {
          regularPrice: 100000,
          discountPrice: 80000,
          discountRate: 20,
        },
        buttons: [
          {
            title: '앱에서 보기',
            link: {
              androidExecutionParams: [{key: 'key1', value: 'value1'}],
              iosExecutionParams: [
                {key: 'key1', value: 'value1'},
                {key: 'key2', value: 'value2'},
              ],
            },
          },
          {
            title: '웹에서 보기',
            link: {
              webUrl: 'https://developers.kakao.com/',
              mobileWebUrl: 'https://developers.kakao.com/',
            },
          },
        ],
      });
      console.log(response);
    } catch (e) {
      console.error(e);
      console.error(e.message);
    }
  };

  return (
    <Modal isVisible={toggleModal} onBackdropPress={toggle}>
      <ModalContainer>
        <ModalTitleContainer>
          <View></View>
          <View style={{flexDirection: 'row', alignContent: 'flex-start'}}>
            <ModalTitle>기획서 저장하기</ModalTitle>
          </View>
          <View style={{flexDirection: 'row', alignContent: 'flex-end'}}>
            <Pressable onPress={toggle}>
              <ModalClose />
            </Pressable>
          </View>
        </ModalTitleContainer>
        <ModalShareContainer>
          <ModalShare onPress={sendCustom}>
            <ModalShareImage></ModalShareImage>
            <ModalShareText>카카오톡 공유하기</ModalShareText>
          </ModalShare>
          <ModalShare>
            <ModalShareImage></ModalShareImage>
            <ModalShareText>카카오톡 공유하기</ModalShareText>
          </ModalShare>
          <ModalShare>
            <ModalShareImage></ModalShareImage>
            <ModalShareText>카카오톡 공유하기</ModalShareText>
          </ModalShare>
        </ModalShareContainer>
        <ModalFooter>
          <ModalFileNameContainer>
            <ModalFileName>최강산디 엠티 기획서.xlsx</ModalFileName>
          </ModalFileNameContainer>
          <ModalSaveBtn
            onPress={() => {
              console.log('저장하기');
            }}>
            <ModalSaveText>저장하기</ModalSaveText>
          </ModalSaveBtn>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
};

export default PlanModal;
