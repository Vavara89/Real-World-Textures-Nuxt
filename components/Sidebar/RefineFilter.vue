<template>
  <div>
    <h3 class="h3">
      {{ options.title }}
    </h3>
    <ul>
      <li v-for="(item, index) in options.items" :key="'item-' + index" class="text item">
        <a @click="refine(item)" :class="{'active':(item.active)}">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import {pushQuery, removeQuery} from "@/utils";

export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  methods: {
    refine(item) {
      item.active = !item.active;
      if (item.active) {
        pushQuery(this.$router, this.$route, item.link, true);
      } else {
        removeQuery(this.$router, this.$route, item.link);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_leftSidebar.scss";
</style>
