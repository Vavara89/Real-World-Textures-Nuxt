<template>
  <div>
    <!-- <span class="cursor" @click="toggleMessage(modal)">{{ text }}</span> -->
    <span v-if="text"><a href="#" class="button-tertiary button-tertiary--green" @click="toggleMessage(modal)">{{ text }}</a></span>
    <div v-if="taken" class="modal">
      <div class="inner">
        <span class="close" @click="toggleMessage(modal)" />
        <img src="@/assets/img/icon-taken.svg" alt>
        <h2>The email has already been taken.</h2>
        <p class="style">
          forgotten password?
        </p>
        <a href="#" class="style green">reset it</a>
      </div>
    </div>
    <div v-if="captcha" class="modal">
      <div class="inner">
        <span class="close" @click="toggleMessage(modal)" />
        <img src="@/assets/img/icon-captcha.svg" alt>
        <h2>The captcha field is required.</h2>
        <p class="style">
          no materials for robots. sorry.
        </p>
        <a href="#" class="style green">try it again</a>
      </div>
    </div>
    <div v-if="bookmarked" class="modal">
      <div class="inner">
        <span class="close" @click="toggleMessage(modal)" />
        <img src="@/assets/img/icon-bookmarked.svg" alt>
        <h2>Succesfully bookmarked</h2>
        <p class="style">
          You can download it from
        </p>
        <a href="#" class="style green">bookmark section</a>
      </div>
    </div>
    <div v-if="wrong" class="modal">
      <div class="inner">
        <span class="close" @click="toggleMessage(modal)" />
        <img src="@/assets/img/icon-wrong.svg" alt>
        <h2>Something went wrong</h2>
        <p class="style">
          omg we're sorry. please, check it later.
        </p>
        <a href="#" class="style green">or get help</a>
      </div>
    </div>
    <div v-if="reset" class="modal">
      <div class="inner">
        <span class="close" @click="toggleMessage(modal)" />
        <h2>Reset your password</h2>
        <form method="post" class="email" @submit="checkEmail">
          <label class="email">Your email address</label>
          <input
            id="email"
            v-model="email"
            class="email"
            :class="{'email--error': errors.length && !added}"
            type="text"
            placeholder="Your email address"
            name="email"
          >
          <div class="errors" :class="{'success': added}">
            <span v-if="errors.length">{{ errors[0] }}</span>
          </div>
          <button type="submit" class="email">
            confirm
          </button>
        </form>
      </div>
    </div>
    <div v-if="payment || openpayment" class="modal card is-background">
      <div class="inner address is-card">
        <span class="close" @click="toggleMessage(modal), setPayment()" />
        <h2>Update Payment Method</h2>
        <h3 class="upper">Secured and encrypted by lorem ipsum</h3>
        <form method="post" class="email" @submit="checkEmail">
          <table style="text-align: left; margin-top: 60px;">
            <tbody>
              <tr>
                <td colspan="1">
                  Card Number
                </td>
                <td colspan="3">
                  <input
                    :class="{'email--error': errors.length && !added}"
                    type="text"
                    class="input"
                    name="address"
                    placeholder=""
                  >
                </td>
              </tr>
              <tr>
                <td>Expiration Date</td>
                <td>
                  <input
                    :class="{'email--error': errors.length && !added}"
                    type="text"
                    placeholder="MM/YY"
                    class="input small"
                    name="suit"
                  >
                </td>
                <td style="width: 65px; text-align: right;">
                  CVV
                </td>
                <td>
                  <input
                    :class="{'email--error': errors.length && !added}"
                    type="text"
                    placeholder=""
                    class="input small"
                    name="suit"
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <button type="submit" class="email special">
          <span>Update Payment Method</span>
          <span>Update now</span>
          <div class="ar" />
        </button>
      </div>
    </div>
    <div v-if="address || openaddress" class="modal is-address is-background">
      <div class="inner address">
        <span class="close" @click="toggleMessage(modal), setAddress()" />
        <h2>Edit Your Billing address</h2>
        <form method="post" class="email" @submit="checkEmail">
          <table style="text-align: left;">
            <tbody>
              <tr>
                <td>Street Address</td>
                <td>
                  <input
                    :class="{'email--error': errors.length && !added}"
                    type="text"
                    class="input"
                    name="address"
                    placeholder="Název Ulice"
                  >
                </td>
              </tr>
              <tr>
                <td>Apt, suit, etc (optional)</td>
                <td>
                  <input
                    :class="{'email--error': errors.length && !added}"
                    type="text"
                    placeholder=""
                    class="input"
                    name="suit"
                  >
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <input
                    :class="{'email--error': errors.length && !added}"
                    type="text"
                    placeholder=""
                    class="input"
                    name="city"
                  >
                </td>
              </tr>
              <tr>
                <td>Postal Code / Zip Code</td>
                <td>
                  <input
                    :class="{'email--error': errors.length && !added}"
                    type="text"
                    placeholder=""
                    class="input"
                    name="zip"
                  >
                </td>
              </tr>
              <tr>
                <td>Country</td>
                <td>
                  <input
                    :class="{'email--error': errors.length && !added}"
                    type="text"
                    placeholder=""
                    class="input"
                    name="country"
                  >
                </td>
              </tr>
              <tr>
                <td>State/Territory</td>
                <td>
                  <Dropdown :options="options" :input="true" />
                </td>
              </tr>
              <tr>
                <td>VAT number (if applicable)</td>
                <td>
                  <input
                    :class="{'email--error': errors.length && !added}"
                    type="text"
                    placeholder=""
                    class="input"
                    name="vat"
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <div class="errors" :class="{'success': added}">
            <span v-if="errors.length">{{ errors[0] }}</span>
          </div>
          <button type="submit" class="email special">
            <span>Update billing address</span>
            <span>Update now</span>
            <div class="ar" />
          </button>
        </form>
      </div>
    </div>
    <div
      v-if="taken || captcha || bookmarked || wrong || reset || payment || address || openaddress || openpayment"
      class="silkscreen"
      @click="toggleMessage(modal), setPayment(), setAddress()"
    />
  </div>
</template>

<script>
import Dropdown from '@/components/Sidebar/Dropdown';

export default {
  name: 'LoginModals',
  components: {
    Dropdown
  },
  props: {
    text: {
      type: String,
      required: true
    },
    modal: {
      type: String,
      required: true
    },
    openaddress: {
      type: Boolean,
      default: false
    },
    openpayment: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    // Reset password
    errors: [],
    email: null,
    added: false,

    // Modals
    taken: false,
    captcha: false,
    bookmarked: false,
    wrong: false,
    reset: false,
    payment: false,
    address: false,
    options: [
      {
        value: 'Moldave'
      },
      {
        value: 'Czech Republic'
      },
      {
        value: 'England'
      },
      {
        value: 'United States'
      },
      {
        value: 'France'
      },
      {
        value: 'Nebraska'
      }
    ]
  }),
  watch: {
    openpayment (newValue) {
      if (newValue) {
        this.scrollSwitcher('payment');
      }
    },
    openaddress (newValue) {
      if (newValue) {
        this.scrollSwitcher('address');
      }
    }
  },
  methods: {
    scrollSwitcher (state) {
      if (state) {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
    toggleMessage (message) {
      if (message === 'taken') {
        this.taken = !this.taken;
        this.scrollSwitcher(this.taken);
      }
      if (message === 'captcha') {
        this.captcha = !this.captcha;
        this.scrollSwitcher(this.captcha);
      }
      if (message === 'bookmarked') {
        this.bookmarked = !this.bookmarked;
        this.scrollSwitcher(this.bookmarked);
      }
      if (message === 'wrong') {
        this.wrong = !this.wrong;
        this.scrollSwitcher(this.wrong);
      }
      if (message === 'reset') {
        this.reset = !this.reset;
        this.scrollSwitcher(this.reset);
        this.resetForm();
      }
      if (message === 'payment') {
        this.payment = !this.payment;
        this.scrollSwitcher(this.payment);
      }
      if (message === 'address') {
        this.address = !this.address;
        this.scrollSwitcher(this.address);
      }
    },
    checkEmail (e) {
      e.preventDefault();
      this.errors = [];

      if (!this.email) {
        this.errors.push('* Please, enter your email address.');
        this.added = false;
      } else if (!this.validEmail(this.email)) {
        this.errors.push('* Please, enter valid email address.');
        this.added = false;
      } else if (!this.accountEmail(this.email)) {
        this.errors.push('* This account does not exist.');
        this.added = false;
      } else if (this.validEmail(this.email)) {
        this.errors.push('Your new password has been sent.');
        this.email = '';
        this.added = true;
        return true;
      }
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    accountEmail (email) {
      // TODO: Ověřit ze seznamu již registrovaných účtů
      return true;
    },
    resetForm () {
      this.email = '';
      this.errors = [];
    },
    setPayment () {
      if (this.openpayment) {
        this.$emit('setDuration', 'payment');
        this.toggleMessage('payment');
      }
    },
    setAddress () {
      if (this.openaddress) {
        this.$emit('setDuration', 'address');
        this.toggleMessage('address');
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>
