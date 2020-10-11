<template>
  <div v-if="opened">
    <div class="modal centered-window tutorial">
      <span class="close" @click="scrollSwitcher(false)" />
      <div class="inner">
        <div>
          <h2>{{ tutorial.title }}</h2>
        </div>
        <div class="text" v-html="tutorial.text" />

        <iframe
          v-if="tutorial.link"
          width="100%"
          height="315"
          :src="tutorial.link"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>

    <div class="silkscreen" />
  </div>
</template>

<script>

export default {
  name: 'VideoModal',
  props: {
    tutorial: {
      type: Object,
      required: false
    }
  },
  data: () => ({
    opened: false
  }),
  methods: {
    scrollSwitcher (state) {
      if (state) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      this.opened = !this.opened;
    }

  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>
