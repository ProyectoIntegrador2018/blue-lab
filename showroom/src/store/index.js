import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "https://immense-tundra-47885.herokuapp.com/";

export default new Vuex.Store({
  state: {
    items: [],
    tags: ['tag1','tag2','tag3'],
    title_cont_1: "",
    title_cont_2: "",
    title_cont_3: "",
    cont_1: 0,
    cont_2: 0,
    cont_3: 0,
    distinct_tags: [],
    details_item: []
  },
  actions: {
    loadItems({commit}) {
      Vue.axios.get('items').then(result => {commit('SAVE_ITEMS', result.data);
      }).catch(error => {throw new Error(`API ${error}`)});
    },
    loadHome({commit}) {
      Vue.axios.get('url/home').then(result => {commit('SAVE_HOME', result.data[0]);
      }).catch(error => {throw new Error(`API ${error}`)});
    },
    loadDistinctTags({commit}) {
      Vue.axios.get('tags').then(result => {
        commit('SAVE_DISTINCT_TAGS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    loadDetailsItem({commit},id) {
      Vue.axios.get('item/'+ id).then(result => {commit('SAVE_DETAILS_ITEM', result.data);
      }).catch(error => {throw new Error(`API ${error}`)});
    },
    loadItemsByTag({commit},tag) {
      Vue.axios.get('itemsTag/'+ tag).then(result => {commit('ITEMS_BY_TAG', result.data);
      }).catch(error => {throw new Error(`API ${error}`)});
    }
  },
  mutations: {
    SAVE_ITEMS(state, items) {
      state.items = items;
    },
    SAVE_HOME(state, home) {
      state.title_cont_1 = home.title_cont_1;
      state.title_cont_2 = home.title_cont_2;
      state.title_cont_3 = home.title_cont_3;
      state.cont_1 = home.cont_1;
      state.cont_2 = home.cont_2;
      state.cont_3 = home.cont_3;
      state.tags = home.navbar;
    },
    SAVE_DISTINCT_TAGS(state,distinct_tags){
      state.distinct_tags = distinct_tags;
    },
    SAVE_DETAILS_ITEM(state,details){
      state.details_item = details;
    },
    ITEMS_BY_TAG(state,items){
      state.items = items;
    },
  },
  modules: {
  }
})
