import React, {useEffect, useState} from 'react';
import {getDetails} from '../../../api/api';
import FoodPlanPresenter from './FoodPlanPresenter';

const FoodPlanContainer = () => {
  const [state, setState] = useState({
    memberCnt: 1,
    items: [],
    pressedCnt: 0,
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetails('foodSingles');
      let items = data.foodSingles;

      items.map(item => {
        item.isPressed = false;
        item.type = 'foodSingle';
        item.count = 0;
        return item;
      });

      setState(prev => ({
        ...prev,
        items,
      }));
    };
    init();
  }, []);

  return <FoodPlanPresenter state={state} setState={setState} />;
};

export default FoodPlanContainer;
