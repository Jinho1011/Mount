import React, {useEffect, useState} from 'react';

import {getDetail} from '../../../../api/api';
import FoodSinglePresenter from './FoodSinglePresenter';

const FoodSingleContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    memberCnt: 1,
    foodSingle: {},
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetail('foodSingles', route.params?.id);
      let foodSingle = data.foodSingle;

      setState(prev => ({
        ...prev,
        foodSingle, // 변화
      }));
    };
    init();
  }, [route.params?.id]);

  return (
    <>
      <FoodSinglePresenter state={state} setState={setState} />
    </>
  );
};

export default FoodSingleContainer;
