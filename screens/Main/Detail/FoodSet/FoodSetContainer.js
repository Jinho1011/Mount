import React, {useEffect, useState} from 'react';
import FoodSetPresenter from './FoodSetPresenter';

const FoodSetContainer = () => {
  const [state, setState] = useState({
    memberCnt: 0,
    foodSet: [],
    items: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await fetch('api/detail/foodSet');
      let foodSet = JSON.parse(data._bodyInit);
      let items = foodSet[0].items;
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
