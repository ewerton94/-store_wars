import { createLocalVue } from '@vue/test-utils'
import state from '../../../src/store/Orders/state'
import * as actions from '../../../src/store/Orders/actions'
import * as mutations from '../../../src/store/Orders/mutations'
import Vuex from 'vuex'
import { HTTPClient } from '../../../src/boot/axios'
import * as All from 'quasar';
import { buildQuasarComponents, getMockResponse } from './utils'

const { Quasar } = All;

const components = buildQuasarComponents(All)

const response = getMockResponse()

jest.mock('../../../src/boot/axios', () => {
  return {
    HTTPClient: {
      get: jest.fn(),
    }
  };
});

HTTPClient.get.mockResolvedValue(response)

describe('actions', () => {
  const localVue = createLocalVue();
  localVue.use(Quasar, { components });
  localVue.use(Vuex); 
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: state,
      mutations: mutations,
      actions: actions
    })
  })

  it('List Order Mutation', async () => {
    mutations.SET_ORDERS(store.state, response.data)
    expect(store.state.orders).toEqual(response.data)
       
  })

  it('List Order action and mutation', async () => {
    await store.dispatch('listOrders').then(() => {
         expect(store.state.orders).toEqual(response.data)
       }).catch(async (e) => {
         console.log(e)
         ShowError
       })
  })
})