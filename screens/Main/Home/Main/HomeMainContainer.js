import React, {useState, useEffect} from 'react';
import HomePresenter from './HomeMainPresenter';

export default () => {
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
