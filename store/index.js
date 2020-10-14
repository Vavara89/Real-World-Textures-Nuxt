import Vuex from 'vuex';
import main from '@/collectors/main';
import commercial from '@/collectors/commercial';
import users from '@/collectors/users';
import profile from '@/collectors/profile';

const createStore = () => {
  return new Vuex.Store({
    state: {
      pager: null,
      textures: null,
      filter: null,
      category: null,
      bookmarks: null,
      textBlocks: null,
      prices: null,
      forDownload: [],
      checkDownload:[]
    },
    mutations: {
      setPager (state, pager) {
        state.pager = pager;
      },
      setTextures (state, textures) {
        state.textures = textures;
      },
      setFilter (state, filter) {
        state.filter = filter;
      },
      setCategory (state, category) {
        state.category = category;
      },
      setBookmarks (state, bookmarks) {
        state.bookmarks = bookmarks;
      },
      setTextBlocks (state, textBlocks) {
        state.textBlocks = textBlocks;
      },
      setPrices (state, products) {
        state.prices = products;
      },
      setForDownload(state, item){
        state.forDownload = item;
      },
      setCheckDownload(state, run){
         state.checkDownload = run;
      }
    },
    actions: {
      setCheckDownload(vuexContext, runFor){
        vuexContext.commit('checkDownload', runFor);
      },
      setPager (vuexContext, article) {
        vuexContext.commit('setArticle', article);
      },
      setTextures (vuexContext, pager) {
        vuexContext.commit('setPager', pager);
      },
      setFilter (vuexContext, data) {
        vuexContext.commit('serFilter', data);
      },
      setCategory (vuexContext, data) {
        vuexContext.commit('setCategory', data);
      },
      setBookmarks (vuexContext, data) {
        vuexContext.commit('setBookmarks', data);
      },
      setForDownload(vuexContext, data){
        vuexContext.commit('setForDownload', data);
      },
      async nuxtServerInit ({ dispatch, commit, state }, { req }) {
        await main.text_blocks().then(response => {
          commit('setTextBlocks', response.data.results);
        });
        await commercial.prices().then(response => {
          commit('setPrices', response.data.results);
        });
        if(state['auth']['user'] && state['auth']['user']['user']){
          const token = state['auth']['user']['user']['token'];
          users.setToken(token);
          await  users.downloading_states().then(response => {
            if (response.data){
              commit('setCheckDownload', response.data);
            }
          });
        }

      }
    },
    getters: {
      filter (state) {
        return state.filter;
      },
      textures (state) {
        return state.textures;
      },
      pager (state) {
        return state.pager;
      },
      category (state) {
        return state.category;
      },
      bookmarks (state) {
        return state.bookmarks;
      },
      textBlocks (state) {
        return state.textBlocks;
      },
      prices (state) {
        return state.prices;
      },
      subscription(state){
        return state.auth.user.user.subscription;
      },
      forDownload(state){
        return state.forDownload;
      },
      checkDownload(state){
        return state.checkDownload;
      }
    }
  });
};
export default createStore;
