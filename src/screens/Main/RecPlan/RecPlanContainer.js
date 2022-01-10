import React, {useEffect, useState} from 'react';
import {getDetails} from '../../../api/api';
import RecPlanPresenter from './RecPlanPresenter';

const RecPlanContainer = () => {
  const [state, setState] = useState({
    teamCnt: 1,
    memberCnt: 1,
    items: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetails('recSingles');
      let items = data.recSingles;

      items.map(item => {
        item.count = 0;
        return item;
      });

      setState(prev => ({
        ...prev,
        items,
      }));
    };
    init();
  }, []);

  return <RecPlanPresenter state={state} setState={setState} />;
};

export default RecPlanContainer;
