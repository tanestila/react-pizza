import produce from "immer";

const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  return produce(state, (draft) => {
    if (action.type === "SET_PIZZAS") {
      draft.items = action.payload;
      draft.isLoaded = true;
    }
    if (action.type === "SET_LOADED") {
      draft.isLoaded = action.payload;
    }
  });
};

export default pizzas;
