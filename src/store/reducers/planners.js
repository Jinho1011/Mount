const initialState = {
  planners: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PLANNER': {
      let planner = {
        title: '',
        items: [],
      };
      planner.title = action.title;

      return {
        ...state,
        planners: [...state.planners, planner],
      };
    }
    case 'ADD_ITEM': {
      const title = action.title;
      const newItem = action.item;
      const addedPlanners = state.planners.map(planner => {
        if (planner.title == title) {
          return {
            ...planner,
            items: [...planner.items, newItem],
          };
        } else {
          return planner;
        }
      });

      return {
        ...state,
        planners: addedPlanners,
      };
    }
    case 'ADD_ITEMS': {
      const title = action.title;
      const newItems = action.items;
      const addedPlanners = state.planners.map(planner => {
        if (planner.title == title) {
          return {...planner, items: [...planner.items, ...newItems]};
        } else {
          return planner;
        }
      });

      return {
        ...state,
        planners: addedPlanners,
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
