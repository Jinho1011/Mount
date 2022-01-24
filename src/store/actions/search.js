export const ADD_RECENT = 'ADD_RECENT';
export const DELETE_RECENT = 'DELETE_RECENT';

export const addItem = name => {
  return {type: ADD_RECENT, name};
};

export const deletePlanner = name => {
  return {type: DELETE_RECENT, name};
};
