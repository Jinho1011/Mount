/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import FoodSetChangeCountPresenter from './FoodSetChangeCountPresenter';

const FoodSetChangeCounterContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    isLoaded: false,
  });
  console.log(route.params._state.items);

  useEffect(() => {
    setState({
      isLoaded: true,
      ...route.params._state,
    });
  }, []);
  // useEffect(() => {
  //   state?.items?.map(item => (item.count = state?.memberCnt));
  // });

  // console.log(route.params._state);

  return (
    <>
      {state.isLoaded ? (
        <FoodSetChangeCountPresenter state={state} setState={setState} />
      ) : (
        <></>
      )}
    </>
  );
};

export default FoodSetChangeCounterContainer;
