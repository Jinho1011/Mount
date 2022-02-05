import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getDatas} from '../../../../api/api';

import HomePresenter from './HomeMainPresenter';
import * as recommandsActions from '../../../../store/actions/recommands';

export default () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    foods: [],
    recs: [],
    isLoaded: false,
  });

  const _loadData = async () => {
    const foods = await getDatas('foods');
    const recs = await getDatas('recs');

    setState(prev => ({
      ...prev,
      foods,
      recs,
      isLoaded: true,
    }));
  };

  useEffect(() => {
    const init = async () => {
      //
      _loadData();
    };
    init();
  }, []);

  useEffect(() => {
    if (state.foods.length > 0 && state.recs.length > 0) {
      console.log(
        '🚀 ~ file: HomeMainContainer.js ~ line 37 ~ useEffect ~ state',
        state.foods[0],
      );
      console.log(
        '🚀 ~ file: HomeMainContainer.js ~ line 37 ~ useEffect ~ state',
        state.recs[0],
      );
      // dispatch(recommandsActions.initFoods(state.foods));
      // dispatch(recommandsActions.initRecs(state.recs));
    }
  }, [state]);

  return <HomePresenter state={state} setState={setState} />;
};
