const SET_ORDERS = (state, payload) => {
  state.orders = payload
}
const SET_ORDER = (state, payload) => {
  state.orderUpdate = payload
}

const DELETE_ORDER = (state, id) => {
  var idRemover = 0
  state.orders.forEach((f, i) => {
    if (f.id === id) {
      idRemover = i
    }
  })
  state.orders.splice(idRemover, 1)
}

export {
  SET_ORDERS,
  SET_ORDER,
  DELETE_ORDER
}
