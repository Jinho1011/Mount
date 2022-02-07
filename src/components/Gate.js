import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import Auth from '../navigation/Auth';
import Main from '../navigation/Main';
import {useSelector, useDispatch} from 'react-redux';
import {PLANNER_KEY, USER_KEY, getData, removeData} from '../api/storage';
import {addPlanners} from '../store/actions/planners';

const LoadingContainer = styled.View`
  flex: 1;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingCircle = styled.ActivityIndicator``;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingCircle size="small" color="#000000" />
    </LoadingContainer>
  );
};

export default () => {
  const [isLoading, setIsloading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userData = useSelector(state => state.users);
  const dispatch = useDispatch();

  // 앱 처음 실행 시
  useEffect(() => {
    async function init() {
      //removeData(USER_KEY);
      const value = await getData(USER_KEY);
      const planners = await getData(PLANNER_KEY);

      if (planners != null) dispatch(addPlanners(planners));

      if (
        value.hasOwnProperty('accessToken') ||
        value.hasOwnProperty('password')
      ) {
        setIsLoggedIn(true);
        setIsloading(false);
      }
    }
    init();
  }, []);

  // 위 코드에서 else 부분 처리 후 회원가입 진행되고 실행되는 부분
  useEffect(() => {
    if (userData.jwt !== '') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userData]);

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
