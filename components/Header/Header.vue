<template>
  <header class="header" :class="$route.name=='signup'? 'header-signup' : ''">
    <div class="header-inner">
      <nuxt-link
        to="/"
        class="header-logo"
        :class="{'header-logo--light': $route.name === 'signup'}"
      >
        <SvgIconLogo/>
      </nuxt-link>
      <header-search></header-search>
      <div class="header-nav">
        <input class="menu-btn" type="checkbox" id="menu-btn"/>
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <nuxt-link :to="'/textures'">Textures</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/models'">Models</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/hdr'">Hdris</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/brands'">Brands</nuxt-link>
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
            <nuxt-link to="/login">Log In</nuxt-link>
          </li>
          <li class="header-button" v-if="!getIsLogged()">
            <nuxt-link to="/signup">Sign Up</nuxt-link>
          </li>
          <li class="header-account" v-if="getIsLogged()">
            <a class="icon" @click="showAccount">Account</a>
            <div class="logmenu" v-if="account">
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
          </li>
          <li style="cursor: pointer" @click="toBookmarks" class="header-fav view-mobile" v-if="logged">
            <span>{{ counts }}</span>
            <a href="/bookmarked">a</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import SvgIconLogo from "~/assets/img/logo.svg?inline";
import HeaderSearch from "~/components/Header/HeaderSearch"

export default {
  name: "Header",
  components: {
    SvgIconLogo,
    HeaderSearch
  },
  data() {
    return {
      account: false,
      subscribe: 332,
      logged: this.$auth.loggedIn,
      bookmarked: null,
    };
  },

  computed: {
    user() {
      return this.$auth.user.user;
    },
    profile() {
      if (this.user.subscribe) {
        return this.user.subscribe.name;
      }
      return [this.user.profile.first_name, this.user.profile.last_name].join(' ');
    },
    credits() {
      return this.profile.subscribe ? this.profile.subscribe.credits : 0;
    },
    counts: {
      get() {
        if (this.bookmarked === null) {
          this.bookmarked = this.user.profile.bookmarks_hdr.length + this.user.profile.bookmarks_models.length +
            this.user.profile.bookmarks_textures.length;
        }
        return this.bookmarked;
      },
      set(value) {
        this.bookmarked = value;
      }
    },

  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setBookmarks') {
        this.counts = state.bookmarks;
      }
    });
  },
  methods: {
    showAccount() {
      this.account = !this.account;
    },
    async logout() {
      this.account = false;
      await this.$auth.logout();
    },
    toBookmarks() {
      return this.$router.push({path: '/bookmarked'});
    },
    getIsLogged(){
      return this.$auth.loggedIn;
    }
  },
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
