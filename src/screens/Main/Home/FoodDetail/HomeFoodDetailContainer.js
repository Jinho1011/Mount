import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import HomeFoodDetailPresenter from './HomeFoodDetailPresenter';

export default ({navigation, route}) => {
  const [state, setState] = useState({
    items: [],
  });

  const foods = useSelector(state => state.recommands.foods);

  useEffect(() => {
    for (let i = 0; i < foods.length; i++) {
      let newItem;

      if (foods[i].displayType === 'long') {
        newItem = [foods[i]];
      } else {
        newItem = [foods[i], foods[++i]];
      }

      setState(prev => ({...prev, items: [...prev.items, newItem]}));
    }
  }, []);

  return <HomeFoodDetailPresenter state={state} />;
};
