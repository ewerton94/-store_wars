
import { HTTPClient } from 'boot/axios'
import { handleError } from 'boot/exceptions'
// import { Notify } from 'quasar'

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

export {
  listOrders
}
