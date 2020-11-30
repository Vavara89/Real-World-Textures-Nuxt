<template>
  <header
    class="header"
    :class="$route.name == 'signup' ? 'header-signup' : ''"
  ></header>
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
};
</script>

<style >
</style>
