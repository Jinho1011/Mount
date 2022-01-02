import React, {useState, useEffect} from 'react';
import {getDetail} from '../../../../api/api';
import RecreationSetPresenter from './RecreationSetPresenter';

const RecreationSetContainer = ({route}) => {
  const [state, setState] = useState({
    memberCnt: 0,
    teamCnt: 0,
    recSet: [],
  });

  useEffect(() => {
    const init = async () => {
      console.log(route.parmas);
      let data = await getDetail('recSets', route.parmas?.id);
      let recSet = JSON.parse(data._bodyInit);
      let items = recSet[0].items;
      items.map(item => {
        item.count = 0;
        return item;
      });

      setState(prev => ({
        ...prev,
        recSet,
        items,
      }));
    };
    init();
  }, []);

  return (
    <>
      <RecreationSetPresenter state={state} setState={setState} />
    </>
  );
};

export default RecreationSetContainer;
