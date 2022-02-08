import React, {useEffect, useState} from 'react';
import FavoritePresenter from './FavoritePresenter';

export default () => {
  const [state, setState] = useState({
    items: [],
    isReady: false,
  });
  const foodFavs = [1, 4];
  const recFavs = [1];

  const fetchData = (arr, type) => {
    return arr.map(async function (id) {
      const data = await fetch(`/api/${type}s/${id}`);
      const item = JSON.parse(data._bodyInit)[type];
      return item;
    });
  };

  useEffect(() => {
    const initData = async () => {
      const foods = fetchData(foodFavs, 'foodSet');
      const recs = fetchData(recFavs, 'recSet');
      await Promise.all([...foods, ...recs]).then(values => {
        setState({
          items: values,
          isReady: true,
        });
      });
    };
    initData();
  }, []);

  return <FavoritePresenter state={state} setState={setState} />;
};
