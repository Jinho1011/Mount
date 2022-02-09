import React, {useState, useEffect} from 'react';

import HomeTutorialPresenter from './HomeTutorialPresenter';

export default () => {
  const [state, setState] = useState({
    imgs: [],
    isLoaded: false,
  });

  useEffect(() => {
    const init = async () => {
      const data = await fetch(
        'https://62012796fdf5090017249898.mockapi.io/images',
      );
      const imgs = await data.json();
      setState(prev => ({...prev, imgs: imgs}));
    };
    init();
    setState(prev => ({...prev, isLoaded: true}));
  }, []);

  return <HomeTutorialPresenter state={state} setState={setState} />;
};
