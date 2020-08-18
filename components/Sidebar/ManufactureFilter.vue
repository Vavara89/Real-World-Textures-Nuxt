<template>
  <div class="area">
    <button v-if="!brands" class="toggleOption" @click="toggleOption">
      Select a manufacturer
    </button>
    <div>
      <h3 class="h3">
        Select by area
      </h3>
      <Dropdown :options="confidents" />
      <div class="header-search">
        <input type="text" name="s" placeholder="Search a Country" autocomplete="off">
      </div>
    </div>
    <Modal v-model="modalOpen" :option="modalOpt" :list="manufactorList" />
  </div>
</template>
<script>
import Dropdown from '@/components/Sidebar/Dropdown';
import Modal from '@/components/Modal/Modal';

export default {
  name: 'ManufactureFilter',
  components: {
    Dropdown,
    Modal
  },

  props: {
    confidents: {
      type: Array,
      required: true
    },
    brands: {
      type: Boolean,
      default: false
    }
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
