/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import FoodSetChangeCountPresenter from './FoodSetChangeCountPresenter';

const FoodSetChangeCounterContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    isLoaded: false,
    ...route.params._state,
  });

  useEffect(() => {
    const init = () => {
      let foodSet = route.params._state.foodSet;
      let memberCnt = route.params._state.memberCnt;
      let items = foodSet.items;

      items.map(item => {
        item.count = memberCnt;
        return item;
      });

      console.log(foodSet.items[0].count);
      setState({
        isLoaded: true,
        ...route.params._state,
      });
    };
    init();
  }, []);

  return (
    <>
      {state.isLoaded ? (
        <FoodSetChangeCountPresenter state={state} setState={setState} />
      ) : (
        <></>
      )}
    </>
  );
};

export default FoodSetChangeCounterContainer;
