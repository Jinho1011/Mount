import React, {useState, useEffect} from 'react';
import {getDetail} from '../../../../api/api';
import RecreationSinglePresenter from './RecreationSinglePresenter';

const RecreationSingleContainer = ({route}) => {
  const [state, setState] = useState({
    memberCnt: 1,
    teamCnt: 1,
    recSingle: [],
    components: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetail('recSingles', route.params?.id);
      let recSingle = data.recSingle;
      let components = recSingle.components;
      const newComponents = components.map(component => {
        return {name: component, count: 1};
      });
      setState(prev => ({
        ...prev,
        recSingle,
        components: newComponents,
      }));
    };
    init();
  }, [route.params?.id]);

  return <RecreationSinglePresenter state={state} setState={setState} />;
};

export default RecreationSingleContainer;
