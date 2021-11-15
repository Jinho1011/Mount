import React, {useState, useEffect} from 'react';
import HomePresenter from './HomeMainPresenter';

export default () => {
  const [state, setState] = useState({
    foods: [],
    recs: [],
    isLoaded: false,
  });

  const _loadFoods = async () => {
    let data = await fetch('/api/home/foods');
    let foods = JSON.parse(data._bodyInit).foods;
    setState(prev => ({...prev, foods}));
  };

  const _setLoaded = () => {
    setState(prev => ({...prev, isLoaded: true}));
  };

  useEffect(() => {
    const init = async () => {
      _loadFoods();
      _setLoaded();
    };
    init();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <HomePresenter state={state} setState={setState} />;
};
