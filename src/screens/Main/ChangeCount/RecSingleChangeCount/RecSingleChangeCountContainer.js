import React, {useEffect, useState} from 'react';
import RecSingleChangeCountPresenter from './RecSingleChangeCountPresenter';

const RecSingleChangeCountContainer = ({route}) => {
  const [state, setState] = useState({
    isLoaded: false,
    ...route.params._state,
  });
  useEffect(() => {
    (async () => {
      let recSingle = route.params._state.recSingle;

      setState({
        isLoaded: true,
        ...route.params._state,
      });
    })();
  }, [route.params._state]);
  return (
    <>
      {state.isLoaded ? (
        <RecSingleChangeCountPresenter state={state} setState={setState} />
      ) : (
        <></>
      )}
    </>
  );
};

export default RecSingleChangeCountContainer;
