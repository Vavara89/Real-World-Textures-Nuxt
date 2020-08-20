<template>
  <div v-if="getContinents()">
    <h3 class="h3">
      Select by area
    </h3>
    <div class="dropdown full">
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
          <span v-if="selected">
              {{ selected.value }}
          </span>
        </div>
        <div
          class="items"
          :class="{selectHide: !open}"
        >
          <div
            v-for="(item, index) in getContinents()"
            :key="'item-' + index"
            class="item"
            @click="selected=item; open=false; $emit('input', item)"
          >
            {{ item.value }} <span v-if="item.count" class="count">({{ item.count }})</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header-search noright">
      <input @:keyup="open_suggestions = search.length > 0" v-model="search" type="text" name="s" placeholder="Search a Country" autocomplete="off">
      <div class="suggestions" v-if="getCountries()">
        <ul v-if="open_suggestions" class="countries">
          <li v-for="(item, index) in getCountries()">
            <span :key="'country-'+index" @click="search=item">
              {{ item }}
            </span>
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
    selected_option: null,
  },
  data() {
    return {
      search: this.$route.query['country'] ? this.$route.query['country'] : '',
      selected: this.$route.query['continent'] ? this.$route.query['continent'] : null,
      open: false,
      open_suggestions: false,
    };
  },
  methods: {
    getContinents() {
      let continents = null;
      if (this.areas) {
        const uniques = this.areas.map(item => item[1]).filter((v, i, a) => a.indexOf(v) === i);
        continents = uniques.map((item) => {
          return {value: item};
        });
      }
      return continents;
    },
    getCountries() {
      let countries = [];
      if (this.areas) {
        let countries = this.areas.map(item => item[0]);
        if (this.selected) {
          countries = this.areas.filter(item => item[1] === this.selected.value).map(item => item[0]);
        }
        if (this.search.length) {
          countries = countries.filter(item => item.indexOf(this.search) > 0).sort((item, compare) => {
            const stat = item.indexOf(this.search) - compare.indexOf(this.search);
            return stat === 0 ? stat : stat < 0 ? 1 : -1;
          });
        }
      }
      return countries;
    }
  }

};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_dropdown.scss";
</style>
