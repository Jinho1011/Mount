import React, {useState, useEffect} from 'react';
import {getDetail} from '../../../../api/api';
import {TransparentHeader} from '../../../../components/Header/TransparentHeader';
import RecreationSetPresenter from './RecreationSetPresenter';

const RecreationSetContainer = ({route}) => {
  const [state, setState] = useState({
    memberCnt: 1,
    teamCnt: 1,
    recSet: [],
    items: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetail('recSets', route.params?.id);
      let recSet = data.recSet;
      let items = recSet.items;

      items.map(item => {
        item.count = 1;
        return item;
      });

      setState(prev => ({
        ...prev,
        recSet,
        items,
      }));
    };
    init();
  }, [route.params?.id]);

  return (
    <>
      <RecreationSetPresenter state={state} setState={setState} />
    </>
  );
};

export default RecreationSetContainer;
