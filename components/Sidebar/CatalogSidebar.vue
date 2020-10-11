<template>
  <div>
    <div class="leftsidebar" :class="{'leftsidebar--open': openBurger, 'leftsidebar--close': width < 1200}">
      <div v-if="width < 1200" class="menu-hamburger" :class="{'change': openBurger}" @click="openBurgerMenu()">
        <div class="bar1" />
        <div class="bar2" />
        <div class="bar3" />
      </div>
      <Dropdown v-if="getTypes()" :options="getTypes()" :selected_option="getActiveType()" @input="changeCatalogType" />

      <div class="materials-menu">
        <MaterialMenu v-if="getCategories()" :list="getCategories()" :active_category="activeCategory" />
      </div>

      <div v-if="getRefines().items.length" class="refine-filter">
        <RefineFilter :options="getRefines()" />
      </div>

      <div v-if="getAreas().length" class="manufacture-filter">
        <ManufactureFilter v-if="getAreas()" :areas="getAreas()" :brands_list="getBrands()" />
      </div>

      <div v-if="getColors()" ref="colorFilter" class="color-filter">
        <ColorFilter v-if="getColors()" :options="getColors()" />
      </div>

      <div v-if="canClear">
        <button type="reset" class="clearFilter h4" @click="clearFilter()">
          Clear all Filters
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from '@/components/Sidebar/Dropdown';
import MaterialMenu from '@/components/Sidebar/MaterialMenu';
import RefineFilter from '@/components/Sidebar/RefineFilter';
import ManufactureFilter from '@/components/Sidebar/ManufactureFilter';
import ColorFilter from '@/components/Sidebar/ColorFilter';
import FilterClass from '@/classes/filter.class.ts';
import CategoryClass from '@/classes/category.class.ts';

export default {
  name: 'CatalogSidebar',
  components: {
    Dropdown,
    MaterialMenu,
    RefineFilter,
    ManufactureFilter,
    ColorFilter
  },
  props: {
    filter: {
      type: Object,
      required: false
    },
    activeCategory: {
      type: Object,
      required: false
    },
    canClear: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      openBurger: false,
      width: null
    };
  },
  mounted () {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener('resize', this.onResize);
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize () {
      this.innerWidth();
    },
    innerWidth () {
      this.width = window.innerWidth;
    },
    openBurgerMenu () {
      this.openBurger = !this.openBurger;
    },
    getTypes () {
      if (this.filter && this.filter.counts) {
        return [
          {
            value: 'Textures',
            count: this.filter.counts.textures,
            short: 'textures'
          },
          {
            value: 'Models',
            count: this.filter.counts.models,
            short: 'models'

          },
          {
            value: 'HDRis',
            count: this.filter.counts.hdr,
            short: 'hdr'

          },
          {
            value: 'Brands',
            count: this.filter.counts.brands,
            short: 'brands'
          }
        ];
      }
      return null;
    },
    getActiveType () {
      const types = this.getTypes();
      if (this.filter && this.filter.catalog_type) {
        return types.filter(item => item.short === this.filter.catalog_type).pop();
      }
      return {};
    },
    getCategories () {
      if (this.filter && this.filter.categories) {
        return this.filter.categories;
      }
    },
    getBrands () {
      if (this.filter && this.filter.brands) {
        return this.filter.brands;
      }
    },
    getAreas () {
      if (this.filter && this.filter.areas) {
        return this.filter.areas;
      }
      return [];
    },
    getRefines () {
      const data = {
        title: 'Refine By',
        items: [
        ]
      };
      if (this.filter.free) {
        data.items.push(
          {
            title: 'Free',
            link: 'is_free',
            active: this.$route.query.is_free ? this.$route.query.is_free : false
          }
        );
      }

      if (this.filter.own && this.$auth.loggedIn) {
        data.items.push(
          {
            title: 'My Assets',
            link: 'assets',
            active: this.$route.query.assets ? this.$route.query.assets : false
          }
        );
      }

      if (this.filter.favs && this.$auth.loggedIn) {
        data.items.push(
          {
            title: 'Favourites',
            link: 'favourites',
            active: this.$route.query.favourites ? this.$route.query.favourites : false
          }
        );
      }
      return data;
    },

    getColors () {
      if (this.filter && this.filter.areas) {
        return {
          title: 'Color',
          items: this.filter.colors
        };
      }
      return false;
    },
    clearFilter () {
      this.$router.push({ path: this.$route.path });
    },
    changeCatalogType (value) {
      this.$router.replace({ path: '/' + value.short, query: this.$route.query });
    }
  }

};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_leftSidebar.scss";

.fil {
  text-align: center;
}

.toggleOption {
  margin: 0 -1.7rem;
  margin-top: 60px;
  padding: 1rem 3.3rem;
  border: none;
  font-weight: bold;
  border-radius: 5rem;
  background-color: $color-primary-700;
  color: $color-white;
  text-transform: uppercase;
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
  z-index:100;
  display: inline-block;
  cursor: pointer;
  padding: 10px 15px;
}

.bar1, .bar2, .bar3 {
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

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
