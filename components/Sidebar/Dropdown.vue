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
      :key="key"
      @blur="open = false"
    >
      <div
        class="selected"
        :class="{open: open,'custom-select-class': index % 2 !== 0}"
        @click="open = !open"
      >
        <span v-if="!checkselect">{{ selected.value }} <span v-if="selected.count" class="count">({{ selected.count }})</span></span>
        <span
          v-for="(item, index) in isselected.slice(0, 5)"
          :key="index"
          v-if="checkselect && isselected"
        >{{ getSelectedName(item) }}<span v-if="isselected.length > 1 && isselected.length !== index + 1">, </span></span>
        <span v-if="checkselect && isselected.length === 0">{{ options[0].value }}</span>
      </div>
      <div
        class="items"
        :class="{selectHide: !open}"
      >
        <div
          v-for="(item, index) in opts"
          :key="'item-' + index"
          class="item"
          :data-val="'x'"
          @click="click(item)"
        >
          <div v-if="item.value !== options[0].value && checkselect" :class="{'ischecked': isselected.includes(item.value)}" class="ischeck" />
          <span v-if="true">{{ item.value }} <span v-if="item.count" class="count">({{ item.count }})</span></span>
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
    },
    index: {
      type: Number,
      required: false
    },
    customKey: {
      type: String,
      required: false,
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
  watch: {
    'selected.short' (data) {
      if (data && data !== 'brands') {
        const path = '/' + data;
        this.$store.commit('setRedirectUrl', path);
      }
    }
  },
  computed: {
    key () {
      if (this.customKey) {
        return this.customKey;
      }
    },
    opts () {
      return this.options.slice(1);
    }
  },
  methods: {
    getSelectedName(item) {
      const items = item.match(/\(([^)]+)\)/);
      if (items && items.length > 1) {
        return items[1];
      }
      return item;
    },
    clickCheck (sel) {
      if (this.isselected.includes(sel)) {
        this.isselected.splice(this.isselected.indexOf(sel), 1);
      } else {
        this.isselected.push(sel);
      }
    },
    click (item) {
      this.open = this.checkselect;
      this.selected = item;
      if (this.checkselect) {
        this.clickCheck(this.selected.value, item.value);
      }
      const data = this.checkselect ? this.isselected : item;
      this.$emit('input', data);
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_dropdown.scss";
</style>
