import React, {useState, useEffect} from 'react';
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

  useEffect(() => {
    const init = async () => {
      // removeData(PLANNER_KEY);

      const value = await getData(USER_KEY);
      const planners = await getData(PLANNER_KEY);
      if (planners != null) dispatch(addPlanners(planners));

      if (value != null) {
        if (value.hasOwnProperty('email')) {
          setIsLoggedIn(true);
        }
      }
      setIsloading(false);
    };
    init();
  }, []);

  useEffect(() => {
    if (userData.jwt === undefined || userData.jwt === '') {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [userData]);

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
