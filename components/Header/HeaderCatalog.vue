<template>
  <header class="catalog-header">
    <div class="catalog-header-inner">
      <div class="catalog-header__flex">
        <div class="catalog-header__search">
          <div class="search">
            <search />
          </div>
          <div class="catalog-header-nav">
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
                class="catalog-header-button"
                @click="hideMenu()"
              >
                <nuxt-link to="/signup"> Sign Up </nuxt-link>
              </li>
              <li v-if="getIsLogged()" class="catalog-header-account">
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
                class="catalog-header-fav view-mobile"
                @click="toBookmarks"
              >
                <span>{{ counts }}</span>
                <a href="/bookmarked">a</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="catalog-header__menu">
          <div class="catalog-header-nav">
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
                class="catalog-header-button"
                @click="hideMenu()"
              >
                <nuxt-link to="/signup"> Sign Up </nuxt-link>
              </li>
              <li v-if="getIsLogged()" class="catalog-header-account">
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
                class="catalog-header-fav view-mobile"
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
import Search from "~/components/header/Search";
import header from "@/mixins.js/header";

export default {
  name: "header-catalog",
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
.catalog-header {
  padding: 40px 0;
  min-height: 16rem;
  background-color: #fbfbff;

  @include mq(lg, max) {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10000;
    padding: 10px 0;
    border-bottom: 1px solid;
    min-height: 0rem;
    height: 122px;
  }

  &-inner {
    margin: 0 auto;
    padding: 0 15px;
    padding-left: 7.5rem;
    padding-right: 1.5rem;
    position: relative;
    margin-left: 315px;
    height: 100%;

    @include mq(md, max) {
      margin-left: auto;
    }
  }

  &-search {
    margin-top: 15px;
    margin-right: 140px;
    position: relative;

    @include mq(sm, max) {
      display: none;
    }

    &.ar {
      position: relative;

      .arr {
        position: absolute;
        right: -13px;
        top: 14px;
        width: 10px;
        height: 10px;
        background-image: url(~@/assets/img/icon-arrow_bottom.svg);
        background-repeat: no-repeat;
        background-size: 10px 10px;
        background-position: center center;
        z-index: 9;
        -webkit-transition: -webkit-transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;

        &.view-arr {
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
        }
      }
    }

    &.noright {
      right: 15px;
      margin-left: 0;

      input {
        background-color: #fbfbff;
        border-radius: 30px;
        color: #394174;

        &.view-opened {
          border-radius: 30px 30px 0 0;
        }
      }
    }

    input {
      width: 270px;
      height: 42px;
      padding: 10px 10px 10px 50px;
      border-radius: 30px 0 0 30px;
      background-color: #fff;
      background-image: url(~@/assets/img/icon-search.png);
      background-repeat: no-repeat;
      background-position: left 20px center;
      color: #9093b9;
      font-size: 14px;
      outline: none;
      vertical-align: top;

      @media only screen and (max-width: 1200px) {
        width: 180px;
      }

      &:-internal-autofill-selected {
        background-color: #fff !important;
        background-image: url(~@/assets/img/icon-search.png) !important;
        color: #fff !important;
      }
    }

    select {
      width: 130px;
      height: 42px;
      padding: 10px 20px;
      border: none;
      border-radius: 0 30px 30px 0;
      background-color: #f2f3f9;
      background-image: url(~@/assets/img/icon-select.png);
      background-repeat: no-repeat;
      background-position: right 20px center;
      color: #9093b9;
      font-family: Poppins;
      font-size: 14px;
      text-transform: uppercase;
      outline: none;
      -webkit-appearance: none;
    }
  }

  &-nav {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;

    .first-menu {
      @include mq(lg, min) {
        display: none;
      }
    }

    .menu-btn {
      display: none;
    }

    @include mq(lg, max) {
      flex-direction: column;
      width: 100%;

      .menu-icon {
        cursor: pointer;
        padding: 28px 20px;
        position: relative;
        user-select: none;
        display: block !important;

        .navicon {
          background: #333;
          display: block;
          height: 3px;
          position: relative;
          transition: background 0.2s ease-out;
          width: 40px;
          float: right;
        }

        .navicon:before,
        .navicon:after {
          background: #333;
          content: "";
          display: block;
          height: 100%;
          position: absolute;
          transition: all 0.2s ease-out;
          width: 100%;
        }
        .navicon:before {
          top: 8px;
        }

        .navicon:after {
          top: -8px;
        }
      }

      .menu-btn:checked ~ .menu {
        max-height: 700px;
      }

      .menu-btn:checked ~ .menu-icon .navicon {
        background: transparent;
      }

      .menu-btn:checked ~ .menu-icon .navicon:before {
        transform: rotate(-45deg);
      }

      .menu-btn:checked ~ .menu-icon .navicon:after {
        transform: rotate(45deg);
      }

      .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
      .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
        top: 0;
      }

      .menu {
        clear: both;
        max-height: 0;
        transition: max-height 0.2s ease-out;

        @include mq(lg, max) {
          position: absolute;
          top: 113px;
          left: 0;
          right: 0;
          background: white;
        }
      }

      li {
        display: block !important;
        clear: both;
        width: 100%;

        @include mq(lg, max) {
          text-align: center;
        }

        a {
          display: block;
          padding: 20px 20px;
          text-decoration: none;
        }
      }

      /* menu icon */
    }

    .menu-icon {
      display: none;
    }

    li {
      display: inline-block;

      a {
        display: block;
        padding: 10px 15px;
        border-radius: 30px;
        font-size: 14px;
        font-weight: 500;
        color: #9093b9;
        text-transform: uppercase;
        text-decoration: none;
        transition: all 0.5s;

        @include mq(lg, max) {
          padding-left: 10px;
          padding-right: 10px;
        }

        @include mq(lg, max) {
          padding-left: 10px;
          padding-right: 10px;
        }

        @media only screen and (max-width: 1700px) {
          padding: 10px 13px;
        }

        &:hover {
          background-color: #f2f3f9;
        }
      }

      &.catalog-header-button a {
        padding-left: 40px;
        padding-right: 40px;
        background-color: #394174;
        color: #fff;
      }

      &.catalog-header-account {
        position: relative;

        @media only screen and (max-width: 1232px) {
          display: none !important;
        }

        .missing {
          position: absolute;
          top: 35px;
          right: 10px;
          padding-top: 15px;
          z-index: 80;

          .logmenu {
            background: #fff;
            width: 300px;
            z-index: 999;
            -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.48);
            -moz-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.48);
            box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.48);

            ul li {
              display: block;

              &.logout {
                margin-top: 20px;
              }

              &.logout a {
                cursor: pointer;
                text-transform: initial;
                text-indent: 20px;
                font-weight: 700;
                background-image: url(~@/assets/img/icon-logout.svg);
                background-repeat: no-repeat;
                background-position: 10px center;
              }
            }

            ul {
              padding: 30px;
            }

            ul li a {
              font-weight: normal;
              color: #9093b9;
            }

            .logmenu-top {
              padding: 20px;
              background-color: #f8f9fe;

              p:first-of-type {
                font-size: 14px;
                font-weight: bold;
                color: #394174;
              }

              p:nth-child(2) {
                font-size: 14px;
                color: #4cbc81;
                text-transform: uppercase;
                margin-top: 2px;
              }
            }
          }
        }
      }

      &.catalog-header-account a.icon {
        font-size: 0;
        color: transparent;
        width: 37px;
        height: 40px;
        border-radius: 0;
        margin: 0 10px;
        position: relative;
        top: -4px;
        background-image: url(~@/assets/img/icon-account.svg);
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;

        &:hover {
          background-color: transparent !important;
        }

        @include mq(lg, max) {
          font-size: 14px;
          font-weight: 500;
          color: #394174;
          background-image: none;
          position: static;
          top: 0;
          margin: 0;
          width: auto;
          height: auto;

          &:hover {
            background-color: #f2f3f9 !important;
            border-radius: 50px;
          }
        }
      }

      &.catalog-header-fav {
        position: relative;

        span {
          display: block;
          position: absolute;
          right: 0;
          top: 1px;
          width: 22px;
          height: 22px;
          font-size: 11px;
          font-weight: bold;
          background-color: #4cbc81;
          color: #ffffff;
          border: 2px solid white;
          border-radius: 50%;
          z-index: 1;
          text-align: center;
          line-height: 18px;
        }

        @include mq(lg, max) {
          &.view-mobile {
            display: none !important;
          }
        }
      }

      &.catalog-header-fav a {
        font-size: 0;
        color: transparent;
        width: 24px;
        height: 37px;
        border-radius: 0;
        margin: 0 10px;
        position: relative;
        top: -4px;
        background-image: url(~@/assets/img/icon-fav.svg);
        background-repeat: no-repeat;
        background-position: center center;
        pointer-events: none;

        &:hover {
          background-color: transparent !important;
        }
      }
    }
  }

  &-left-nav {
    @include mq(lg, max) {
      order: 2;
      width: 100%;
    }
  }

  &-left-menu {
    @include mq(lg, max) {
      margin-top: 10px;
      text-align: center;
    }
  }

  &-right-nav {
    @include mq(lg, max) {
      order: 1;
      width: 100%;
    }
  }

  &-right-menu {
    margin-left: 60px;
    padding-left: 60px;
    border-left: 1px solid #c3c7de;

    @include mq(xxl, max) {
      margin-left: 20px;
      padding-left: 20px;
    }

    @include mq(lg, max) {
      margin-left: 0;
      padding-left: 0;
      border-left: none;
      text-align: center;
    }
  }
}

.catalog-header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 1232px) {
    overflow: hidden;
  }
}

.no-menu {
  @media only screen and (min-width: 1232px) {
    display: none;
  }
}

.mobile-menu {
  font-size: 15px;
  font-weight: bold;
  margin: 20px 0 10px 0;
}

.mobile-menu-top {
  margin: 20px;
  border: 1px solid red;
  width: 80%;
  padding-left: 20px;
}
.catalog-header__logo {
  flex: 0;
  @include mq(lg, max) {
    align-items: center;
    flex: 1;
  }
}

.catalog-header__flex {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.catalog-header__search {
  display: flex;
  flex: 1;

  .search {
    input {
      @media only screen and (max-width: 1300px) {
        width: 180px;
      }
    }
  }

  @include mq(lg, max) {
    align-items: center;
  }
}
</style>

