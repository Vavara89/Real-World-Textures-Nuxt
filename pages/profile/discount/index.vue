<template>
  <div class="page-container">
    <LeftSidebar :profile="true" />
    <div class="page-content">
      <section class="services view-bottom">
        <div class="discount">
          <h2>
            Apply Your Discount Code
          </h2>
          <h3>
            and get 1 month subscription for 1$
          </h3>

          <input type="text" placeholder="Your Discount Code">
          <Button link="" text="apply your discount" type="primary" color="green" width="discount" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import LeftSidebar from '@/components/Sidebar/LeftSidebar';
import Button from '@/components/Button';

export default {
  name: 'Textures',
  components: {
    LeftSidebar,
    Button
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
@import "@/assets/scss/pages/buttons.scss";
</style>
