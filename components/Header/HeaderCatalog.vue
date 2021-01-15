<template>
  <header class="header catalog header-signup">
    <div class="header-inner">
      <div class="header__flex">
        <div class="logo">
          <div class="header__logo">
            <nuxt-link to="/" class="header-logo">
              <SvgIconLogo />
            </nuxt-link>
          </div>
        </div>
        <div class="left-holder">
          <div class="search-menu-container">
            <header-search />
            <div class="header-nav catalog-nav hide-on-md-down">
              <ul class="menu">
                <li
                  v-for="item in catalogMenu"
                  @click="hideMenu()"
                  class="menu-item"
                >
                  <nuxt-link :to="item.link" @click.native='setRedirectUrl(item.link)'> {{ item.title }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="header-nav">
          <input id="menu-btn" class="menu-btn" type="checkbox" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon" />
          </label>

          <ul class="menu">
            <li
              class="hide-on-md-up menu-item"
              v-for="item in catalogMenu"
              @click="hideMenu()"
            >
              <nuxt-link :to="item.link" @click.native='setRedirectUrl(item.link)'> {{ item.title }}</nuxt-link>
            </li>
            <!-- <div class="line"></div> -->
            <li
              v-for="item in mainMenu"
              class="menu-item"
              @click="hideMenu()"
            >
              <nuxt-link :to="item.link"> {{ item.title }}</nuxt-link>
            </li>

            <template v-if="!getIsLogged()">
              <li @click="hideMenu()" class="menu-item">
                <nuxt-link to="/login"> Log In</nuxt-link>
              </li>
              <li class="header-button menu-item" @click="hideMenu()">
                <nuxt-link to="/signup"> Sign Up</nuxt-link>
              </li>
            </template>
            <template v-if="getIsLogged()">
              <li class="header-account menu-item">
                <a
                  class="icon"
                  @click="showAccount('again')"
                  @mouseover="hover = true"
                  @tap="hover = true"
                  @mouseleave="trigger()"
                  >Account</a
                >
                <div
                  v-if="account || hover"
                  v-click-outside="externalClick"
                  class="missing"
                  id="profile-menu"
                  @mouseover="trigger('on')"
                  @mouseleave="hover = false"
                >
                  <div class="logmenu">
                    <div class="logmenu-top">
                      <p @click="toggleProfileMenu()" class="close-profile-menu hide-on-md-up">back</p>
                      <p>{{ credits }} Subscription Credits</p>
                      <p>{{ profile }}</p>
                    </div>
                    <ul>
                      <li v-for="item in profileMenu" class="menu-item">
                        <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
                      </li>
                      <li class="logout menu-item">
                        <a @click="logout">Log out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li
                v-if="getIsLogged()"
                style="cursor: pointer"
                class="header-fav view-mobile menu-item"
                @click="toBookmarks"
              >
                <span>{{ counts }}</span>
                <a href="/bookmarked">a</a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import global from "~/mixins.js/global.js";
import vClickOutside from "v-click-outside";
import SvgIconLogo from "~/assets/img/logo.svg?inline";
import HeaderSearch from "~/components/Header/HeaderSearch";
import header from "@/mixins.js/header";

export default {
  name: "header-catalog",
  mixins: [global, header],
  components: {
    SvgIconLogo,
    HeaderSearch,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {};
  },
  computed: {},
  methods:{
    setRedirectUrl(url){
      if (url && url !== '/brands') {
        this.$store.commit('setRedirectUrl', url);
      }
    }
  }
};
</script>
