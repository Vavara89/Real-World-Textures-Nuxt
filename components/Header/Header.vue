<template>
  <header class="header">
    <div class="header-inner">
      <div class="header__flex">
        <div class="left-holder">
          <div class="header__logo">
            <nuxt-link to="/" class="header-logo">
              <SvgIconLogo />
            </nuxt-link>
          </div>

          <div class="search-menu-container">
            <header-search />
            <div class="header-nav catalog-nav hide-on-md-down">
              <ul class="menu">
                <li
                  v-for="(item, index) in catalogMenu"
                  :key="`x_${index}`"
                  class="menu-item"
                  @click="hideMenu()"
                >
                  <nuxt-link :to="item.link" @click.native="setRedirectUrl(item.link)">
                    {{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="line" />
        <div class="header-nav">
          <input id="menu-btn" class="menu-btn" type="checkbox">
          <label class="menu-icon" for="menu-btn">
            <span class="navicon" />
          </label>

          <ul class="menu">
            <li
              v-for="(item, index) in catalogMenu"
              :key="`y_${index}`"
              class="hide-on-md-up menu-item"
              @click="hideMenu()"
            >
              <nuxt-link :to="item.link" @click.native="setRedirectUrl(item.link)">
                {{ item.title }}
              </nuxt-link>
            </li>
            <!-- <div class="line"></div> -->
            <li
              v-for="(item, index) in mainMenu"
              :key="`z_${index}`"
              class="menu-item"
              @click="hideMenu()"
            >
              <nuxt-link :to="item.link !== '/services' ? item.link : '#'" @click.native="setRedirectUrl(item.link)">
                {{ item.title }}
              </nuxt-link>
            </li>

            <template v-if="!getIsLogged()">
              <li class="menu-item" @click="hideMenu()">
                <nuxt-link to="/login">
                  Log In
                </nuxt-link>
              </li>
              <li class="header-button menu-item" @click="hideMenu()">
                <nuxt-link to="/signup">
                  Sign Up
                </nuxt-link>
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
                >Account</a>
                <div
                  v-if="account || hover"
                  id="profile-menu"
                  v-click-outside="externalClick"
                  class="missing"
                  @mouseover="trigger('on')"
                  @mouseleave="hover = false"
                >
                  <div class="logmenu">
                    <div class="logmenu-top">
                      <p class="close-profile-menu hide-on-md-up" @click="toggleProfileMenu()">
                        back
                      </p>
                      <p>{{ credits }} Subscription Credits</p>
                      <p>{{ profile }}</p>
                    </div>
                    <ul>
                      <li v-for="item in profileMenu" class="menu-item">
                        <nuxt-link :to="item.link !== '/tutorials' ? item.link : '#'" @click.native="setRedirectUrl(item.link)">
                          {{ item.title }}
                        </nuxt-link>
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
import vClickOutside from 'v-click-outside';
import global from '~/mixins.js/global.js';
import SvgIconLogo from '~/assets/img/logo.svg?inline';
import HeaderSearch from '~/components/Header/HeaderSearch';
import header from '@/mixins.js/header';

export default {
  name: 'Header',
  components: {
    SvgIconLogo,
    HeaderSearch
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  mixins: [global, header],
  computed: {},
  methods: {
    setRedirectUrl (url) {
      if (url && url === '/tutorials') {
        window.open(window.location.origin + url);
      } else if (url && url === '/services') {
        window.location.href = 'https://www.realworldtextures.com/';
      } else if (url && url !== '/brands') {
        this.$store.commit('setRedirectUrl', url);
      }
    }
  }
};
</script>
