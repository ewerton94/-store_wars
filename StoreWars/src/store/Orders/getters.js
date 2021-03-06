
const getOrderById = (state, orderId) => {
  if (orderId === undefined) {
    return state.order
  } else {
    return state.orders.find((o) => o.id === orderId)
  }
}

const numberOrders = (state, getters) => {
  return state.orders.length
}

const numberItemsByOrder = (state, getters) => (orderId) => {
  var order = getOrderById(state, orderId)
  return order.items.length
}

const valueTotalByOrder = (state, getters) => (orderId) => {
  var order = getOrderById(state, orderId)
  return order.items.map((i) => Number(i.price) * Number(i.quantity)).reduce((a, b) => a + b, 0)
}

export {
  numberOrders,
  numberItemsByOrder,
  valueTotalByOrder

}
