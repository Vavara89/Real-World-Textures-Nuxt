<template>
  <div>
    <h3 class="h3">
      {{ options.title }}
    </h3>
    <ul class="colorOptions">
      <li v-for="(item, index) in options.items" :key="'item-' + index" class="text item">
        <a @click="setColor(item)" :class="{'active':(item.active)}">
          <div class="colorItem" v-bind="{'style':{'background-color': `#${item}`}}" />
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
      actives: this.$route.query['color'] ? this.$route.query['color'] : []

    };
  },
  methods: {
    setColor(color){
      this.actives = toggleElement(this.actives, color);
      const query = {};
      Object.assign(query, this.$route.query);
      query['color'] = this.actives;
      this.$router.push({path: this.$route.path, query: query})
    }
  },
};
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_leftSidebar.scss";
</style>
