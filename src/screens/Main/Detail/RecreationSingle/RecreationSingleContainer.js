import React, {useState, useEffect} from 'react';
import {getRecById} from '../../../../api/api';
import RecreationSinglePresenter from './RecreationSinglePresenter';

const RecreationSingleContainer = ({route}) => {
  const [state, setState] = useState({
    memberCnt: 1,
    teamCnt: 1,
    componentCnt: 1,
    recSingle: [],
    components: [],
  });

  useEffect(() => {
    const init = async () => {
      let recs = await getRecById(route.params?.id);
      let recSingle = recs;
      let components = recSingle.person_item;
      // const newComponents = components.map(component => {
      //   return {name: component, count: 1};
      // });
      setState(prev => ({
        ...prev,
        recSingle,
        components: components,
      }));
    };
    init();
  }, [route.params?.id]);

  return <RecreationSinglePresenter state={state} setState={setState} />;
};

export default RecreationSingleContainer;
