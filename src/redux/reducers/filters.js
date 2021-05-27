import produce from "immer";

const initialState = {
  sortBy: { type: "popular", order: "desc" },
  category: null,
};

const filters = (state = initialState, action) => {
  return produce(state, (draft) => {
    if (action.type === "SET_SORT_BY") {
      draft.sortBy = action.payload;
    }
    if (action.type === "SET_CATEGORY") {
      draft.category = action.payload;
    }
  });
};

export default filters;
