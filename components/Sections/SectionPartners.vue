<template>
  <section class="partners">
    <div class="container container--content">
      <SectionTitle :subtitle="subtitle" :title="title"/>
      <LogoGrid :logos="logos"/>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionParts/SectionTitle';
import LogoGrid from '@/components/Logos/LogoGrid';

export default {
  name: 'SectionPartners',
  components: {
    SectionTitle,
    LogoGrid
  },
  props: {
    logos:{
      type: Array,
      required: false
    }
  },
  data () {
    return {
      subtitle: 'Our partners',
      title: 'Trusted by',
    };
  },
  methods: {
    // TODO: Delete when connected to API
    getImage (fileName) {
      const flags = require.context(
        '../../assets/img/partners',
        false,
        /\.png$/
      );
      return flags(`./${fileName}.png`);
    }
  }
};
</script>
