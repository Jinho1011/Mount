export const CREATE_PLANNER = 'CREATE_PLANNER';
export const ADD_ITEM = 'ADD_ITEM';
export const MODIFY_TITLE = 'MODIFY_TITLE';
export const UPDATE_PLANNER = 'UPDATE_PLANNER';

export const createPlanner = title => {
  return {type: CREATE_PLANNER, title};
};

export const addItem = (title, item) => {
  return {type: ADD_ITEM, title, item};
};

export const modifyPlannerTitle = (planner, title) => {
  return {type: MODIFY_TITLE, planner, title};
};

export const updatePlanner = planner => {
  return {type: UPDATE_PLANNER, planner};
};
