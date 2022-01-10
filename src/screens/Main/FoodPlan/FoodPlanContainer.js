import React, {useEffect, useState} from 'react';
import {getDetails} from '../../../api/api';
import FoodPlanPresenter from './FoodPlanPresenter';

const FoodPlanContainer = () => {
  const [state, setState] = useState({
    memberCnt: 1,
    items: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetails('foodSingles');
      let items = data.foodSingles;

      items.map(item => {
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
