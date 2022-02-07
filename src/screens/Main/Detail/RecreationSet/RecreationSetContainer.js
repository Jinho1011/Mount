import React, {useState, useEffect} from 'react';
import {getRecSets, getRecs} from '../../../../api/api';
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
      let data = await getRecSets();
      let recs = await getRecs();
      let recSet = data.find(element => element.id === route.params.id);
      let recs_ids = recSet.recs_ids;
      let items = [];
      for (let i = 0; i < recs_ids.length; i++) {
        for (let j = 0; j < recs.length; j++) {
          if (recs[j].id + '' === recs_ids[i]) {
            items.push(recs[j]);
          }
        }
      }

      items.map(item => {
        item.count = 1;
        return item;
      });

      setState(prev => ({
        ...prev,
        recSet,
        items: items,
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
