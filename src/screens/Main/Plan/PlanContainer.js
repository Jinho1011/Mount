import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import PlanPresenter from './PlanPresenter';

export default ({navigation, route}) => {
  const planners = useSelector(state => state.planners.planners);
  const [id, setId] = useState(route.params.id);
  const [state, setState] = useState({
    planner: planners.find(planner => planner.id === id),
  });

  useEffect(() => {
    console.log('🚀 ~ file: PlanContainer.js ~ line 11 ~ state', state);
    setState(prev => ({
      ...prev,
      planner: planners.find(planner => planner.id === id),
    }));
  }, [planners]);

  // useEffect(() => {}, [state]);

  return <PlanPresenter state={state} setState={setState} />;
};
