import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import SearchPresenter from './SearchPresenter';

export default () => {
  const recents = useSelector(state => state.search);
  const foods = useSelector(state => state.recommands.foods);
  const recs = useSelector(state => state.recommands.recs);

  const [state, setState] = useState({
    recents,
    recommands: {foods, recs},
  });

  useEffect(() => {}, [state]);

  return <SearchPresenter state={state} setState={setState} />;
};
