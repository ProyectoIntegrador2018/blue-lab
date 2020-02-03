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
    details_item: [],
    id_details: "5e327f597df5a93624913e5c",
    tag_search: "tag1"
  },
  actions: {
    getCall({commit},payload){
      Vue.axios.get(payload.get).then(result => {
        commit(payload.mutation, result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },

    loadItems({dispatch}) {
      const payload = {
        mutation: 'SAVE_ITEMS',
        get: 'items'
      }
      dispatch('getCall', payload)
    },
    loadHome({dispatch}) {
      const payload = {
        mutation: 'SAVE_HOME',
        get: 'url/home'
      }
      dispatch('getCall', payload)
    },
    loadDistinctTags({dispatch}) {
      const payload = {
        mutation: 'SAVE_DISTINCT_TAGS',
        get: 'tags'
      }
      dispatch('getCall', payload)
    },
    loadDetailsItem({dispatch},id) {
      const payload = {
        mutation: 'SAVE_DETAILS_ITEM',
        get: 'item/' + id
      }
      dispatch('getCall', payload)
    },
    loadItemsByTag({dispatch},tag) {
      const payload = {
        get: 'itemsTag/' + tag,
        mutation: 'ITEMS_BY_TAG'
      }
      dispatch('getCall', payload)
    }
  },
  mutations: {
    SAVE_ITEMS(state, items) {
      state.items = items;
    },

    SAVE_HOME(state, home_aux) {
      const home = home_aux[0]
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
