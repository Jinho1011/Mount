import React, {useState} from 'react';
import TosPresenter from './TosPresenter';

export default () => {
  const [state, setState] = useState({
    firstCheck: false,
    secondCheck: false,
  });
  const AgreeButtonPress = () => {
    if (state.firstCheck !== state.secondCheck) {
      setState({firstCheck: true, secondCheck: true});
    } else {
      setState({
        firstCheck: !state.firstCheck,
        secondCheck: !state.secondCheck,
      });
    }
    console.log(state.firstCheck, state.secondCheck);
  };
  const firstCheckPress = () => {
    setState({...state, firstCheck: !state.firstCheck});
  };
  const secondCheckPress = () => {
    setState({...state, secondCheck: !state.secondCheck});
  };
  return (
    <TosPresenter
      state={state}
      AgreeButtonPress={AgreeButtonPress}
      firstCheckPress={firstCheckPress}
      secondCheckPress={secondCheckPress}
    />
  );
};
