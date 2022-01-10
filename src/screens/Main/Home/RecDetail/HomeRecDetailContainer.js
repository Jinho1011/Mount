import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import HomeRecsDetailPresenter from './HomeRecsDetailPresenter';

export default ({navigation, route}) => {
  const [state, setState] = useState({
    items: [],
  });

  const recs = useSelector(state => state.recommands.recs);

  useEffect(() => {
    for (let i = 0; i < recs.length; i++) {
      let newItem;

      if (recs[i].displayType == 'long') {
        newItem = [recs[i]];
      } else {
        newItem = [recs[i], recs[++i]];
      }

      setState(prev => ({...prev, items: [...prev.items, newItem]}));
    }
  }, []);

  return <HomeRecsDetailPresenter state={state} />;
};
