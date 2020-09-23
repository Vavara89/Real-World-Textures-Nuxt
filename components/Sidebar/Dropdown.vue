<template>
  <div class="dropdown" :class="{search: search, 'full': full, 'input': input}">
    <div
      v-if="input"
      :class="{showarrowopen: open}"
      class="showarrow"
      @click="open = !open"
    />
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
          @click="selected=item; checkselect ? open=true : open=false; $emit('input', item); clickCheck(selected.value, item.value)"
        >
          <div :class="{'ischecked': selected == item}" class="ischeck" />
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
    },
    selected_option: null,
    input: {
      type: Boolean,
      default: false
    },
    checkselect: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selected: this.selected_option ? this.selected_option : this.options.length > 0 ? this.options[0] : null,
      open: false,
      checked: false,
      isselected: []
    };
  },
  methods: {

    clickCheck (sel) {
      if (this.isselected) {
        this.isselected.map((item) => {
          if (sel === item) {
            this.isselected.includes(sel) && this.isselected.splice(this.isselected.indexOf(sel), 1);
          } else {
            this.isselected.push(sel);
          }
        });
      } else {
        this.isselected.push(sel);
      }
      console.log(this.isselected);
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_dropdown.scss";
</style>
