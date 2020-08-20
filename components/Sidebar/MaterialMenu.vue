<template>
  <ul class="menuLeft">
    <li v-for="(item, index) in list" :key="'item-'+ index + '-'+ item.id" class="text item">



      <nuxt-link v-bind:class="{'active':item.id===active_id}" :to="item.absolute_url">
        {{ item.name }}
      </nuxt-link>
      <ul v-if="item.id===active_id" class="subItems">
        <li v-for="(child, index) in item.child" :key="'item-' + index" class="item">
          <nuxt-link v-bind:class="{'active':(child.id===active_id)}" :to="item.absolute_url">{{ child.name }}</nuxt-link>
        </li>
      </ul>
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
  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_leftSidebar.scss";
</style>
