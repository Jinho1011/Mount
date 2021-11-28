import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import HomeFoodDetailPresenter from './HomeFoodDetailPresenter';

export default () => {
  const [state, setState] = useState({
    longItem: [],
    shortItem: [],
  });

  useEffect(() => {
    const foods = useSelector(state => state.recommands.foods);
    foods.map(food => {});
  }, []);

  return <HomeFoodDetailPresenter foods={foods} />;
};
