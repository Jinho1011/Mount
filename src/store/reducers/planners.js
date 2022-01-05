const initialState = {
  planners: [],
};

export default (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case 'ADD_PLANNER': {
      const planner = action.planner;
      return {
        ...state,
        planners: [...planners, planner],
      };
    }
    case 'DELETE_PLANNER': {
      const planner = action.planner;
      const deletedPlanners = state.planners.filter((value, index, arr) => {
        return value.id != planner.id && value.type != planner.type;
      });
      return {
        ...state,
        planners: deletedPlanners,
      };
    }
    case 'MODIFY_TITLE': {
      const planner = action.planner;
      const newTitle = action.newTitle;
      const modifiedPlanners = state.planners.map(item => {
        if (item.id == planner.id && item.type == planner.type) {
          return {...item, title: newTitle};
        } else {
          return item;
        }
      });
      return {
        ...state,
        planners: modifiedPlanners,
      };
    }
    case 'UPDATE_PLANNER': {
      const planner = action.planner;
      const modifiedPlanners = state.planners.map(item => {
        if (item.id == planner.id && item.type == planner.type) {
          return planner;
        } else {
          return item;
        }
      });
      return {
        ...state,
        planners: modifiedPlanners,
      };
    }
    default:
      return state;
  }
};
