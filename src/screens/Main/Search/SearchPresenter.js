import React, {useState, useEffect} from 'react';
import {Dimensions, Keyboard} from 'react-native';
import styled from 'styled-components';

import {Searchbar_closeSvg, Back_bSvg} from '../../../components/assets';
import FocusAwareStatusBar from '../../../components/StatusBar';
import DetailsContainer from '../../../components/Main/Details';
import SearchTab from '../../../components/Search/TabBar';

const screenWidth = Dimensions.get('window').width;

const SearchContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

const SearchHeader = styled.View`
  flex-direction: row;
  background-color: #fff;
  padding: ${props => {
    if (!props.isEditing && !props.isEntered) {
      return '13px 18px 13px 28px';
    } else if (props.isEditing && !props.isEntered) {
      return '13px 16px 13px 28px';
    } else if (props.isEntered) {
      return '13px 20px 13px 15px';
    }
  }};
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
  width: ${props => {
    if (!props.isEditing && !props.isEntered) {
      return `${screenWidth - 56}px`;
    } else if (props.isEditing && !props.isEntered) {
      return `${screenWidth - 92}px`;
    } else if (props.isEntered) {
      return `${screenWidth - 81}px`;
    }
  }};
  padding: 7px 0 5px 10px;
  color: #000000;
  border-radius: 5px;
  margin-left: ${props => (props.isEntered ? 10 : 0)}px;
`;

const InputBackBtn = styled.Pressable`
  width: 24px;
  height: 24px;
  padding-right: 20px;
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

const RecommandsContainer = styled.View`
  background-color: #ffffff;
  padding-bottom: 25px;
`;

const Padding = styled.View`
  padding-bottom: 69px;
  background-color: #f3f3f3;
`;

export default ({state, setState}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [text, setText] = useState('');
  const [foodResults, setFoodResults] = useState([]);
  const [recResults, setRecResults] = useState([]);

  const onChangeText = e => {
    setText(e);
  };

  const onSubmit = () => {
    state.recommands.foods.map(item => {
      if (item.title.includes(text)) {
        setFoodResults(prev => [...prev, item]);
      }
    });
    state.recommands.recs.map(item => {
      if (item.title.includes(text)) {
        setRecResults(prev => [...prev, item]);
      }
    });
    setState(prev => ({
      ...prev,
      recents: [...state.recents, text],
    }));
    setIsEntered(true);
  };

  const onPressBack = () => {
    setIsEntered(false);
    setText('');
    setFoodResults([]);
    setRecResults([]);
  };

  useEffect(() => {}, [isEditing, isEntered, text]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsEditing(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsEditing(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SearchContainer>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SearchHeader isEditing={isEditing} isEntered={isEntered}>
        <InputContainer>
          {isEntered ? (
            <InputBackBtn onPress={onPressBack}>
              <Back_bSvg width={24} height={24} />
            </InputBackBtn>
          ) : (
            <></>
          )}

          <Input
            value={text}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmit}
            isEditing={isEditing}
            isEntered={isEntered}
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
        {isEditing && !isEntered ? (
          <CancelInputBtn
            onPress={() => {
              console.log('cancel input');
            }}>
            <CancelInputBtnText>취소</CancelInputBtnText>
          </CancelInputBtn>
        ) : (
          <></>
        )}
      </SearchHeader>
      {isEntered ? (
        <SearchTab foodResults={foodResults} recResults={recResults} />
      ) : (
        <>
          <RecentContainer>
            <RecentTitle>최근 검색어</RecentTitle>
            <Recents horizontal={true}>
              {state.recents.length > 0 ? (
                state.recents.map((data, index) => {
                  return (
                    <Recent
                      key={data + index}
                      onPress={() => {
                        const deletedRecents = state.recents.filter(
                          item => item !== data,
                        );
                        setState(prev => ({
                          ...prev,
                          recents: deletedRecents,
                        }));
                        console.log('Delete Recent');
                      }}>
                      <RecentText>{data}</RecentText>
                      <Searchbar_closeSvg
                        width={11}
                        height={11}
                        fill={'#8b8b8b'}
                      />
                    </Recent>
                  );
                })
              ) : (
                <RecentEmpty>최근 검색어가 없습니다.</RecentEmpty>
              )}
            </Recents>
          </RecentContainer>
          <RecommandsContainer>
            <DetailsContainer
              title="Mount 추천 세트"
              navigate=""
              items={state.recommands.foods}
              isLoaded={true}
            />
          </RecommandsContainer>
          <Padding />
          <RecommandsContainer>
            <DetailsContainer
              title="지금 인기있어요! - 아무튼 유엓라이팅"
              navigate=""
              items={state.recommands.recs}
              isLoaded={true}
            />
          </RecommandsContainer>
        </>
      )}
    </SearchContainer>
  );
};
