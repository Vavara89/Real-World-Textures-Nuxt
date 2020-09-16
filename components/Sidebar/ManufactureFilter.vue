<template>
  <div class="area">
    <button v-if="brands_list && brands_list.length" class="toggleOption" @click="toggleOption">
      Select a manufacturer
    </button>
    <div>
      <DropdownAreas :areas="areas"/>
    </div>
    <Modal v-model="modalOpen" :option="modalOpt" :list="brands_list" :set="true"/>
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
  }
};
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_leftSidebar.scss";

    .area {
        text-align: center;
    }
</style>
