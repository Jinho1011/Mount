import React, {useEffect, useState} from 'react';
import {getDetails} from '../../../api/api';
import FoodPlanPresenter from './FoodPlanPresenter';

const FoodPlanContainer = () => {
  const [state, setState] = useState({
    memberCnt: 1,
    items: [],
  });

  const [disabled, setDisabled] = useState(true);
  const [isPress, setIsPress] = useState(false);
  // const toggleIsPress = () => {
  //   setIsPress(!isPress);
  // };

  useEffect(() => {
    const init = async () => {
      let data = await getDetails('foodSingles');
      let items = data.foodSingles;

      items.map(item => {
        item.isPress = isPress;
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

  return (
    <FoodPlanPresenter
      state={state}
      setState={setState}
      disabled={disabled}
      setDisabled={setDisabled}
      isPress={isPress}
      setIsPress={setIsPress}
    />
  );
};

export default FoodPlanContainer;
