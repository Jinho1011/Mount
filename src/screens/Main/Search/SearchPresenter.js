import React, {useState} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {Searchbar_closeSvg} from '../../../components/assets';
import FocusAwareStatusBar from '../../../components/StatusBar';

const screenWidth = Dimensions.get('window').width;

const SearchHeader = styled.View`
  flex-direction: row;
  background-color: #fff;
  padding: 13px 16px 13px 28px;
  justify-content: space-between;
  align-items: center;
`;

const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.TextInput`
  background-color: #f3f3f3;
  width: ${screenWidth - 82}px;
  padding: 7px 0 5px 10px;
  border-radius: 5px;
`;

const InputClearButton = styled.Pressable`
  margin-left: -30px;
`;

const CancelInputBtn = styled.Pressable``;

const CancelInputBtnText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const RecentContainer = styled.View`
  background-color: #ffffff;
  padding: 23px 0 19px 20px;
  border-bottom-color: #b4b4b4;
  border-bottom-width: 0.2px;
`;

const RecentTitle = styled.Text`
  color: #373737;
  font-size: 16px;
  font-family: 'NotoSansKR-Bold';
  line-height: 24px;
`;

const Recents = styled.ScrollView`
  padding-top: 18px;
`;

const Recent = styled.Pressable`
  padding: 7px 10px 5px 20px;
  background-color: #f3f3f3;
  border-radius: 18px;
  margin-right: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RecentText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
  padding-right: 14px;
`;

const RecentEmpty = styled.Text`
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
  padding-bottom: 6px;
`;

export default () => {
  const [isEditing, setIsEditing] = useState(true);
  const navigation = useNavigation();
  const recentData = ['가', '가나', '가나다'];

  return (
    <View>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SearchHeader>
        <InputContainer>
          <Input
            placeholder="음식, 레크레이션 검색"
            placeholderTextColor="#b4b4b4"
          />
          {isEditing ? (
            <InputClearButton
              onPress={() => {
                console.log('clear input');
              }}>
              <Searchbar_closeSvg width={16} height={16} />
            </InputClearButton>
          ) : (
            <></>
          )}
        </InputContainer>
        <CancelInputBtn
          onPress={() => {
            console.log('cancel input');
          }}>
          <CancelInputBtnText>취소</CancelInputBtnText>
        </CancelInputBtn>
      </SearchHeader>
      <RecentContainer>
        <RecentTitle>최근 검색어</RecentTitle>
        <Recents horizontal={true}>
          {recentData.length > 0 ? (
            recentData.map(data => {
              return (
                <Recent
                  onPress={() => {
                    console.log('Delete Recent');
                  }}>
                  <RecentText>{data}</RecentText>
                  <Searchbar_closeSvg width={11} height={11} fill={'#8b8b8b'} />
                </Recent>
              );
            })
          ) : (
            <RecentEmpty>최근 검색어가 없습니다.</RecentEmpty>
          )}
        </Recents>
      </RecentContainer>
    </View>
  );
};
