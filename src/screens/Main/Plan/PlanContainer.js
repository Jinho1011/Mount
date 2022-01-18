import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import PlanPresenter from './PlanPresenter';

export default ({navigation, route}) => {
  const planners = useSelector(state => state.planners.planners);
  const [state, setState] = useState({
    plan: planners.filter(plan => plan.title === route.params.title)[0],
  });

  useEffect(() => {}, []);

  return <PlanPresenter state={state} setState={setState} />;
};
