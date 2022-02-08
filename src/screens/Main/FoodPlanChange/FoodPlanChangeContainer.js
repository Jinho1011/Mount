import React, {useEffect, useState} from 'react';
import FoodPlanChangePresenter from './FoodPlanChangePresenter';

const FoodPlanChangeContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    memberCnt: 1,
    ...route.params.isPressedArr,
  });

  // const [memberCnt, setMemberCnt] = useState(1);
  useEffect(() => {
    const init = () => {
      let items = route.params.isPressedArr;
      items.map(item => {
        item.count = state.memberCnt;
        return item;
      });
      setState(prev => ({
        ...prev,
        items,
        // memberCnt,
      }));
    };
    init();
  }, []);

  useEffect(() => {}, []);

  return <FoodPlanChangePresenter state={state} setState={setState} />;
};

export default FoodPlanChangeContainer;
