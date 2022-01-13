import React, {useState, useEffect} from 'react';
import {getDetail} from '../../../../api/api';
import RecreationSinglePresenter from './RecreationSinglePresenter';

const RecreationSingleContainer = ({route}) => {
  const [state, setState] = useState({
    memberCnt: 1,
    teamCnt: 1,
    recSingle: {},
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetail('recSingles', route.params?.id);
      let recSingle = data.recSingle;
      setState(prev => ({
        ...prev,
        recSingle,
      }));
    };
    init();
  }, [route.params?.id]);

  return <RecreationSinglePresenter state={state} setState={setState} />;
};

export default RecreationSingleContainer;
