<template>
  <div class="page-container">
    <LeftSidebar :profile="true" />
    <div class="page-content">
      <section class="services view-bottom">
        <div class="invoices">
          dsdsdsdsds df
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import LeftSidebar from '@/components/Sidebar/LeftSidebar';

export default {
  name: 'Textures',
  components: {
    LeftSidebar
  },
  data () {
    return {
      subtitle: 'Services',
      title: 'Textures',
      perex:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Join our community on FB'
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
</style>
