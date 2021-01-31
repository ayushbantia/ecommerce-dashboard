export const initialState = {
  user: null,
  user_category: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.user,
        user_category: action.user_category,
      };
    }
    case "SIGNOUT_USER": {
      return {
        ...state,
        user: null,
        user_category: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
