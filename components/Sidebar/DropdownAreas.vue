<template>
  <div v-if="getContinents()">
    <h3 class="h3 manu">
      Select by area
    </h3>
    <div class="dropdown full size">
      <div
        class="custom-select"
        :tabindex="tabindex"
        @blur="open = false"
      >
        <div
          class="selected"
          :class="{open: open}"
          @click="open = !open"
        >
          <span v-if="continent">
            {{ continent }}
          </span>

          <span v-if="!continent">
            Select a Continent
          </span>
        </div>
        <div
          class="items"
          :class="{selectHide: !open}"
        >
          <div
            class="item"
            @click="selectContinent('All'); open=false; $emit('input', 'All')"
          >
            All
          </div>
          <div
            v-for="(item, index) in getContinents()"
            :key="'item-' + index"
            class="item"
            @click="selectContinent(item); open=false; $emit('input', item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="header-search noright ar dropdown full size">
      <div class="arr" :class="{'view-arr': open_suggestions}" @click="openCountries" />
      <input
        ref="search"
        v-model="search"
        type="text"
        name="s"
        placeholder="Search a Country"
        :class="{'view-opened': open_suggestions}"
        class="search-area"
        autocomplete="off"
        @keyup="onKeyUpSearch"
        @focus="hasFocus = true"
        @blur="closeSuggestions(); hasFocus = false"
      >
      <div v-if="countries" class="suggestions">
        <ul v-if="open_suggestions" class="countries">
          <li v-for="(item, index) in countries" :key='index'>
            <span :key="'country-'+index" @click="selectCountry(item)">
              {{ item.name }}
            </span>
          </li>
          <li v-if="!countries.length">
            <span>Empty result search</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DropdownAreas',
  props: {
    areas: {
      type: Array,
      required: true
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    },
    selected_option: null
  },
  data () {
    return {
      search: this.$route.query.search_country ? this.$route.query.search_country : '',
      area_id: this.$route.query.area_id ? this.$route.query.area_id : '',
      continent: this.$route.query.continent ? this.$route.query.continent : null,
      open: false,
      open_suggestions: false,
      keyUpTimeOut: undefined,
      hasFocus: false,
      countries: [],
      original_countries: []
    };
  },
  watch: {
    $route (to, from) {
      if (!this.$route.query.search_country) {
        this.search = '';
      }
      if (this.$route.query.area_id) {
        for (let country of this.original_countries) {
          if (country.id == this.$route.query.area_id) {
            this.search = country.name;
            break;
          }
        }
      }
      if (!this.$route.query.continent) {
        this.continent = '';
      }
    }
  },
  mounted() {
    this.countries = this.original_countries = this.getCountries();
  },
  methods: {
    openCountries () {
      this.open_suggestions = !this.open_suggestions;
      if (this.open_suggestions) {
        this.$refs.search.focus();
      }
    },
    getContinents () {
      let continents = null;
      if (this.areas) {
        continents = this.areas.map(item => item[1]).filter((v, i, a) => a.indexOf(v) === i);
      }
      return continents;
    },
    getCountries () {
      const countries = [];
      const mapAreas = (item) => {
        return { name: item[0], id: item[2] };
      };
      if (this.areas) {
        let countries = this.areas.map(mapAreas);
        if (this.continent && this.continent !== 'All') {
          countries = this.areas.filter(item => item[1] === this.continent).map(mapAreas);
        }

        if (this.search.length > 0) {
          countries = countries.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()))
            .sort((item, compare) => {
              const stat = item.name.indexOf(this.search.toLowerCase()) - compare.name.indexOf(this.search.toLowerCase());
              return stat === 0 ? stat : stat > 0 ? 1 : -1;
            });
        }
        return [...countries].sort((a, b) => (a.name > b.name) ? 1 : -1);
      }
      return countries;
    },
    onKeyUpSearch () {
      let filter_countries = [];

      if (this.search == '') this.countries = this.original_countries;
      else {
        this.open_suggestions = 1;
        for (let country of this.original_countries) {
          if (country.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1) filter_countries.push(country);
        }

        this.countries = filter_countries;
      }
      
      // if (this.keyUpTimeOut) {
      //   clearTimeout(this.keyUpTimeOut);
      // }
      // this.keyUpTimeOut = setTimeout(() => {
      //   this.open_suggestions = this.search.length > 0;
      //   if (!this.open_suggestions) {
      //     this.cleanQuery('area_id');
      //     this.cleanQuery('search_country');
      //   } else {
      //     this.pushToQuery('search_country', this.search);
      //   }
      // }, 200);
    },
    closeSuggestions () {
      setTimeout(() => {
        if (this.hasFocus === false) {
          this.open_suggestions = false;
        }
      }, 300);
    },
    selectCountry (item) {
      this.search = item.name;
      this.pushToQuery('continent', this.continent);
      this.pushToQuery('search_country', this.search);
      this.pushToQuery('area_id', item.id);
    },
    selectContinent (item) {
      this.continent = item;
      this.pushToQuery('continent', item);
    },
    pushToQuery (key, value) {
      const query = {};
      Object.assign(query, this.$route.query);
      query[key] = value;
      this.$router.push({ path: this.$route.path, query });
    },
    cleanQuery (key) {
      const query = {};
      Object.assign(query, this.$route.query);
      query[key] ? delete query[key] : null;
      this.$router.push({ path: this.$route.path, query });
    }
  }

};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_dropdown.scss";
</style>
