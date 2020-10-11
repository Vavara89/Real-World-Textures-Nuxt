<template>
  <ul class="menuLeft">
    <li v-for="(item, index) in list" :key="'item-'+ index + '-'+ item.id" class="text item">


      <a v-bind:class="{'active':isActive(item)}" @click="toCategory(item)">
        {{ item.name }}
      </a>

      <ul v-if="isActive(item)" class="subItems">
        <li v-for="(child, index) in item.child" :key="'item-' + index" class="item">
          <a v-bind:class="{'active':(isActive(child))}" @click="toCategory(child)">{{ child.name }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>

export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    active_category: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      active_id: null,
    };
  },

  methods: {
    isActive (item) {
      if (this.active_category) {
        this.active_id = this.active_category.id;
      }else{
        this.active_id = null;
      }
      if (this.active_id === item.id) {
        return true;
      }
      if (item.child.length) {
        const active_child = item.child.filter(item => item.id === this.active_id);
        if (active_child.length) {
          return active_child.pop().id === this.active_id;
        }
      }
      return false;

    },
    toCategory (item) {
      this.active_id = item.id;
      this.$router.replace(item.absolute_url);
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_leftSidebar.scss";
</style>
