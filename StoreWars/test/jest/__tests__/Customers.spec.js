import { createLocalVue } from '@vue/test-utils'
import state from '../../../src/store/Customers/state'
import * as actions from '../../../src/store/Customers/actions'
import * as mutations from '../../../src/store/Customers/mutations'
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

  it('List Customer Mutation', async () => {
    mutations.SET_CUSTOMERS(store.state, response.data)
    expect(store.state.customers).toEqual(response.data)
       
  })

  it('List Customer action and mutation', async () => {
    await store.dispatch('listCustomers').then(() => {
         expect(store.state.customers).toEqual(response.data)
       }).catch(async (e) => {
         console.log(e)
         ShowError
       })
  })
})