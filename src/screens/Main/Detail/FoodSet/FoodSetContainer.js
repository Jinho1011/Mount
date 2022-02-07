import React, {useEffect, useState} from 'react';
import {getFoods, getFoodSets} from '../../../../api/api';
import FoodSetPresenter from './FoodSetPresenter';

const FoodSetContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    memberCnt: 1,
    foodSet: {},
    items: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await getFoodSets();
      let foods = await getFoods();
      let foodSet = data.find(element => element.id === route.params.id);
      let food_ids = foodSet.food_ids; // 현재 음식세트의 구성품 id배열
      let items = [];
      for (let i = 0; i < food_ids.length; i++) {
        for (let j = 0; j < foods.length; j++) {
          if (foods[j].id + '' === food_ids[i]) {
            items.push(foods[j]);
          }
        }
      }
      items.map(item => {
        item.count = 1;
        return item;
      });

      setState(prev => ({
        ...prev,
        foodSet,
        items: items,
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
