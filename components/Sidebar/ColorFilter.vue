<template>
  <div>
    <h3 class="h3">
      {{ options.title }}
    </h3>
    <ul class="colorOptions">
      <li v-for="(item, index) in options.items" :key="'item-' + index" class="text item">
        <a :class="{'active':(item.active)}">
          <div class="colorItem" v-bind="{'style':{'background-color': `#${item}`}}" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_leftSidebar.scss";
</style>
