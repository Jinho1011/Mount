import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

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
    let data = await fetch('/api/recommands');
    let foods = JSON.parse(data._bodyInit).foods;
    let recs = JSON.parse(data._bodyInit).recs;
    setState(prev => ({...prev, foods}));
    setState(prev => ({...prev, recs}));
    dispatch(recommandsActions.initFoods(foods));
    dispatch(recommandsActions.initRecs(recs));
  };

  const _setLoaded = () => {
    setState(prev => ({...prev, isLoaded: true}));
  };

  useEffect(() => {
    const init = async () => {
      _loadData();
      _setLoaded();
    };
    init();
  }, []);

  return <HomePresenter state={state} setState={setState} />;
};
