<template>
  <header class="header">
    <div class="header-inner">
      <div class="header__flex">
        <div class="header__logo">
          <nuxt-link to="/" class="header-logo">
            <SvgIconLogo />
          </nuxt-link>
        </div>

        <div class="header__search">
          <search />
          <div class="header-nav">
            <input id="menu-btn" class="menu-btn" type="checkbox" />
            <label class="menu-icon" for="menu-btn">
              <span class="navicon" />
            </label>

            <ul class="menu first-menu">
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
              <div class="non-display">
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
                    <nuxt-link :to="'/profile/invoices'">
                      My invoices
                    </nuxt-link>
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
              </div>
            </ul>
          </div>
        </div>

        <div class="header__menu">
          <div class="header-nav">
            <ul class="menu">
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
import Search from "~/components/Header/Search";
import header from "@/mixins.js/header";

export default {
  name: "Header",
  mixins: [global, header],
  components: {
    SvgIconLogo,
    Search,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>
<style lang="scss">
.non-display {
  @include mq(md, min) {
    display: none;
  }
}
</style>
