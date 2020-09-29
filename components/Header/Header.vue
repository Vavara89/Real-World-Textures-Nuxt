<template>
  <header class="header" :class="$route.name=='signup'? 'header-signup' : ''">
    <div class="header-inner">
      <nuxt-link
        to="/"
        class="header-logo"
        :class="{'header-logo--light': $route.name === 'signup'}"
      >
        <SvgIconLogo />
      </nuxt-link>
      <header-search />
      <div class="header-nav">
        <input id="menu-btn" class="menu-btn" type="checkbox">
        <label class="menu-icon" for="menu-btn">
          <span class="navicon" />
        </label>
        <ul class="menu">
          <li>
            <nuxt-link :to="'/textures'">
              Textures
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/models'">
              Models
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/hdr'">
              Hdris
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/brands'">
              Brands
            </nuxt-link>
          </li>
          <li class="line">
            <a href>About</a>
          </li>
          <li>
            <a href>Services</a>
          </li>
          <li>
            <a href>Pricing</a>
          </li>
          <li v-if="!getIsLogged()">
            <nuxt-link to="/login">
              Log In
            </nuxt-link>
          </li>
          <li v-if="!getIsLogged()" class="header-button">
            <nuxt-link to="/signup">
              Sign Up
            </nuxt-link>
          </li>
          <li v-if="getIsLogged()" class="header-account">
            <a
              class="icon"
              @click="showAccount('again')"
              @mouseover="hover = true"
              @mouseleave="trigger()"
            >Account</a>
            <div
              v-if="account || hover "
              v-click-outside="externalClick"
              class="missing"
              @mouseover="trigger('on')"
              @mouseleave="hover = false"
            >
              <div class="logmenu">
                <div class="logmenu-top">
                  <p>{{ credits }} Subscription Credits</p>
                  <p>{{ profile }}</p>
                </div>
                <ul>
                  <li>
                    <a href="/profile">what's new</a>
                  </li>
                  <li>
                    <a href="/profile/dashboard">profile</a>
                  </li>
                  <li>
                    <a href="/textures?assets=true">my assests</a>
                  </li>
                  <li>
                    <a href="/profile/invoices">my invoices</a>
                  </li>
                  <li>
                    <a href="/profile/discount">discount code</a>
                  </li>
                  <li>
                    <a href="/profile/pricing">Pricing</a>
                  </li>
                  <li class="logout">
                    <a @click="logout">Log out</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
                          <ul class="no-menu">
                            <li class="mobile-menu">
                    Account
                  </li>
                  <li>
                    <a href="/profile">what's new</a>
                  </li>
                  <li>
                    <a href="/profile/dashboard">profile</a>
                  </li>
                  <li>
                    <a href="/textures?assets=true">my assests</a>
                  </li>
                  <li>
                    <a href="/profile/invoices">my invoices</a>
                  </li>
                  <li>
                    <a href="/profile/discount">discount code</a>
                  </li>
                  <li>
                    <a href="/profile/pricing">Pricing</a>
                  </li>
                  <li class="logout">
                    <a @click="logout">Log out</a>
                  </li>
                </ul>
          <li v-if="getIsLogged()" style="cursor: pointer" class="header-fav view-mobile" @click="toBookmarks">
            <span>{{ counts }}</span>
            <a href="/bookmarked">a</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import vClickOutside from 'v-click-outside';
import SvgIconLogo from '~/assets/img/logo.svg?inline';
import HeaderSearch from '~/components/Header/HeaderSearch';

export default {
  name: 'Header',
  components: {
    SvgIconLogo,
    HeaderSearch
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      account: false,
      subscribe: 332,
      logged: this.$auth.loggedIn,
      bookmarked: null,
      hover: false
    };
  },

  computed: {
    user () {
      return this.$auth.user.user;
    },
    profile () {
      if (this.user.subscribe) {
        return this.user.subscribe.name;
      }
      return [this.user.profile.first_name, this.user.profile.last_name].join(' ');
    },
    credits () {
      return this.profile.subscribe ? this.profile.subscribe.credits : 0;
    },
    counts: {
      get () {
        if (this.bookmarked === null) {
          this.bookmarked = this.user.profile.bookmarks_hdr.length + this.user.profile.bookmarks_models.length +
            this.user.profile.bookmarks_textures.length;
        }
        return this.bookmarked;
      },
      set (value) {
        this.bookmarked = value;
      }
    }

  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setBookmarks') {
        this.counts = state.bookmarks;
      }

    });
  },
  methods: {
    trigger (state) {
      if (state !== 'on') {
        this.myToid = setTimeout(() => { this.hover = false; }, 0);
      }

      if (state === 'on') {
        clearTimeout(this.myToid);
      }
    },
    externalClick (event) {
      this.showAccount();
      this.hover = false;
    },
    showAccount (state) {
      this.account = !this.account;
    },
    async logout () {
      this.account = false;
      await this.$auth.logout();
      return this.$router.push({ path: '/login' });
    },
    toBookmarks () {
      return this.$router.push({ path: '/bookmarked' });
    },
    getIsLogged () {
      return this.$auth.loggedIn;
    }
  }
};
</script>

<style scoped>
.line {
  margin-left: 2.8rem;
  padding-left: 2.8rem;
  border-left: 1px solid #bec0c9;
}

@media only screen and (max-width: 950px) {
  .line {
    margin-left: 0;
    padding-left: 0;
    border: 0;
  }
}
</style>
