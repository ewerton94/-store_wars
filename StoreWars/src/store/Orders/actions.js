
import { HTTPClient } from 'boot/axios'
import { handleError } from 'boot/exceptions'
import { Notify } from 'quasar'

const listOrders = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get('orders/')
      .then(async (suc) => {
        await commit('SET_ORDERS', suc.data)
        resolve(suc.data)
      })
      .catch(async (err) => {
        err = await err
        handleError(err)
        reject(err)
      })
  })
}
const obterOrder = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get(`orders/${id}/`)
      .then(async (suc) => {
        await commit('SET_ORDER', suc.data)
        resolve(suc.data)
      })
      .catch(async (err) => {
        err = await err
        handleError(err)
        reject(err)
      })
  })
}

const createOrders = ({ commit }, order) => {
  return new Promise((resolve, reject) => {
    HTTPClient.post('orders/', order)
      .then(async (suc) => {
        Notify.create({
          type: 'positive',
          message: 'Pedido criado com sucesso'
        })
        resolve(suc.data)
      })
      .catch(async (err) => {
        err = await err
        handleError(err)
        reject(err)
      })
  })
}

const updateOrders = ({ commit }, order) => {
  return new Promise((resolve, reject) => {
    HTTPClient.put(`orders/${order.id}/`, order)
      .then(async (suc) => {
        Notify.create({
          type: 'positive',
          message: 'Pedido atualizado com sucesso'
        })
        resolve(suc.data)
      })
      .catch(async (err) => {
        err = await err
        handleError(err)
        reject(err)
      })
  })
}

const deleteOrders = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    HTTPClient.delete(`orders/${id}/`)
      .then(async (suc) => {
        Notify.create({
          type: 'positive',
          message: 'Removido com sucesso'
        })
        await commit('DELETE_ORDER', id)
        resolve(suc.data)
      })
      .catch(async (err) => {
        err = await err
        handleError(err)
        reject(err)
      })
  })
}

export {
  obterOrder,
  listOrders,
  createOrders,
  updateOrders,
  deleteOrders
}
