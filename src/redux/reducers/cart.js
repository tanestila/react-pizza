const initialState = {
  items: {},
  itemsCount: {},
  totalSum: 0,
  totalCount: 0,
};

const findPizzaId = (pizzaObj, array) => {
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
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      let newItems;
      if (state.items[action.payload.id]) {
        let index = findPizzaId(action.payload, state.items[action.payload.id]);
        newItems =
          index !== -1
            ? state.items[action.payload.id].map((item, i) => {
                if (index === i)
                  item = {
                    ...item,
                    count: ++item.count,
                    totalPrice: item.count++ * item.price,
                  };
                return item;
              })
            : [
                ...state.items[action.payload.id],
                {
                  ...action.payload,
                  count: 1,
                  totalPrice: action.payload.price,
                },
              ];
      } else {
        newItems = [
          { ...action.payload, count: 1, totalPrice: action.payload.price },
        ];
      }
      // newItems = !state.items[action.payload.id]
      //   ? [action.payload]
      //   : [...state.items[action.payload.id], action.payload];
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: newItems,
        },
        itemsCount: {
          ...state.itemsCount,
          [action.payload.id]: newItems.reduce(
            (sum, item) => sum + item.count,
            0
          ),
        },
        totalSum: state.totalSum + action.payload.price,
        // totalCount: [].concat.apply([], Object.values(newItems)).length,
        totalCount: ++state.totalCount,
      };
    }

    case "INCREASE_PIZZA":
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: state.items[action.payload.id].map(
            (item, index) => {
              if (index === action.payload.index)
                return {
                  ...item,
                  count: ++item.count,
                  totalPrice: ++item.count * item.price,
                };
              else return item;
            }
          ),
        },
        totalSum: state.totalSum + action.pizza.price,
        totalCount: ++state.totalCount,
      };
    case "DECREASE_PIZZA":
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: state.items[action.payload.id].map(
            (item, index) => {
              if (index === action.payload.index)
                if (item.count > 0)
                  return {
                    ...item,
                    count: --item.count,
                    totalPrice: --item.count * item.price,
                  };
                else return item;
            }
          ),
        },
        totalSum: state.totalSum - action.pizza.price,
        totalCount: --state.totalCount,
      };

    case "DELETE_PIZZA":
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: [
            ...state.items[action.payload.id].slice(0, action.payload.index),
            ...state.items[action.payload.id].slice(action.payload.index + 1),
          ],
        },
      };

    default:
      return state;
  }
};

export default cart;
