<template>
  <header
    class="header"
    :class="$route.name == 'signup' ? 'header-signup' : ''"
  >
    <div class="header-inner">
      <div class="flex-header">
        <div class="left-container">
          <SvgIconLogo />
          <header-search />
        </div>
        <div class="flex-menu">
          <div class="header-nav">
            <input id="menu-btn" class="menu-btn" type="checkbox" />
            <label class="menu-icon" for="menu-btn">
              <span class="navicon" />
            </label>
            <ul class="menu">
              <li @click="hideMenu()">
                <nuxt-link :to="'/textures'"> Textures </nuxt-link>
              </li>
              <li @click="hideMenu()">
                <nuxt-link :to="'/models'"> Models </nuxt-link>
              </li>
              <li @click="hideMenu()">
                <nuxt-link :to="'/hdr'"> Hdris </nuxt-link>
              </li>
              <li @click="hideMenu()">
                <nuxt-link :to="'/brands'"> Brands </nuxt-link>
              </li>
              <li class="line" @click="hideMenu()">
                <nuxt-link to="/content/about"> About </nuxt-link>
              </li>
              <li @click="hideMenu()">
                <nuxt-link :to="{ path: '/', hash: '#services' }">
                  Services
                </nuxt-link>
              </li>
              <li @click="hideMenu()">
                <nuxt-link to="/pricing"> Pricing </nuxt-link>
              </li>
              <li v-if="!getIsLogged()" @click="hideMenu()">
                <nuxt-link to="/login"> Log In </nuxt-link>
              </li>
              <li
                v-if="!getIsLogged()"
                class="header-button"
                @click="hideMenu()"
              >
                <nuxt-link to="/signup"> Sign Up </nuxt-link>
              </li>
              <li v-if="getIsLogged()" class="header-account">
                <a
                  class="icon"
                  @click="showAccount('again')"
                  @mouseover="hover = true"
                  @mouseleave="trigger()"
                  >Account</a
                >
                <div
                  v-if="account || hover"
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
                        <nuxt-link :to="'/profile'"> What's new </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="'/profile/dashboard'">
                          Profile
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="'/textures?assets=true'">
                          My assests
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="'/profile/invoices'">
                          My invoices
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="'/profile/discount'">
                          Discount code
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="'/profile/pricing'">
                          Pricing
                        </nuxt-link>
                      </li>
                      <li class="logout">
                        <a @click="logout">Log out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <ul v-if="getIsLogged()" class="no-menu">
                <li class="mobile-menu" @click="hideMenu()">Account</li>
                <li @click="hideMenu()">
                  <nuxt-link :to="'/profile'"> What's new </nuxt-link>
                </li>
                <li @click="hideMenu()">
                  <nuxt-link :to="'/profile/dashboard'"> Profile </nuxt-link>
                </li>
                <li @click="hideMenu()">
                  <nuxt-link :to="'/textures?assets=true'">
                    My assests
                  </nuxt-link>
                </li>
                <li @click="hideMenu()">
                  <nuxt-link :to="'/profile/invoices'"> My invoices </nuxt-link>
                </li>
                <li @click="hideMenu()">
                  <nuxt-link :to="'/profile/discount'">
                    Discount code
                  </nuxt-link>
                </li>
                <li @click="hideMenu()">
                  <nuxt-link :to="'/profile/pricing'"> Pricing </nuxt-link>
                </li>
                <li @click="hideMenu()">
                  <nuxt-link :to="'/bookmarked'"> Bookmarks </nuxt-link>
                </li>
                <li class="logout">
                  <a @click="logout">Log out</a>
                </li>
              </ul>
              <li
                v-if="getIsLogged()"
                style="cursor: pointer"
                class="header-fav view-mobile"
                @click="toBookmarks"
              >
                <span>{{ counts }}</span>
                <a href="/bookmarked">a</a>
              </li>
            </ul>
          </div>
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

export default {
  name: "Header",
  mixins: [global],
  components: {
    SvgIconLogo,
    HeaderSearch,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      account: false,
      subscribe: 332,
      logged: this.$auth.loggedIn,
      bookmarked: null,
      hover: false,
    };
  },

  computed: {
    user() {
      return !!this.$auth.user && !!this.$auth.user.user
        ? this.$auth.user.user
        : null;
    },
    profile() {
      if (this.user.subscribe) {
        return this.user.subscribe.name;
      }
      return [this.user.profile.first_name, this.user.profile.last_name].join(
        " "
      );
    },
    credits() {
      return this.profile.subscribe ? this.profile.subscribe.credits : 0;
    },
    counts: {
      get() {
        if (this.bookmarked === null) {
          this.bookmarked = this.user.profile.total_bookmarked;
        }
        return this.bookmarked;
      },
      set(value) {
        this.bookmarked = value;
      },
    },
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "setBookmarks") {
        this.counts = state.bookmarks;
      }
    });
  },
  methods: {
    getCatalogRoutes() {
      const catalogRoutes = ["textures", "hdr", "models", "brands"];
      catalogRoutes.map((route) => {
        catalogRoutes.push(route + "-slug");
      });
      return catalogRoutes;
    },
    isCatalogRoute() {
      const catalogRoutes = this.getCatalogRoutes();
      return catalogRoutes.indexOf(this.$route.name) >= 0;
    },
    trigger(state) {
      if (state !== "on") {
        this.myToid = setTimeout(() => {
          this.hover = false;
        }, 0);
      }

      if (state === "on") {
        clearTimeout(this.myToid);
      }
    },
    externalClick(event) {
      this.showAccount();
      this.hover = false;
    },
    showAccount(state) {
      this.account = !this.account;
    },
    async logout() {
      this.account = false;
      await this.$auth.logout();
      return this.$router.push({ path: "/login" });
    },
    toBookmarks() {
      return this.$router.push({ path: "/bookmarked" });
    },
    getIsLogged() {
      return (
        !!this.$auth.user &&
        !!this.$auth.user.user &&
        !!this.$auth.user.user.profile
      );
    },
    hideMenu() {
      const toggleButton = document.getElementById("menu-btn");
      if (toggleButton.checked === true) {
        toggleButton.checked = false;
      } else {
        toggleButton.checked = true;
      }
    },
  },
};
</script>
<style>
.left-container {
  display: flex;
}
</style>
