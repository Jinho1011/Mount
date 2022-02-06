import React, {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getFoodSets, getRecSets, getFoods} from '../../../../api/api';

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
        // console.log('You can use the WRITE_EXTERNAL_STORAGE');
      } else {
        // console.log('WRITE_EXTERNAL_STORAGE permission denied');
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
        for (let j = 1; j <= 2; j++) {
          if (i + j < max) {
            foodSets[i + j].displayType = 'short';
          }
        }
      } else {
        foodSets[i].display = 'long';
        for (let j = 1; j <= 4; j++) {
          if (i + j < max) {
            foodSets[i + j].displayType = 'short';
          }
        }
      }
    }

    for (let i = 0, max = recSets.length; i < max; i++) {
      if (Math.random() > 0.5) {
        recSets[i].displayType = 'long';
        for (let j = 1; j <= 2; j++) {
          if (i + j < max) {
            recSets[i + j].displayType = 'short';
          }
        }
      } else {
        recSets[i].display = 'long';
        for (let j = 1; j <= 4; j++) {
          if (i + j < max) {
            recSets[i + j].displayType = 'short';
          }
        }
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
