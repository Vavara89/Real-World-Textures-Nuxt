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
        <div v-if="paused && !isSafari" class="sidebar__video__cover" @click="togglePlay">
          <!-- <img src="/assets/img/sidebar-cover.jpg"/> -->
        </div>
        <video id="videoElement" controls preload="auto" crossorigin @canplay="updatePaused" @playing="updatePaused" @pause="updatePaused">
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
      videoElement: null,
      paused: null,
      isSafari: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.card.sidebar.isOpened = !this.card.sidebar.isOpened;
    },
    updatePaused(event) {
      this.videoElement = event.target;
      this.paused = event.target.paused;
    },
    togglePlay() {
      if (this.paused) {
        this.videoElement.play();
      } else {
        this.videoElement.pause();
      }
    },
  },
  computed: {
    playing() { return !this.paused; }
  },
  created(){
    if (process.browser){
      this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_sidebar.scss";
</style>
