/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import FoodSetChangeCountPresenter from './FoodSetChangeCountPresenter';

const FoodSetChangeCounterContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    isLoaded: false,
  });

  useEffect(() => {
    setState({
      isLoaded: true,
      ...route.params._state,
    });
  }, []);

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
