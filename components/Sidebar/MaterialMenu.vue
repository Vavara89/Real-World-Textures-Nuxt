<template>
  <ul class="menuLeft">
    <li class="item">
      <a v-bind:class="{'active':allActive}" :href='allLink'>
        All
      </a>
    </li>
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
  },
  data () {
    return {
      active_id: null,
    };
  },
  computed: {
    allLink () {
      return this.$route.matched[0].path;
    },
    allActive () {
      return this.allLink === this.$route.path;
    },
    isBrandPage(){
      return this.$route.matched[0].path === '/brands'
    },
  },
  methods: {

    isActive (item) {
      const currentUrl = this.$route.path.split('?')[0];
      if (item.absolute_url === currentUrl) {
        return true;
      }
      if (item.child.length) {
        const active_child = item.child.filter(item =>{
          const url = item.absolute_url.split('?')[0];
          return url === currentUrl;
        });
        return active_child.length;
      }
      return false;

    },
    toCategory (item) {
      const currentUrl = this.$route.path;
      if(currentUrl !== item.absolute_url){
        this.$router.replace(item.absolute_url);
      }
    },

  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/_leftSidebar.scss";
</style>
