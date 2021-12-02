import React , { useState, useEffect }from 'react';
import RecreationSetPresenter from './RecreationSetPresenter';

const RecreationSetContainer = () => {
  const [state, setState] = useState({
    memberCnt: 0,
    teamCnt: 0,
    recSet: [],
  })

  useEffect(() => {
    const init = async () => {
      let data = await fetch('api/detail/recSet');
      let recSet = JSON.parse(data._bodyInit);
      let items = recSet[0].items;
      items.map(item => {
        item['count'] = 0;
        return item;
      });

      setState(prev => ({
        ...prev,
        recSet,
        items
      }));
    };
    init();
  }, []);

  return (
    <>
      <RecreationSetPresenter state={state} setState={setState} />
    </>
  )
}

export default RecreationSetContainer;
