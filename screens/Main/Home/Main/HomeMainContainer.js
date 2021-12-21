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
    const _foods = JSON.parse(data._bodyInit).foods.recomms;
    const _recs = JSON.parse(data._bodyInit).recs.recomms;

    const foods = await _loadItems(_foods, 'foods');
    const recs = await _loadItems(_recs, 'recs');

    setState(prev => ({
      ...prev,
      foods,
      recs,
    }));

    _setLoaded();
  };

  const _loadItems = async items => {
    return await Promise.all(
      items.map(async function (_item) {
        const id = _item.id.split('-');
        const displayType = _item.displayType;
        const type = id[0].slice(0, -1);
        const data = await fetch(`/api/${id[0]}/${id[1]}`);
        const item = JSON.parse(data._bodyInit)[type];
        item['type'] = type;
        item['displayType'] = displayType;
        return item;
      }),
    );
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

  useEffect(() => {
    if (state.foods.length > 0 && state.recs.length > 0) {
      dispatch(recommandsActions.initFoods(state.foods));
      dispatch(recommandsActions.initRecs(state.recs));
    }
  }, [state]);

  return <HomePresenter state={state} setState={setState} />;
};
