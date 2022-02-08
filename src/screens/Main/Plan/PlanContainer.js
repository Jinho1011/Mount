import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import PlanPresenter from './PlanPresenter';

export default ({navigation, route}) => {
  const planners = useSelector(state => state.planners.planners);
  const [state, setState] = useState({
    planner: planners.find(planner => planner.id === route.params.id),
  });

  return <PlanPresenter state={state} setState={setState} />;
};
