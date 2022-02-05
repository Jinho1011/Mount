import React, {useEffect, useState} from 'react';
import {getDetail, getFoods} from '../../../../api/api';
import FoodSinglePresenter from './FoodSinglePresenter';

const FoodSingleContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    memberCnt: 1,
    foodSingle: {},
  });

  useEffect(() => {
    const init = async () => {
      let data = await getFoods();
      let foodSingle = data.foodSingle;
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
