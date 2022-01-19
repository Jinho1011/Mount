export const CREATE_PLANNER = 'CREATE_PLANNER';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEMS = 'ADD_ITEMS';
export const MODIFY_TITLE = 'MODIFY_TITLE';
export const UPDATE_PLANNER = 'UPDATE_PLANNER';

export const createPlanner = title => {
  return {type: CREATE_PLANNER, title};
};

export const addItem = (id, item, category) => {
  return {type: ADD_ITEM, id, item, category};
};

export const addItems = (id, items, category) => {
  return {type: ADD_ITEMS, id, items, category};
};

export const modifyPlannerTitle = (planner, title) => {
  return {type: MODIFY_TITLE, planner, title};
};

export const updatePlanner = planner => {
  return {type: UPDATE_PLANNER, planner};
};
