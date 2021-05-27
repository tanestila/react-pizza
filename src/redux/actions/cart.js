export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});

export const increasePizza = (id, index, pizza) => ({
  type: "INCREASE_PIZZA",
  payload: { id, index },
  pizza,
});

export const decreasePizza = (id, index, pizza) => ({
  type: "DECREASE_PIZZA",
  payload: { id, index },
  pizza,
});

export const deletePizza = (id, index, pizza) => ({
  type: "DELETE_PIZZA",
  payload: { id, index },
  pizza,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
