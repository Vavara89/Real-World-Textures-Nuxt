<template>
    <div class="dropdown">
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
            {{ selected.value }} <span class="count" v-if="selected.count">({{ selected.count }})</span>
            </div>
            <div
            class="items"
            :class="{selectHide: !open}"
            >
                <div
                    class="item"
                    v-for="(item, index) in options"
                    :key="'item-' + index"
                    @click="selected=item; open=false; $emit('input', item)"
                >
                {{ item.value }} <span class="count" v-if="item.count">({{ item.count }})</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Dropdown",
    props: {
        options: {
            type: Array,
            required: true
        },
        tabindex:{
      type: Number,
      required: false,
      default: 0
    }
    },
    data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false
    };
  },
  mounted(){
    this.$emit('input', this.selected);
  }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_dropdown.scss";
</style>