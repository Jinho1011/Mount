import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import PlanPresenter from './PlanPresenter';
import {PLANNER_KEY, storeData} from '../../../api/storage';

export default ({navigation, route}) => {
  const planners = useSelector(state => state.planners.planners);
  const [id, setId] = useState(route.params.id);
  const [state, setState] = useState({
    planner: planners.find(planner => planner.id === id),
  });

  useEffect(() => {
    storeData(PLANNER_KEY, planners);
    setState(prev => ({
      ...prev,
      planner: planners.find(planner => planner.id === id),
    }));
  }, [planners]);

  // useEffect(() => {}, [state]);

  return <PlanPresenter state={state} setState={setState} />;
};
