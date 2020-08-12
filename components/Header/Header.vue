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
            <a href="/textures">Textures</a>
          </li>
          <li>
            <a href>Models</a>
          </li>
          <li>
            <a href>Hdris</a>
          </li>
          <li>
            <a href>Brands</a>
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
          <li>
            <nuxt-link to="/login">Log In</nuxt-link>
          </li>
          <li class="header-button">
            <nuxt-link to="/signup">Sign Up</nuxt-link>
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
    };
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
