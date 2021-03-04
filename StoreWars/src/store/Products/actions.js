
import { HTTPClient } from 'boot/axios'
import { handleError } from 'boot/exceptions'
// import { Notify } from 'quasar'

const listProducts = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get('products/')
      .then(async (suc) => {
        await commit('SET_PRODUCTS', suc.data)
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
  listProducts
}
