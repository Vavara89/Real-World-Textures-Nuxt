<template>
  <div v-if="opened">
    <div class="modal card is-background centered-window min-height">
      <div class="inner address is-card">
        <span class="close" @click="toggleMessage()" />
        <h2>Are you sure you want to cancel your subscription?</h2>
        <h3 class="upper upper-perex">
          Please note: Any remaining credits will expire at the end of your current billing cycle
        </h3>
        </form>
        <button type="submit" class="email special">
          Confirm cancle
        </button>
      </div>
    </div>
    <div class="silkscreen" />
  </div>
</template>

<script>
import Success from '@/components/Success/Success';

export default {
  components: {
    Success
  },
  data () {
    return {
      opened: false,
      saved: false,
      send: false,
      number: null,
      exp_date: null,
      cvc: null,
      card_number_mask: null,
      exp_date_mask: '##/##',
      cvv_mask: null,
      formErrors: {
        number: [],
        exp_date: [],
        cvc: []
      }
    };
  },
  created () {
  },
  methods: {
    scrollSwitcher (state) {
      if (state) {
        document.body.style.overflow = 'hidden';
      } else {
        this.send = false;
        this.saved = false;
        document.body.style.overflow = 'auto';
      }
      this.opened = !this.opened;
    },
    toggleMessage (close = false) {
      this.scrollSwitcher(close);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>
