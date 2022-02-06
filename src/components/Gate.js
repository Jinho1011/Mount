import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from '../navigation/Auth';
import Main from '../navigation/Main';
import {useSelector, useDispatch} from 'react-redux';
import {PLANNER_KEY, getData} from '../api/storage';
import {addPlanners} from '../store/actions/planners';

import {AsyncStorage} from 'react-native';

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userData = useSelector(state => state.users);
  const dispatch = useDispatch();
  // 앱 처음 실행 시
  useEffect(() => {
    async function init() {
      //AsyncStorage.removeItem('userData');
      const value = JSON.parse(await AsyncStorage.getItem('userData'));
      const planners = await getData(PLANNER_KEY);
      console.log('🚀 ~ file: Gate.js ~ line 21 ~ init ~ planners', planners);
      dispatch(addPlanners(planners));
      if (value.hasOwnProperty('password')) {
        // 아이디와 비밀번호로 회원가입한 적이 있으므로 다시 서버에 로그인 요청해서 JWT 재발급 후
        setIsLoggedIn(true);
      } else if (value.hasOwnProperty('accessToken')) {
        // 카카오톡 회원가입으로 AccessToken이 있으므로 다시 서버에 요청해서 JWT 재발급 후
        setIsLoggedIn(true);
      } else {
        // 회원가입한적이 없거나 재설치한 경우로 회원가입 페이지로 setIsLoggedIn(false)
      }
    }
    init();
  }, []);

  // 위 코드에서 else 부분 처리 후 회원가입 진행되고 실행되는 부분
  useEffect(() => {
    if (userData.jwt !== '') {
      setIsLoggedIn(true);
    }
  }, [userData]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
