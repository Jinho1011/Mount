import React, {useEffect, useState} from 'react';
import FavoritePresenter from './FavoritePresenter';
import {getLiked} from '../../../api/fav';
import {getData, USER_KEY} from '../../../api/storage';
import {
  getFoodSetsById,
  getRecSetsById,
  getFoodById,
  getRecById,
} from '../../../api/api';

export default () => {
  const [state, setState] = useState({
    items: [],
    isReady: false,
  });

  useEffect(() => {
    const initData = async () => {
      const value = await getData(USER_KEY);
      const key = value.email === 'null' ? value.identifier : value.email;
      const liked = await getLiked(key);
      liked.map(async item => {
        if (item.type === 'foodSet') {
          let data = await getFoodSetsById(item.itemId);
          console.log(
            '🚀 ~ file: FavoriteContainer.js ~ line 26 ~ initData ~ data',
            data,
          );
          data.type = 'FoodSet';
          setState(prev => ({
            ...prev,
            items: [...prev.items, data],
          }));
        } else if (item.type === 'recSet') {
          let data = await getRecSetsById(item.itemId);
          data.type = 'RecSet';
          setState(prev => ({
            ...prev,
            items: [...prev.items, data],
          }));
        } else if (item.type === 'foodSingle') {
          let data = await getFoodById(item.itemId);
          data.type = 'FoodSingle';
          setState(prev => ({
            ...prev,
            items: [...prev.items, data],
          }));
        } else if (item.type === 'recSingle') {
          let data = await getRecById(item.itemId);
          data.type = 'RecSingle';
          setState(prev => ({
            ...prev,
            items: [...prev.items, data],
          }));
        }
      });
    };
    initData();
    setState(prev => ({
      ...prev,
      isReady: true,
    }));
  }, []);

  return <FavoritePresenter state={state} setState={setState} />;
};
