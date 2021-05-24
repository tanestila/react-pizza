export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});

export const increasePizza = (id, index) => ({
  type: "INCREASE_PIZZA",
  payload: { id, index },
});

export const decreasePizza = (id, index) => ({
  type: "DECREASE_PIZZA",
  payload: { id, index },
});

export const deletePizza = (id, index) => ({
  type: "DELETE_PIZZA",
  payload: { id, index },
});
