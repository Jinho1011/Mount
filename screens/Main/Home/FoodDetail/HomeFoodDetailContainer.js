import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import HomeFoodDetailPresenter from './HomeFoodDetailPresenter';

export default () => {
  const [state, setState] = useState({
    foods: [],
  });

  const foods = useSelector(state => state.recommands.foods);

  useEffect(() => {
    let arr = [];

    for (let i = 0; i < foods.length; i++) {
      const item = foods[i];

      if (item.displayType == 'long') {
        arr.push([item]);
      } else {
        arr.push([item, foods[++i]]);
      }
    }

    setState(prev => ({...prev, foods: arr}));
  }, []);

  return <HomeFoodDetailPresenter state={state} />;
};
