<template>
  <div class="dropdown" :class="{search: search, 'full': full}">
    <div
      class="custom-select"
      :tabindex="tabindex"
      @blur="open = false"
    >
      <div
        class="selected"
        :class="{open: open}"
        @click="open = !open"
      >
        {{ selected.value }} <span v-if="selected.count" class="count">({{ selected.count }})</span>
      </div>
      <div
        class="items"
        :class="{selectHide: !open}"
      >
        <div
          v-for="(item, index) in options"
          :key="'item-' + index"
          class="item"
          @click="selected=item; open=false; $emit('input', item)"
        >
          {{ item.value }} <span v-if="item.count" class="count">({{ item.count }})</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dropdown',
  props: {
    options: {
      type: Array,
      required: true
    },
    search: {
      type: Boolean,
      required: false
    },
    full: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false
    };
  },
  mounted () {
    this.$emit('input', this.selected);
  }
};
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_dropdown.scss";
</style>
