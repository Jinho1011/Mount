import React, { useState, useEffect } from 'react';
import RecreationSinglePresenter from './RecreationSinglePresenter';

const RecreationSingleContainer = () => {
  const [state, setState] = useState({
    memberCnt: 0,
    teamCnt: 0,
    recSingle: [],
    items: [],
  })

  useEffect(() => {
    const init = async () => {
      let data = await fetch('/api/detail/recSingle');
      let recSingle = JSON.parse(data._bodyInit);
      setState(prev => ({
        ...prev,
        recSingle,
      }));
    };
    init();
  }, []);

  return (
    <>
      <RecreationSinglePresenter state={state} setState={setState} />
    </>
  )
}

export default RecreationSingleContainer;
