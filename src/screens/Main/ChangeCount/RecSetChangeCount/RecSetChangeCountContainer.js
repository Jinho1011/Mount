import React, {useEffect, useState} from 'react';
import RecSetChangeCountPresenter from './RecSetChangeCountPresenter';

const RecSetChangeCountContainer = ({route}) => {
  const [state, setState] = useState({
    isLoaded: false,
    ...route.params._state,
  });
  useEffect(() => {
    (async () => {
      let recSet = route.params._state.recSet;
      let memberCnt = route.params._state.memberCnt;
      let teamCnt = route.params._state.teamCnt;
      let items = route.params._state.items;

      items.map(item => {
        item.count = teamCnt;
        return item;
      });

      setState({
        isLoaded: true,
        ...route.params._state,
      });
    })();
  }, [route.params._state]);

  return (
    <>
      {state.isLoaded ? (
        <RecSetChangeCountPresenter state={state} setState={setState} />
      ) : (
        <></>
      )}
    </>
  );
};

export default RecSetChangeCountContainer;
