<template>
  <div class="sidebar" :class="{'sidebar--opened': isOpened }">
    <div class="sidebar__close" @click="isOpened = false">
      <SvgIconCross />
    </div>
    <div class="sidebar__title">For Architects</div>
    <div class="sidebar__subtitle">Looking for nice floor or material for facade? No problem!</div>
    <div class="sidebar__cnt">
      <div class="sidebar__text">
        <p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>
        <p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>
        <p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>
        <p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>
        <p>Choose the best material for your project, make visualisation for your client and buy a surface in the real world.</p>
      </div>
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
  data() {
    return {
      isOpened: false,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_sidebar.scss";
</style>
