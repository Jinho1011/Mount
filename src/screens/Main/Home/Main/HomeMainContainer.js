import React, {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
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

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const loadData = async () => {
    const foodSets = await getFoodSets();

    const recSets = await getRecSets();

    for (let i = 0, max = foodSets.length; i < max; i++) {
      if (Math.random() > 0.5) {
        foodSets[i].displayType = 'long';
        if (i + 1 < max) foodSets[i + 1].displayType = 'short';
        if (i + 2 < max) foodSets[i + 2].displayType = 'short';
        i += 2;
      } else {
        foodSets[i].displayType = 'long';
        if (i + 1 < max) foodSets[i + 1].displayType = 'short';
        if (i + 2 < max) foodSets[i + 2].displayType = 'short';
        if (i + 3 < max) foodSets[i + 3].displayType = 'short';
        if (i + 4 < max) foodSets[i + 4].displayType = 'short';
        i += 4;
      }
    }

    for (let i = 0, max = recSets.length; i < max; i++) {
      if (Math.random() > 0.5) {
        recSets[i].displayType = 'long';
        if (i + 1 < max) recSets[i + 1].displayType = 'short';
        if (i + 2 < max) recSets[i + 2].displayType = 'short';
        i += 2;
      } else {
        recSets[i].displayType = 'long';
        if (i + 1 < max) recSets[i + 1].displayType = 'short';
        if (i + 2 < max) recSets[i + 2].displayType = 'short';
        if (i + 3 < max) recSets[i + 3].displayType = 'short';
        if (i + 4 < max) recSets[i + 4].displayType = 'short';
        i += 4;
      }
    }

    setState(prev => ({
      ...prev,
      foods: foodSets,
      recs: recSets,
    }));
  };

  useEffect(() => {
    const init = async () => {
      loadData();
      requestPermission();
    };
    init();
  }, []);

  useEffect(() => {
    if (state.recs.length > 0 && state.recs.length > 0 && !state.isLoaded) {
      dispatch(recommandsActions.initFoods(state.foods));
      dispatch(recommandsActions.initRecs(state.recs));

      setState(prev => ({
        ...prev,
        isLoaded: true,
      }));
    }
  }, [state]);

  return <HomePresenter state={state} setState={setState} />;
};
