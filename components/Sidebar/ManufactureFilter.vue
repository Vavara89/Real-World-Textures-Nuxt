<template>
  <div class="area">
<!--    <button v-if="brands_list" class="toggleOption" @click="toggleOption">-->
<!--      Select a manufacturer-->
<!--    </button>-->
    <div>
      <DropdownAreas :areas="areas"/>
    </div>
    <Modal v-model="modalOpen" :option="modalOpt" :list="manufactorList" />
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
      manufactorList: [
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },

        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        },
        {
          company: 'Company name like Stone',
          location: 'Ostrava, Czech Rep.',
          site: 'companynamestone.cz'
        }
      ]
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
