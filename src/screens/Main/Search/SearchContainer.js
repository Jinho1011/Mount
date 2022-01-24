import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import SearchPresenter from './SearchPresenter';

export default () => {
  const recents = useSelector(state => state.search);
  const [state, setState] = useState({recents});
  useEffect(() => {
    console.log('🚀 ~ file: SearchContainer.js ~ line 11 ~ state', state);
  }, [state]);
  return <SearchPresenter state={state} setState={setState} />;
};
