<template>
  <div class="sidebar-wrapper">
    <div
      v-if="width"
      class="leftsidebar"
      :class="{
        'leftsidebar--open': openBurger,
        'leftsidebar--close': width < 950,
        'leftsidebar--default': width > 950,
      }"
    >
      <div
        v-if="width < 950"
        class="nav-icon3"
        :class="{ open: openBurger }"
        @click="openBurgerMenu()"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

<!--       <div  v-if="width > 950" class="header-logo-catalog-sidebar">-->
<!--        <nuxt-link to="/">-->
<!--          <SvgIconLogo />-->
<!--        </nuxt-link>-->
<!--        </div>-->

      <Dropdown
        v-if="getTypes()"
        :key="reloadKey"
        :options="getTypes()"
        :selected_option="getActiveType()"
        @input="changeCatalogType"
      />

      <div class="materials-menu">
        <MaterialMenu v-if="getCategories()" :list="getCategories()" />
      </div>

      <div v-if="getRefines().items.length" class="refine-filter">
        <RefineFilter :options="getRefines()" />
      </div>

      <div v-if="getAreas().length" class="manufacture-filter">
        <ManufactureFilter
          class="manufacture-filter-drop"
          v-if="getAreas()"
          :areas="getAreas()"
          :brands_list="getBrands()"
        />
      </div>

      <div v-if="getColors()" ref="colorFilter" class="color-filter">
        <ColorFilter v-if="getColors()" :options="getColors()" />
      </div>

      <div v-if="canClear"  :class="{'fixedButton': height, 'clear-btn': !height }">
        <button type="reset" class="clearFilter h4" @click="clearFilter()">
          Clear all Filters
        </button>
      </div>
      <div v-if="canClear && height"  :class="{'clear-btn': height }">
        <button style="visibility: hidden" type="reset" class="clearFilter h4" @click="clearFilter()">
          Clear all Filters
        </button>
      </div>

    </div>
  </div>
</template>
<script>
import SvgIconLogo from "~/assets/img/logo.svg?inline";
import Dropdown from "@/components/Sidebar/Dropdown";
import MaterialMenu from "@/components/Sidebar/MaterialMenu";
import RefineFilter from "@/components/Sidebar/RefineFilter";
import ManufactureFilter from "@/components/Sidebar/ManufactureFilter";
import ColorFilter from "@/components/Sidebar/ColorFilter";
import FilterClass from "@/classes/filter.class.ts";
import CategoryClass from "@/classes/category.class.ts";

export default {
  name: "CatalogSidebar",
  components: {
    Dropdown,
    MaterialMenu,
    RefineFilter,
    ManufactureFilter,
    ColorFilter,
    SvgIconLogo,
  },
  props: {
    filter: {
      type: Object,
      required: false,
    },
    activeCategory: {
      type: Object,
      required: false,
    },
    canClear: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      reloadKey: 0,
      openBurger: false,
      width: null,
      height: true
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
    window.addEventListener('scroll',this.scrollContent);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener('scroll',this.scrollContent);
  },
  methods: {
    scrollContent(){
      this.height = window.pageYOffset <= 70;
    },
    onResize() {
      this.innerWidth();
    },
    innerWidth() {
      this.width = window.innerWidth;
    },
    openBurgerMenu() {
      this.openBurger = !this.openBurger;
    },
    getTypes() {
      if (this.filter && this.filter.counts) {
        return [
          {
            value: "Textures",
            count: this.filter.counts.textures,
            short: "textures",
          },
          {
            value: "Models",
            count: this.filter.counts.models,
            short: "models",
          },
          {
            value: "HDRis",
            count: this.filter.counts.hdr,
            short: "hdr",
          },
          {
            value: "Brands",
            count: this.filter.counts.brands,
            short: "brands",
          },
        ];
      }
      return null;
    },
    getActiveType() {
      const types = this.getTypes();
      if (this.filter && this.filter.catalog_type) {
        const itm =  types
          .filter((item) => item.short === this.filter.catalog_type)
          .pop();
        return itm;
      }
      return {};
    },
    getCategories() {
      if (this.filter && this.filter.categories) {
        return this.filter.categories;
      }
    },
    getBrands() {
      if (this.filter && this.filter.brands) {
        return this.filter.brands;
      }
    },
    getAreas() {
      if (this.filter && this.filter.areas) {
        return this.filter.areas;
      }
      return [];
    },
    getRefines() {
      const data = {
        title: "Refine By",
        items: [],
      };
      if (this.filter.free) {
        data.items.push({
          title: "Free",
          link: "is_free",
          active: this.$route.query.is_free ? this.$route.query.is_free : false,
        });
      }

      if (this.filter.own && this.$auth.loggedIn) {
        data.items.push({
          title: "My Assets",
          link: "assets",
          active: this.$route.query.assets ? this.$route.query.assets : false,
        });
      }

      if (this.filter.favs && this.$auth.loggedIn) {
        data.items.push({
          title: "Favourites",
          link: "favourites",
          active: this.$route.query.favourites
            ? this.$route.query.favourites
            : false,
        });
      }
      return data;
    },

    getColors() {
      if (this.filter && this.filter.areas) {
        return {
          title: "Color",
          items: this.filter.colors,
        };
      }
      return false;
    },
    clearFilter() {
      const parts = this.$route.path.split('/')
      this.$router.push({ path: `/${parts[1] ?? ''}` });
    },
    changeCatalogType(value) {
      this.$router.replace({
        path: "/" + value.short,
        query: this.$route.query,
      });
    },
  },
  watch: {
    filter (data) {
      this.reloadKey += 1;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_leftSidebar.scss";

.sidebar-wrapper{
  overflow-y: scroll;
  height: calc(100vh - 120px);
  overflow-x: hidden;
  margin-top: 65px;

  @media (min-width: 991px) {
    min-width: 32rem;
  }
}
.clear-btn button{
  margin-top: 24px !important;
  padding: 1rem 1rem !important;
  width: 260px !important;
}
.sidebar-wrapper::-webkit-scrollbar {
  width: 3px;
}
.sidebar-wrapper::-webkit-scrollbar-thumb {
  background: #d0d5e7;
  border-radius: 15px;
}
.sidebar-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}
.manufacture-filter{
  width: 23rem;
  margin-left: 15px;
}
.manufacture-filter-drop{
  width: 260px;
}
.manufacture-filter-drop .dropdown .selected, .manufacture-filter-drop .dropdown .custom-select{
  width: 100% !important;
}

.sidebar-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}

.fixedButton{
  position: fixed;
  top: calc(100% - 60px);
  z-index: 10;
  width: auto !important;
  min-width: 260px;
  background: #fff;
  padding: 16px 0;
}

.fil {
  text-align: center;
}

.toggleOption {
  margin: 0 -1.7rem;
  margin-top: 60px;
  padding: 1rem 1.3rem;
  border: none;
  font-weight: bold;
  border-radius: 5rem;
  background-color: $color-primary-700;
  color: $color-white;
  text-transform: uppercase;
  width: 100%!important;
}

.profile {
  li {
    text-align: center;
    margin: 5px 0;

    a {
      width: 100%;
      padding: 20px 0;
      display: block;
      border-radius: 100px;
      text-transform: uppercase;
    }

    a:hover {
      background-color: #f2f3f9;
    }

    .active {
      background-color: #f2f3f9;
    }
  }
}

.menu-hamburger {
  position: absolute;
  top: 120px;
  left: 100%;
  background-color: #394174;
  z-index: 100;
  display: inline-block;
  cursor: pointer;
  padding: 10px 15px;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

.nav-icon3 {
  position: absolute;
  top: 66px;
  left: 100%;
  background-color: #394174;
  z-index: 100;
  width: 60px;
  height: 60px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  cursor: pointer;

  @include mq(md, max) {
    top: 1;
  }
}

.nav-icon3 span {
  display: block;
  position: absolute;
  height: 5px;
  width: 40px;
  background: #fff;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}

.nav-icon3 span:nth-child(1) {
  top: 15px;
  left: 10px;
}

.nav-icon3 span:nth-child(2) {
  top: 27px;
  left: 10px;
}

.nav-icon3 span:nth-child(3) {
  top: 39px;
  left: 10px;
}

.nav-icon3 span:nth-child(4) {
  top: 36px;
  left: 10px;
}

.nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 27px;
  left: 10px;
}

.nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 27px;
  left: 10px;
}

.nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
</style>
