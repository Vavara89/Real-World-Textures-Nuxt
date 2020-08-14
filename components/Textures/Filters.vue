<template>
  <div>
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
</template>
<script>
export default {
  name: 'Fitlers'
};
</script>
