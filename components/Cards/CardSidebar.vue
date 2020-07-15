<template>
  <!-- <div class="sidebar" :class="{'sidebar--opened': card.sidebar.isOpened }" @click="card.sidebar.isOpened = true"> -->
  <div class="sidebar" :class="{'sidebar--opened': card.sidebar.isOpened }">
    <div class="sidebar__close" @click="toggleSidebar()">
      <SvgIconCross />
    </div>
    <div class="sidebar__title">{{ card.title }}</div>
    <div class="sidebar__subtitle">{{ card.subtitle }}</div>
    <div class="sidebar__cnt">
      <div class="sidebar__text" v-html="card.sidebar.text"></div>
      <div class="sidebar__video">
        <div class="sidebar__video__cover">
          <!-- <img src="/assets/img/sidebar-cover.jpg"/> -->
        </div>
        <video controls preload="auto" crossorigin>
          <source
            src="https://rwt_public_videos.storage.googleapis.com/videos/staalboek-reawote.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="sidebar__list">
        <div class="sidebar__list__itm"></div>
        <div class="sidebar__list__itm"></div>
        <div class="sidebar__list__itm"></div>
        <div class="sidebar__list__itm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIconCross from '~/assets/img/icon-cross.svg?inline';

export default {
  name: "Sidebar",
  components: {
    SvgIconCross
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpened: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.card.sidebar.isOpened = !this.card.sidebar.isOpened;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_sidebar.scss";
</style>
