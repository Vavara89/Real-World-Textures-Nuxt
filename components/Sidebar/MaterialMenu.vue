<template>
  <ul class="menuLeft">
    <li v-for="(item, index) in list" :key="'item-' + index" class="text item">
      <a v-if="!item.child" v-bind:class="{'active':(item.active)}">{{ item.name }}</a>
      <a v-if="item.child" href="javascript:;" v-bind:class="{'active':(item.active)}">
        {{ item.name }}
        <ul class="subItems">
          <li v-for="(child, index) in item.child" :key="'item-' + index" class="item">
            <a v-bind:class="{'active':(child.active)}">{{ child.name }}</a>
          </li>
        </ul>
      </a>
    </li>
  </ul>
</template>
<script>

export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    active_id: {
      type: Number,
      required: false
    },
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_leftSidebar.scss";
</style>
