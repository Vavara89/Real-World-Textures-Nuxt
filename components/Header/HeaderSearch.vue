<template>
  <div class="header-search">
    <input
      @keyup="searchHandler"
      v-model="search"
      type="text"
      name="search"
      placeholder="Search"
      autocomplete="off"
    />
    <div class="dropdown search">
      <div class="custom-select" :tabindex="tabIndex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
          {{ selected.value }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
          <div
            v-for="(item, index) in options"
            :key="'item-' + index"
            class="item"
            @click="
              selectCatalogType(item);
              open = false;
              $emit('input', item);
            "
          >
            {{ item.value }}
            <span v-if="item.count" class="count">({{ item.count }})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HeaderSearch",
  data() {
    return {
      search: this.$route.query["search"] ? this.$route.query["search"] : "",
      timeOut: undefined,
      selectedCategory: undefined,
      query: this.$route.query,
      route: this.$route.name,
      tabIndex: 1,
      open: false,
      selected_option: null,
      options: [
        {
          value: "Models",
          url: "models",
        },
        {
          value: "Textures",
          url: "textures",
        },
        {
          value: "HDRis",
          url: "hdr",
        },
        {
          value: "Brands",
          url: "brands",
        },
      ],
    };
  },

  methods: {
    searchHandler() {
      if (this.timeOut) {
        clearTimeout(this.timeOut);
      }
      this.timeOut = setTimeout(() => {
        const current_query = {};
        Object.assign(current_query, this.$route.query);
        current_query["search"] = this.search;
        this.$router.push({ path: this.selected.url, query: current_query });
      }, 1000);
    },
    getCatalogRoutes() {
      const catalogRoutes = ["textures", "hdr", "models", "brands"];
      catalogRoutes.map((route) => {
        catalogRoutes.push(route + "-slug");
      });
      return catalogRoutes;
    },
    isCatalogRoute() {
      const catalogRoutes = this.getCatalogRoutes();
      return catalogRoutes.indexOf(this.route) >= 0;
    },

    selectCatalogType(value) {
      this.selected = value;
      this.searchHandler();
    },
    getOrDefaultSelected() {
      if (this.selected_option) {
        return this.selected_option;
      }
      if (this.isCatalogRoute() && !this.selected_option) {
        const selectedCategory = this.route.replace("-slug", "");
        const filtered = this.options.filter(
          (item) => item.url === selectedCategory
        )[0];
        return (this.selected_option = {
          value: filtered["value"],
          url: filtered["url"],
        });
      }
      this.selected_option = this.selected_option
        ? this.selected_option
        : this.options[0];
      return this.selected_option;
    },
  },
  watch: {
    "$route.query": "$fetch",
  },
  fetch() {
    this.route = this.$route.name;
    this.selected_option = null;
    this.getOrDefaultSelected();
  },
  computed: {
    selected: {
      get: function () {
        return this.getOrDefaultSelected();
      },
      set: function (v) {
        this.selected_option = v;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_dropdown.scss";
</style>



