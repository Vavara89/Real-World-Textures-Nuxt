<template>
  <div class="bookmark">
    <div class="bookmark__part">
      <div class="bookmark__part__left">
        <div
          class="bookmark__select"
          :class="{'bookmark__select--selected': item.selected}"
          @click="toggleSelected()"
        ></div>
        <div class="bookmark__img">
          <img :src="item.image" :alt="item.name" />
        </div>
      </div>
      <div class="bookmark__desc">{{ item.name }}</div>
    </div>
    <div class="bookmark__part">
      <div class="bookmark__cost">{{ item.cost }} {{ appendText }}</div>
      <div class="bookmark__btn" @click="deleteBookmark(item)">Delete</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bookmark",
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  methods: {
    toggleSelected() {
      this.item.selected = !this.item.selected;
    },
    deleteBookmark(item) {
      this.$emit("deleteBookmark", item);
    }
  },
  computed: {
    appendText() {
      if (this.item.cost < 1 || this.item.cost > 1) {
        return "credits";
      } else {
        return "credit";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_bookmark.scss";
</style>
