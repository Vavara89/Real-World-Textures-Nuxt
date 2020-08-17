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
      <div class="header-search">
        <input type="text" name="s" placeholder="Search" autocomplete="off" />

        <Dropdown :options="options" :search="true" />
      </div>
      <div class="header-nav">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <nuxt-link :to="'/textures'">Textures</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/textures'">Models</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/textures'">Hdris</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/textures'">Brands</nuxt-link>
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
          <li v-if="!logged">
            <nuxt-link to="/login">Log In</nuxt-link>
          </li>
          <li class="header-button" v-if="!logged">
            <nuxt-link to="/signup">Sign Up</nuxt-link>
          </li>
          <li class="header-account" v-if="logged">
             <a class="icon" @click="showAccount">Account</a>
              <div class="logmenu" v-if="account">
               <div class="logmenu-top">
                  <p>{{ subscribe }} Subscription Credits</p>
                  <p>{{ profile }}</p>
                                 </div>
                  <ul>
                    <li>
                      <a href>what's new</a>
                    </li>
                    <li>
                      <a href>profile</a>
                    </li>
                    <li>
                      <a href>my assests</a>
                    </li>
                    <li>
                      <a href>my invoices</a>
                    </li>
                    <li>
                      <a href>discount code</a>
                    </li>
                    <li>
                      <a href>Pricing</a>
                    </li>
                    <li class="logout">
                      <a href>Log out</a>
                    </li>
                  </ul>
             </div>
          </li>
          <li class="header-fav view-mobile" v-if="logged">
              <span>{{ counts }}</span>
             <a href>nevim</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from "@/components/Sidebar/Dropdown";
import SvgIconLogo from "~/assets/img/logo.svg?inline";

export default {
  name: "Header",
  components: {
    SvgIconLogo,
    Dropdown,
  },
  data() {
    return {
      account: false,
      subscribe: 332,
      profile: 'Freelancer',
      options: [
        {
          value: "Textures",
        },
        {
          value: "Models",
        },
        {
          value: "HDRis",
        },
        {
          value: "Brands",
        },
      ],
      // TODO: API logged / not logged
      logged: true,
      counts: 33,
    };
  },
  methods: {
    showAccount() {
      this.account = !this.account;
    },
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
