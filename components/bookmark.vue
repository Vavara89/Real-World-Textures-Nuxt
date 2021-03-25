<template>
  <div class="bookmark">
    <div class="bookmark__part">
      <div class="bookmark__part__left">
        <div
          class="bookmark__select"
          :class="{ 'bookmark__select--selected': item.selected }"
          @click="toggleSelected()"
        />
        <div class="bookmark__img">
          <img :src="item.image" :alt="item.name">
        </div>
      </div>
      <div class="bookmark__desc">
        {{ item.name }}
      </div>
    </div>
    <div class="option">
      <Dropdown
        v-model="resolution"
        :options="options"
        :checkselect="true"
        :index="index"
      />
    </div>
    <div class="bookmark__part">
      <div class="bookmark__cost">
        {{ item.cost }} {{ appendText }}
      </div>
      <div class="bookmark__btn" @click="deleteBookmark(item)">
        delete
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/Sidebar/Dropdown';
export default {
  name: 'Bookmark',
  components: {
    Dropdown
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: false
    }
  },
  data () {
    return {
      resolution: [],
      options: []
    };
  },
  computed: {
    appendText () {
      if (this.item.cost < 1 || this.item.cost > 1) {
        return 'credits';
      } else {
        return 'credit';
      }
    }
  },
  created () {
    if (this.item.resolutions) {
      this.item.resolutions.map((data) => {
        const label = isNaN(data.resolution)
          ? data.name
          : `${data.resolution}x${data.resolution}px (${data.name})`;
        this.options.push({ value: label });
        data.label = label;
      });
    }
  },
  methods: {
    toggleSelected () {
      this.item.selected = !this.item.selected;
    },
    deleteBookmark (item) {
      this.$emit('deleteBookmark', item);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_bookmark.scss";
</style>
