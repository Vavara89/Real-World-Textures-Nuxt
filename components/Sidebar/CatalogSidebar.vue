<template>
  <div>
    <div class="leftsidebar">
      <Dropdown v-if="getTypes()" :options="getTypes()"/>

      <div class="materials-menu">
        <MaterialMenu v-if="getCategories()" :list="getCategories()"/>
      </div>

      <div v-if="getRefines()" class="refine-filter">
        <RefineFilter :options="getRefines()"/>
      </div>

      <div class="manufacture-filter">
        <ManufactureFilter :areas="getAreas()" :brands_list="getBrands()"/>
      </div>

      <!--      <div class="color-filter">-->
      <!--        <ColorFilter :options="colorList" />-->
      <!--      </div>-->

      <div>
        <button type="reset" class="clearFilter h4">
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
import FilterClass from "@/classes/filter.class.ts";

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
    }
  },
  methods: {
    getTypes() {
      if (this.filter && this.filter.counts) {
        return [
          {
            value: 'Textures',
            count: this.filter.counts.textures
          },
          {
            value: 'Models',
            count: this.filter.counts.models
          },
          {
            value: 'HDRis',
            count: this.filter.counts.hdr
          },
          {
            value: 'Brands',
            count: this.filter.counts.brands
          }
        ];
      }
      return null;
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
    },
    getRefines() {
      if (this.$auth.loggedIn) {
        return {
          title: 'Refine By',
          items: [
            {
              title: 'Free',
              link: 'free',
              active: false
            },
            {
              title: 'My Assets',
              link: 'assets',
              active: false
            },
            {
              title: 'Favourites',
              link: 'favourites',
              active: false
            }
          ]
        };
      }
      return null;
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
</style>
