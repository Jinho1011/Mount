const initialState = {
  foods: [
    {displayType: 'long', title: 'title', image: '', id: 1},
    {displayType: 'long', title: 'title', image: '', id: 2},
    {displayType: 'long', title: 'title', image: '', id: 3},
    {displayType: 'long', title: 'title', image: '', id: 4},
    {displayType: 'long', title: 'title', image: '', id: 5},
    {displayType: 'long', title: 'title', image: '', id: 6},
  ],
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
