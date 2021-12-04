const initialState = {
  foods: [],
  recs: [],
  signupSuccess: [],
  loginSuccess: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER': {
      return {...state, loginSuccess: action.payload};
    }
    case 'SIGNUP_USER': {
      console.log(action.payload);
      return {...state, signupSuccess: action.payload};
    }
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
