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
          <span v-if="continent">
              {{ continent }}
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
            @click="continent=item; open=false; $emit('input', item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="header-search noright">
      <input @keyup="onKeyUpSearch" @blur="closeSuggestions" v-model="search" type="text" name="s" placeholder="Search a Country" autocomplete="off">
      <div class="suggestions" v-if="getCountries()">
        <ul v-if="open_suggestions" class="countries">
          <li v-for="(item, index) in getCountries()">
            <span style="color: black; cursor: pointer; font-size: 14px; text-align: left" :key="'country-'+index" @click="selectCountry(item)">
              {{ item.name }}
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
      search: this.$route.query['search_country'] ? this.$route.query['search_country'] : '',
      area_id: this.$route.query['area_id'] ? this.$route.query['area_id'] : '',
      continent: this.$route.query['continent'] ? this.$route.query['continent'] : null,
      open: false,
      open_suggestions: false,
      keyUpTimeOut: undefined,
    };
  },
  methods: {
    getContinents() {
      let continents = null;
      if (this.areas) {
        continents = this.areas.map(item => item[1]).filter((v, i, a) => a.indexOf(v) === i);
      }
      return continents;
    },
    getCountries() {
      let countries = [];
      const mapAreas = (item) => {
        return {name: item[0], id: item[2]};
      };
      if (this.areas) {
        let countries = this.areas.map(mapAreas);
        if (this.continent) {
          countries = this.areas.filter(item => item[1] === this.selected.value).map(mapAreas);
        }

        if (this.search.length > 0) {
          countries = countries.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)
            .sort((item, compare) => {
            const stat = item.name.indexOf(this.search.toLowerCase()) - compare.name.indexOf(this.search.toLowerCase());
            return stat === 0 ? stat : stat > 0 ? 1 : -1;
          });
        }
        return countries;
      }
      return  countries;

    },
    onKeyUpSearch(){
      if(this.keyUpTimeOut){
        clearTimeout(this.keyUpTimeOut);
      }
      this.keyUpTimeOut = setTimeout(()=>{
        this.open_suggestions = this.search.length > 0;
      }, 200);
    },
    closeSuggestions(){
      setTimeout(()=>{
        this.open_suggestions = false;
      }, 300);
    },
    selectCountry(item){
      this.search = item.name;
      this.pushToQuery('continent', item);
      this.pushToQuery('search_country', this.search);
    },
    selectContinent(item){
      this.continent = item;
      this.pushToQuery('area_id', item.id);
    },
    pushToQuery(key, value){
      const query = {};
      Object.assign(query, this.$route.query);
      query[key] = value;
      this.$router.push({path: this.$route.path, query: query})
    }
  }

};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_dropdown.scss";
</style>
