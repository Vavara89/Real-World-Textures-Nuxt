<template>
  <div>
    <section class="services">
      <div class="container container--content">
          <SectionBookmarked />
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
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/bookmarked.scss";
</style>
