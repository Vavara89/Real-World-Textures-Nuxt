<template>
  <div class="item">
    <img class="item-status" :src="status" />
    <img class="item-img" :src="item.image.url" />
    <span class="h2 item-title">Cliff Grey Chunky 008</span>
    <span class="h2 color-primary-600">8 credits</span>
    <a class="h4-lowercase item-delete-btn color-secondary-red">delete</a>
  </div>
</template>

<script>
export default {
  name: "SectionBookmarked",
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_sectionbookmarked.scss";
</style>
