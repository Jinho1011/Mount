import React, {useEffect, useState} from 'react';
import RecPlanChangePresenter from './RecPlanChangePresenter';

const RecPlanChangeContainer = ({navigation, route}) => {
  const [state, setState] = useState({
    memberCnt: 1,
    teamCnt: 1,
    ...route.params.isPressedArr,
  });
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
  return <RecPlanChangePresenter state={state} setState={setState} />;
};

export default RecPlanChangeContainer;
