const initialState = {
  HomeFoodDetail: 0,
  HomeRecDetail: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE': {
      const screen = action.screen;
      const y = action.y;
      return {...state, [screen]: y};
    }
    default:
      return state;
  }
};
