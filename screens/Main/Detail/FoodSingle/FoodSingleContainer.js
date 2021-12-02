import React, {useEffect, useState} from 'react';
import FoodSinglePresenter from './FoodSinglePresenter';

const FoodSingleContainer = () => {
  const [state, setState] = useState({
    memberCnt: 0,
    foodSingle: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await fetch('/api/detail/foodSingle');
      let foodSingle = JSON.parse(data._bodyInit);
      setState(prev => ({
        ...prev,
        foodSingle,
      }));
    };
    init();
  },[]);

  return (
    <>
      <FoodSinglePresenter state={state} setState={setState} />
    </>
  )
}

export default FoodSingleContainer;
