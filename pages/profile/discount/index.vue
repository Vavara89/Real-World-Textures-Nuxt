<template>
  <div class="page-container">
    <ProfileSidebar v-if="width > 1200" :profile="true" />
    <div class="page-content">
      <section class="services view-bottom">
        <div class="discount">
          <h2>
            Apply Your Discount Code
          </h2>
          <h3>
            And get 1 month of Basic subscription plan for free
          </h3>

          <div class="input__discount" :class="{'input__discount--filled': checkInputDiscount}">
            <input v-model="input.discount" type="text" class="chrome">
            <label for>Your Discount Code</label>
          </div>
          <div v-if="isDiscountApplied" class="notice">
            Keep in mind that next month will be charged for the regular price of the basic subscription plan - you can cancel your subscription before subscription renewal (within 30 days)
          </div>
          <div style="display: block">
            <Button @click="applyDiscount" text="apply your discount" type="primary" color="green" width="discount" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import LeftSidebar from '@/components/Sidebar/LeftSidebar';
import Button from '@/components/Button';
import ProfileSidebar from '@/components/Sidebar/ProfileSidebar';

export default {
  layout: 'withoutLogo',
  name: 'Discount',
  middleware: 'auth',
  components: {
    ProfileSidebar,
    Button
  },
  data () {
    return {
      subtitle: 'Services',
      title: 'Textures',
      perex:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor a felis rhoncus pretium ac sit amet nibh. Aenean ac malesuada quam, et tempor magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Join our community on FB',
      chrome: false,
      input: {
        discount: ''
      },
      isDiscountApplied: false,
      width: null
    };
  },
  computed: {
    checkInputDiscount () {
      if (this.input.discount.length > 0) {
        return true;
      }
      return false;
    }
  },
  created () {
    if (process.browser) {
      if (navigator.userAgent.toLowerCase().includes('chrome')) {
        this.chrome = true;
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener('resize', this.onResize);
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize () {
      this.innerWidth();
    },
    innerWidth () {
      this.width = window.innerWidth;
    },
    applyDiscount () {
      this.isDiscountApplied = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/profile.scss";
@import "@/assets/scss/pages/buttons.scss";
</style>
