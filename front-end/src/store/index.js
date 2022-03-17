import { createStore } from 'vuex'
import state from '@/modules/store/state'
import * as actions from '../modules/store/actions'
import mutations from '../modules/store/mutations'
import * as getters from '@/modules/store/getters'
export default createStore({
  state: {
    ...state
  },
  getters: {
    ...getters
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  modules: {
  }
})
