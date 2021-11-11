import React, {useState, useEffect} from 'react';
import HomePresenter from './HomeMainPresenter';

export default () => {
  const [foods, setFoods] = useState([]);

  useEffect(async () => {
    let data = await fetch('/api/home/foods');
    let foods = JSON.parse(data._bodyInit).foods;
    setFoods(foods);
  }, []);

  return <HomePresenter foods={foods} />;
};
