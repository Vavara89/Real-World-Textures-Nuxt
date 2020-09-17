import Vuex from 'vuex';
import main from "@/collectors/main";

const createStore = () => {
  return new Vuex.Store({
    state: {
      pager: null,
      textures: null,
      filter: null,
      category: null,
      bookmarks: null,
      textBlocks: null,
    },
    mutations: {
      setPager(state, pager) {
        state.pager = pager;
      },
      setTextures(state, textures) {
        state.textures = textures;
      },
      setFilter(state, filter) {
        state.filter = filter;
      },
      setCategory(state, category) {
        state.category = category;
      },
      setBookmarks(state, bookmarks) {
        state.bookmarks = bookmarks;
      },
      setTextBlocks(state, textBlocks){
        state.textBlocks = textBlocks;
      }
    },
    actions: {
      setPager(vuexContext, article) {
        vuexContext.commit('setArticle', article);
      },
      setTextures(vuexContext, pager) {
        vuexContext.commit('setPager', pager);
      },
      setFilter(vuexContext, data) {
        vuexContext.commit('serFilter', data);
      },
      setCategory(vuexContext, data) {
        vuexContext.commit('setCategory', data);
      },
      setBookmarks(vuexContext, data) {
        vuexContext.commit('setBookmarks', data);
      },
      async nuxtServerInit ({ commit }, { req }) {
      await main.text_blocks().then(response => {
         commit('setTextBlocks', response.data.results);
       }).catch((error)=>{
       });
      }
    },
    getters: {
      filter(state) {
        return state.filter;
      },
      textures(state) {
        return state.textures;
      },
      pager(state) {
        return state.pager;
      },
      category(state) {
        return state.category;
      },
      bookmarks(state) {
        return state.bookmarks;
      },
      textBlocks(state){
        return state.textBlocks;
      }
    }
  });
};
export default createStore;
