import React, {useEffect, useState} from 'react';
import {getDetail} from '../../../../api/api';
import {TransparentHeader} from '../../../../components/Header/TransparentHeader';
import FoodSetPresenter from './FoodSetPresenter';

const FoodSetContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    // memberCnt: 1,
    foodSet: {},
    items: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetail('foodSets', route.params?.id);
      let foodSet = data.foodSet;
      let items = foodSet.items;
      let memberCnt = foodSet.memberCnt;

      items.map(item => {
        item.count = memberCnt;
        return item;
      });

      setState(prev => ({
        ...prev,
        foodSet,
        items,
        memberCnt,
      }));
    };
    init();
  }, [route.params?.id]);

  return (
    <>
      <FoodSetPresenter state={state} setState={setState} />
    </>
  );
};

export default FoodSetContainer;
