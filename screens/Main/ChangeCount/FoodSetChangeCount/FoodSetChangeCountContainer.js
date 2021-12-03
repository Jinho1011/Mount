import React from 'react';
import FoodSetChangeCountPresenter from './FoodSetChangeCountPresenter';

const FoodSetChangeCounterContainer = ({navigation, route}) => {
  return <FoodSetChangeCountPresenter {...route.params} />;
};

export default FoodSetChangeCounterContainer;
