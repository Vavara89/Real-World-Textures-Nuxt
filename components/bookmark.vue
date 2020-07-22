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
          <img :src="item.image.url" :alt="item.image.alt" />
        </div>
      </div>
      <div class="bookmark__desc">{{ item.desc }}</div>
    </div>
    <div class="bookmark__part">
      <div class="bookmark__cost">{{ item.cost }} {{ appendText }}</div>
      <div class="bookmark__btn" @click="deleteBookmark(index)">Delete</div>
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
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    toggleSelected() {
      this.item.selected = !this.item.selected;
    },
    deleteBookmark(index) {
      this.$emit("deleteBookmark", index);
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
