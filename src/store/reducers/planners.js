const initialState = {
  planners: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PLANNER': {
      const newPlanner = {
        id: Date.now(),
        title: action.title,
        memberCnt: 0,
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
    case 'ADD_PLANNER': {
      const planner = action.planner;

      return {
        ...state,
        planners: [...state.planners, planner],
      };
    }
    case 'ADD_PLANNERS': {
      const planners = action.planners;

      return {
        ...state,
        planners: [...state.planners, ...planners],
      };
    }
    case 'ADD_ITEM': {
      const id = action.id;
      const category = action.category;
      const newItem = action.item;

      const addedPlanners = state.planners.map(planner => {
        if (planner.id === id) {
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
      const id = action.id;
      const category = action.category;
      const memberCnt = action.memberCnt;
      const newItems = action.items;
      const targetPlannerItems = state.planners.find(e => e.id === id).items[
        category
      ];

      let combinedItems = [];
      if (newItems.length >= targetPlannerItems.length) {
        combinedItems = newItems.map(item => {
          const found = targetPlannerItems.find(e => e.id === item.id);
          if (found === undefined) {
            return item;
          } else {
            return {
              ...item,
              count: item.count + found.count,
            };
          }
        });
      } else {
        combinedItems = targetPlannerItems.map(item => {
          const found = newItems.find(e => e.id === item.id);
          if (found === undefined) {
            return item;
          } else {
            return {
              ...item,
              count: item.count + found.count,
            };
          }
        });
      }

      const addedPlanners = state.planners.map(planner => {
        if (planner.id === id) {
          return {
            ...planner,
            memberCnt,
            items: {
              ...planner.items,
              [category]: combinedItems,
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
      const id = action.id;
      const deletedPlanners = state.planners.filter((value, index, arr) => {
        return value.id !== id;
      });
      return {
        ...state,
        planners: deletedPlanners,
      };
    }
    case 'MODIFY_TITLE': {
      const planner = action.planner;
      const newTitle = action.title;
      const modifiedPlanners = state.planners.map(item => {
        if (item.id === planner.id) {
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
        if (item.id === planner.id) {
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
