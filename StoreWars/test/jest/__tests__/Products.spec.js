import { createLocalVue } from '@vue/test-utils'
import state from '../../../src/store/Products/state'
import * as actions from '../../../src/store/Products/actions'
import * as mutations from '../../../src/store/Products/mutations'
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

  it('List Product Mutation', async () => {
    mutations.SET_PRODUCTS(store.state, response.data)
    expect(store.state.products).toEqual(response.data)
       
  })

  it('List Product action and mutation', async () => {
    await store.dispatch('listProducts').then(() => {
         expect(store.state.products).toEqual(response.data)
       }).catch(async (e) => {
         console.log(e)
         ShowError
       })
  })
})