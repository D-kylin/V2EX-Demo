import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import API_CONFIG from '../api'

Vue.use(Vuex)

const state = {
  hotTopic: {},
  newTopic: {},
  nodeInfo: {},
  userHomePage: {}
}

const store = new Vuex.Store({
  state,
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})

export default store