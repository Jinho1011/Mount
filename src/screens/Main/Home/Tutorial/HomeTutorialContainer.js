import React, {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import {useDispatch} from 'react-redux';

import HomeTutorialPresenter from './HomeTutorialPresenter';

export default () => {
  const [state, setState] = useState({
    foods: [],
    recs: [],
    isLoaded: false,
  });

  useEffect(() => {
    const init = async () => {};
    init();
  }, []);

  return <HomeTutorialPresenter state={state} setState={setState} />;
};
