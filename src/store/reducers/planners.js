const initialState = {
  planners: [],
};

const initialPlanner = {
  title: '',
  items: [
    // {id: 1, type:rec, title: '음식1', price: 12000, count: 3, desc: 'asd', img: '123'},
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PLANNER': {
      let planner = initialPlanner;
      planner.title = action.title;
      console.log('🚀 ~ file: planners.js ~ line 16 ~ planner', planner);

      return {
        ...state,
        planners: [...state.planners, planner], //
      };
    }
    case 'ADD_ITEM': {
      const title = action.title;
      const newItem = action.item;
      const addedPlanners = state.planners.map(item => {
        if (item.title == title) {
          return {
            ...item,
            items: [...item.items, newItem],
          };
        } else {
          return item;
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
