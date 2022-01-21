import React, {useEffect, useState} from 'react';
import FoodSingleChangeCountPresenter from './FoodSingleChangeCountPresenter';

const FoodSingleChangeCountContainer = ({route}) => {
  const [state, setState] = useState({
    isLoaded: false,
    ...route.params._state,
  });

  useEffect(() => {
    const init = () => {
      let foodSingle = route.params._state.foodSingle;
      let memberCnt = route.params._state.memberCnt;

      setState({
        isLoaded: true,
        ...route.params._state,
      });
    };
    init();
  }, [route.params._state]);
  return (
    <>
      {state.isLoaded ? (
        <FoodSingleChangeCountPresenter state={state} setState={setState} />
      ) : (
        <></>
      )}
    </>
  );
};

export default FoodSingleChangeCountContainer;
