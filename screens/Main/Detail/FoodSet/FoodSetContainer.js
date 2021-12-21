import React, {useEffect, useState} from 'react';

import {getDetail} from '../../../../api/api';
import FoodSetPresenter from './FoodSetPresenter';

const FoodSetContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    memberCnt: 0,
    foodSet: {},
    items: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetail('foodSets', route.params?.id);
      let foodSet = data.foodSet;
      let items = foodSet.items;

      items.map(item => {
        item.count = 0;
        return item;
      });

      setState(prev => ({
        ...prev, // -> memCnt, itemCnt, isLoaded는 변하지 않음 = 이전 데이터랑 같음
        foodSet, // 변화
        items,
      }));
    };
    init();
  }, []);

  return (
    <>
      <FoodSetPresenter state={state} setState={setState} />
    </>
  );
};

export default FoodSetContainer;
