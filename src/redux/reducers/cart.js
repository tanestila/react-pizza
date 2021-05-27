import produce from "immer";

const initialState = {
  items: {},
  itemsCount: {},
  totalSum: 0,
  totalCount: 0,
};

const findPizzaId = (pizzaObj, array = []) => {
  return array.indexOf(
    array.find(
      (item) =>
        item.id === pizzaObj.id &&
        item.type === pizzaObj.type &&
        item.size === pizzaObj.size
    )
  );
};

const cart = (state = initialState, action) => {
  return produce(state, (draft) => {
    const calculateTotalSum = (items = {}) => {
      return Object.values(items)
        .flat()
        .reduce((sum, value) => sum + value.totalPrice, 0);
    };

    const calculateTotalCount = (items = {}) => {
      return Object.values(items)
        .flat()
        .reduce((sum, value) => sum + value.count, 0);
    };

    if (action.type === "ADD_PIZZA_CART") {
      let index = findPizzaId(action.payload, draft.items[action.payload.id]);
      if (index !== -1) {
        let pizzaObj = draft.items[action.payload.id][index];
        draft.items[action.payload.id][index].count += 1;
        draft.items[action.payload.id][index].totalPrice =
          pizzaObj.count * pizzaObj.price;
      } else {
        let pizzaObj = {
          ...action.payload,
          count: 1,
          totalPrice: action.payload.price,
        };
        if (draft.items[action.payload.id])
          draft.items[action.payload.id].push(pizzaObj);
        else draft.items[action.payload.id] = [pizzaObj];
      }
      draft.totalSum = calculateTotalSum(draft.items);
      draft.totalCount = calculateTotalCount(draft.items);
    }
    if (action.type === "INCREASE_PIZZA") {
      let pizzaObj = draft.items[action.payload.id][action.payload.index];
      draft.items[action.payload.id][action.payload.index].count += 1;
      draft.items[action.payload.id][action.payload.index].totalPrice =
        pizzaObj.count * pizzaObj.price;
      draft.totalSum = calculateTotalSum(draft.items);
      draft.totalCount = calculateTotalCount(draft.items);
    }
    if (action.type === "DECREASE_PIZZA") {
      let pizzaObj = draft.items[action.payload.id][action.payload.index];
      if (pizzaObj.count > 0) {
        draft.items[action.payload.id][action.payload.index].count -= 1;
        draft.items[action.payload.id][action.payload.index].totalPrice =
          pizzaObj.count * pizzaObj.price;
      }
      draft.totalSum = calculateTotalSum(draft.items);
      draft.totalCount = calculateTotalCount(draft.items);
    }
    if (action.type === "DELETE_PIZZA") {
      draft.items[action.payload.id].splice(action.payload.index, 1);
      draft.totalSum = calculateTotalSum(draft.items);
      draft.totalCount = calculateTotalCount(draft.items);
    }
    if (action.type === "CLEAR_CART") {
      draft.items = {};
    }
  });
};

export default cart;
