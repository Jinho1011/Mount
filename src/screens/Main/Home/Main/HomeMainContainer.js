import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFoodSets, getRecSets} from '../../../../api/api';

import HomePresenter from './HomeMainPresenter';
import * as recommandsActions from '../../../../store/actions/recommands';

export default () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    foods: [],
    recs: [],
    isLoaded: false,
  });

  const loadData = async () => {
    const foodSets = await getFoodSets();
    const recSets = await getRecSets();

    for (let i = 0, max = foodSets.length; i < max; i++) {
      if (Math.random() > 0.5) {
        foodSets[i].display = 'long';
        if (i + 1 < foodSets.length) foodSets[i + 1].display = 'long';
      } else {
      }
    }

    // setState(prev => ({
    //   ...prev,
    //   foods,
    //   recs,
    //   isLoaded: true,
    // }));
  };

  useEffect(() => {
    const init = async () => {
      loadData();
    };
    init();
  }, []);

  useEffect(() => {
    if (state.foods.length > 0 && state.recs.length > 0) {
      // dispatch(recommandsActions.initFoods(state.foods));
      // dispatch(recommandsActions.initRecs(state.recs));
    }
  }, [state]);

  return <HomePresenter state={state} setState={setState} />;
};
