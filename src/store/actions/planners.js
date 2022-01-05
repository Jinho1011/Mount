export const ADD_PLANNER = 'ADD_PLANNER';
export const DELETE_PLANNER = 'DELETE_PLANNER';
export const MODIFY_TITLE = 'MODIFY_TITLE';
export const UPDATE_PLANNER = 'UPDATE_PLANNER';

export const addPlanner = planner => {
  return {type: ADD_PLANNER, planner};
};

export const deletePlanner = planner => {
  return {type: DELETE_PLANNER, planner};
};

export const modifyPlannerTitle = (planner, title) => {
  return {type: MODIFY_TITLE, planner, title};
};

export const updatePlanner = planner => {
  return {type: UPDATE_PLANNER, planner};
};
