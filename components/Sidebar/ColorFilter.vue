<template>
  <div>
    <h3 v-if="options.items.length" class="h3">
      {{ options.title }}
    </h3>
    <ul class="colorOptions">
      <li v-for="(item, index) in options.items" :key="'item-' + index" class="text item" :data-color="item">
        <a :class="{'active':(isActive(item))}" @click="setColor(item)">
          <div class="colorItem" v-bind="{'style':{'background-color': `#${item.replace('#', '')}`}}" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { toggleElement } from '@/utils';

export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      actives: []
    };
  },

  watch: {
    $route (to, from) {
      if (!this.$route.query.color && this.actives) {
        this.actives = [];
      }
    }
  },
  created () {
    const data = this.$route.query.color ? this.$route.query.color : [];
    if (data instanceof String) {
      this.actives = data.split(',');
    }
    this.actives = data;
  },
  methods: {
    setColor (color) {
      this.actives = toggleElement(this.actives, color);
      const query = {};
      Object.assign(query, this.$route.query);
      query.color = this.actives.join(',');
      if (Object.keys(query).includes('page')) {
        delete query.page;
      }
      this.$router.push({ path: this.$route.path, query });
    },
    isActive (color) {
      return this.actives ? this.actives.includes(color) : false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_leftSidebar.scss";
</style>
