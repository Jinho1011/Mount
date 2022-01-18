import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import PlanPresenter from './PlanPresenter';

export default ({navigation, route}) => {
  const planners = useSelector(state => state.planners.planners);
  const [state, setState] = useState({
    plan: planners.filter(plan => plan.title === route.params.title)[0],
  });

  useEffect(() => {
    setState(prev => ({
      ...prev,
      plan: planners.filter(plan => plan.title === route.params.title)[0],
    }));
  }, [planners]);

  return <PlanPresenter state={state} setState={setState} />;
};
