const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECENT': {
      const name = action.name;
      return [...state, name];
    }
    case 'DELETE_RECENT': {
      const name = action.name;
      return state.filter(item => item !== name);
    }
    default:
      return state;
  }
};
