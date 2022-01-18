const initialState = {
  planners: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PLANNER': {
      const newPlanner = {
        title: action.title,
        items: {
          rec: [],
          food: [],
        },
      };

      return {
        ...state,
        planners: [...state.planners, newPlanner],
      };
    }
    case 'ADD_ITEM': {
      const title = action.title;
      const category = action.category;
      const newItem = action.item;

      const addedPlanners = state.planners.map(planner => {
        if (planner.title == title) {
          return {
            ...planner,
            items: {
              ...planner.items,
              [category]: [...planner.items[category], newItem],
            },
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
      const category = action.category;
      const newItems = action.items;
      const addedPlanners = state.planners.map(planner => {
        if (planner.title == title) {
          return {
            ...planner,
            items: {
              ...planner.items,
              [category]: [...planner.items[category], ...newItems],
            },
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
