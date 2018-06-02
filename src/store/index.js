import Vue from 'vue'
import Vuex from 'vuex'

import searchResults from './search-results'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    searchResults
  }
})

export default store
