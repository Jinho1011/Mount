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
      console.log('푸드');
      console.log(foods);
      let foodSet = data.find(element => element.id === route.params.id);
      let food_ids = foodSet.food_ids;
      let intersection = food_ids.filter(x => foodSet.id);
      let test = foods.find(food => food.id === 20);

      let memberCnt = foodSet.memberCnt;
      // items.map(item => {
      //   item.count = memberCnt;
      //   return item;
      // });

      setState(prev => ({
        ...prev,
        foodSet,
        // items,
        // memberCnt,
      }));
    };
    init();
  }, [route.params?.id]);

  return (
    <>
      <FoodSetPresenter state={state} setState={setState} />
    </>
  );
};

export default FoodSetContainer;
