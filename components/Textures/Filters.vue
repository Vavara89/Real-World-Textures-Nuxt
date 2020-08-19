<template>
  <div>
    <div v-if="!assets">
      <h4 class="h4">
        <nuxt-link
          to="/"
        >
          Filter
        </nuxt-link>
        <span> > </span>
        <nuxt-link
          to="/"
        >
          All
        </nuxt-link>
        <span> > </span>
        <nuxt-link
          to="/"
        >
          Concrete
        </nuxt-link>
        <span> > </span>
        <nuxt-link
          to="/"
          class="filter is-active"
        >
          Mossy
        </nuxt-link>
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
    }
  }
};
</script>
