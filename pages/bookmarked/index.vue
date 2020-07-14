<template>
  <div>
    <section class="bookemarks">
      <div class="container container--content">
        <SectionBookmarked :item="item" :status="closed" />
        <SectionBookmarked :item="item" :status="closed" />
        <SectionBookmarked :item="item" :status="checked" />
        <SectionBookmarked :item="item" :status="checked" />
        <div class="bookmarks-bottom">
          <div class="row credits">
            <div class="credits-remain">
              <label class="h2">Your Credits Left:</label>
              <br />
              <span class="h2 color-primary-600">565 Subscription</span>
              <br />
              <span class="h4 color-primary-600">&gt; Upgrade Subscription</span>
            </div>
            <div class="credits-used">
              <label class="h2">Total Credit:</label>
              <span class="h2 color-primary-600">32 Credits</span>
              <br />
              <label class="h2">Total Items:</label>
              <span class="h2 color-primary-600">2</span>
            </div>
          </div>
          <div class="row">
            <div class="download-btn">
              <button
                class="button-primary button-primary--large h3"
                type="submit"
                @click="submit"
              >download selected</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SectionBookmarked from "@/components/Sections/SectionBookmarked";

export default {
  name: "Tutorials",
  components: {
    SectionBookmarked
  },
  data() {
    return {
      item: {
        image: {
          url: require("@/assets/img/textures/texture-technistone.png"),
          alt: "Logo"
        }
      },
      closed: require("@/assets/img/icon-close.png"),
      checked: require("@/assets/img/icon-check.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/bookmarked.scss";
</style>
