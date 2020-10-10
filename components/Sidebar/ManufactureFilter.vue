<template>
  <div class="area">
    <button v-if="brands_list && brands_list.length" class="toggleOption" @click="toggleOption">
      Select a manufacturer
    </button>
    <div>
      <DropdownAreas :areas="areas"/>
    </div>
    <Modal @change="setSelected" v-model="modalOpen" :option="modalOpt" :list="brands_list" :set="true"/>
  </div>
</template>
<script>
import Modal from '@/components/Modal/Modal';
import DropdownAreas from '~/components/Sidebar/DropdownAreas'
export default {
  name: 'ManufactureFilter',
  components: {
    DropdownAreas,
    Modal
  },

  props: {
    countries: {
      type: Array,
      required: false
    },
    areas: {
      type: Array,
      required: false,
    },
    brands_list:{
      type: Array,
      required: false
    },
  },

  data () {
    return {
      modalOpt: 'manufactorList',
      modalOpen: false,
    };
  },

  methods: {
    toggleOption (event) {
      this.modalOpen = !this.modalOpen;
    },
    setSelected(brands) {
        if(brands.length){
          this.pushToQuery('brand_id__in', brands.join(','))
        }else{
          this.cleanQuery('brand_id__in')
        }
    },
    pushToQuery(key, value) {
      const query = {};
      Object.assign(query, this.$route.query);
      query[key] = value;
      this.$router.push({path: this.$route.path, query});
    },
    cleanQuery(key) {
      const query = {};
      Object.assign(query, this.$route.query);
      query[key] ? delete query[key] : null;
      this.$router.push({path: this.$route.path, query});
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_leftSidebar.scss";

    .area {
        text-align: center;
    }
</style>
