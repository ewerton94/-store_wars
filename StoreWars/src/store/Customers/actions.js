
import { HTTPClient } from 'boot/axios'
import { handleError } from 'boot/exceptions'
// import { Notify } from 'quasar'

const listCustomers = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get('customers/')
      .then(async (suc) => {
        await commit('SET_CUSTOMERS', suc.data)
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
  listCustomers
}
