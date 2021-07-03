<template>
  <div>
    <h3 v-if="options.items.length" class="h3">
      {{ options.title }}
    </h3>
    <ul class="colorOptions">
      <li v-for="(item, index) in options.items" :key="'item-' + index" class="text item" :data-color="item">
        <a @click="setColor(item)" :class="{'active':(isActive(item))}">
          <div class="colorItem" v-bind="{'style':{'background-color': `#${item.replace('#', '')}`}}"/>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import {toggleElement} from "@/utils";

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      actives: []
    };
  },
  created() {
    const data = this.$route.query['color'] ? this.$route.query['color'] : [];
    if (data instanceof String) {
      this.actives = data.split(',')
    }
    this.actives = data;
  },
  methods: {
    setColor(color) {
      this.actives = toggleElement(this.actives, color);
      const query = {};
      Object.assign(query, this.$route.query);
      query['color'] = this.actives.join(',');
      this.$router.push({path: this.$route.path, query: query});
    },
    isActive(color) {
      return this.actives ? this.actives.indexOf(color) > -1 : false;
    },
  },

  watch: {
    $route(to, from) {
      if (!this.$route.query['color'] && this.actives) {
        this.actives = [];
      }
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_leftSidebar.scss";
</style>
