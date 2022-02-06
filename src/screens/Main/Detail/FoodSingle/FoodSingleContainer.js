import React, {useEffect, useState} from 'react';
import {getFoodById} from '../../../../api/api';
import FoodSinglePresenter from './FoodSinglePresenter';

const FoodSingleContainer = ({navigation, route}) => {
  // console.log(route.params.id);
  const [state, setState] = useState({
    memberCnt: 1,
    foodSingle: {},
  });

  useEffect(() => {
    const init = async () => {
      let food = await getFoodById(route.params.id);
      let foodSingle = food;
      foodSingle.count = state.memberCnt;

      setState(prev => ({
        ...prev,
        foodSingle, // 변화
      }));
    };
    init();
  }, []);

  return (
    <>
      <FoodSinglePresenter state={state} setState={setState} />
    </>
  );
};

export default FoodSingleContainer;
