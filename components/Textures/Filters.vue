<template>
  <div>
    <div v-if="!assets && path">
      <h4 class="h4">

        <template v-if="path.length" v-for="(item, index) in path">
          <nuxt-link
            :class="{'active filter': (index+1 === path.length)}"
            :to="item.url"
          >
            {{item.name}}
          </nuxt-link>
          <span v-if="!(index+1 === path.length)"> > </span>
        </template>
      </h4>
    </div>
    <div v-if="assets">
      <h4 class="h4">
        <nuxt-link
          to="/"
          class="filter is-active"
        >
          My Assets
        </nuxt-link>
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Fitlers',
  props: {
    assets: {
      type: Boolean,
      default: false
    },
    path:{
      type: Array,
      default: []
    }
  }
};
</script>
