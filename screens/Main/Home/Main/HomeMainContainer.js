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
    const data = await fetch('/api/recommands');
    const foods = JSON.parse(data._bodyInit).foods.recomms;
    const recs = JSON.parse(data._bodyInit).recs.recomms;

    _loadItems(foods, 'foods');
    _loadItems(recs, 'recs');

    dispatch(recommandsActions.initFoods(foods));
    dispatch(recommandsActions.initRecs(recs));

    _setLoaded();
  };

  const _loadItems = async (items, label) => {
    items.map(async _item => {
      const id = _item.id.split('-');
      const type = id[0].slice(0, -1);
      const data = await fetch(`/api/${id[0]}/${id[1]}`);
      const item = JSON.parse(data._bodyInit)[type];
      item['type'] = type;
      setState(prev => ({...prev, [label]: [...prev[label], item]}));
    });
  };

  const _setLoaded = () => {
    setState(prev => ({...prev, isLoaded: true}));
  };

  useEffect(() => {
    const init = async () => {
      _loadData();
    };
    init();
  }, []);

  return <HomePresenter state={state} setState={setState} />;
};
