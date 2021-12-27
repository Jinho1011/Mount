import React, {useEffect, useState} from 'react';

import {getDetail} from '../../../../api/api';
import FoodSinglePresenter from './FoodSinglePresenter';

const FoodSingleContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    memberCnt: 0,
    foodSingle: {},
    items: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetail('foodSingles', route.params?.id);
      let foodSingle = data.foodSingle;
      let items = foodSingle.items;
      console.log(items);

      items.map(item => {
        item.count = 0;
        return item;
      });

      setState(prev => ({
        ...prev, // -> memCnt, itemCnt, isLoaded는 변하지 않음 = 이전 데이터랑 같음
        foodSingle, // 변화
        items,
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
