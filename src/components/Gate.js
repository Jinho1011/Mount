import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from '../navigation/Auth';
import Main from '../navigation/Main';
import {useSelector, useDispatch} from 'react-redux';
import {PLANNER_KEY, USER_KEY, getData, removeData} from '../api/storage';
import {addPlanners} from '../store/actions/planners';

export default () => {
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
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
