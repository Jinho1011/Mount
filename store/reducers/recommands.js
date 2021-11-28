const initialState = {
  foods: [],
  recs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_FOODS': {
      const FOODS = action.foods;
      return {
        ...state,
        foods: FOODS,
      };
    }
    case 'INIT_RECS': {
      const RECS = action.recs;
      return {
        ...state,
        recs: RECS,
      };
    }
    default:
      return state;
  }
};
